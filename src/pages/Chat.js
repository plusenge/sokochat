import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import React, {useEffect, useState} from "react";
import { db, auth } from "../firebaseConfig";
import { useLocation, Link } from "react-router-dom";
import MessageForm from "../components/MessageForm/MessageForm";
import User from "../components/User";
import Message from "../components/Message";
import { onAuthStateChanged } from "firebase/auth";

const Chat = () => {
  const [chat, setChat] = useState();
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const [msgs, setMsgs] = useState([]);
  const [online, setOnline] = useState({});

  const location = useLocation();

  const user1 = auth.currentUser.uid;

  const selectUser = async (user) => {
    setChat(user);
    const user2 = user.other.uid;
    const id =
      user1 > user2
        ? `${user1}.${user2}.${user.ad.adId}`
        : `${user2}.${user1}.${user.ad.adId}`;

    const msgsRef = collection(db, "messages", id, "chat");
    const q = query(msgsRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => msgs.push(doc.data()));
      setMsgs(msgs);
    });

    const docSnap = await getDoc(doc(db, 'message', id))
    if (docSnap.exists()) {
      if (docSnap.data().lastSender !== user1 && docSnap.data().lastUnread) {{
          await updateDoc(doc(db, 'messages', id), {
          lastUnread:false,
        })
      }
        
      }
    }
  };
  const getChat = async (ad) => {
    const buyer = await getDoc(doc(db, "users", user1));
    const seller = await getDoc(doc(db, "users", ad.postedBy));
    setChat({ ad, me: buyer.data(), other: seller.data() });
  };

  const getList = async () => {
    const msgRef = collection(db, "messages");
    const q = query(msgRef, where("users", "array-contains", user1));

    const msgsSnap = await getDocs(q);
    const messages = msgsSnap.docs.map((doc) => doc.data());

    const users = [];
    const unsuscribes = [];
    for (const message of messages) {
      const adRef = doc(db, "ads", message.ad);
      const meRef = doc(
        db,
        "users",
        message.users.find((id) => id === user1)
      );
      const otherRef = doc(
        db,
        "users",
        message.users.find((id) => id !== user1)
      );

      const adDoc = await getDoc(adRef);
      const meDoc = await getDoc(meRef);
      const otherDoc = await getDoc(otherRef);

      users.push({
        ad: adDoc.data(),
        me: meDoc.data(),
        other: otherDoc.data(),
      });

      const unsub = onSnapshot(otherRef, (doc) => {
        setOnline((prev) => ({
          ...prev,
          [doc.data().uid]: doc.data().isOnline,
        }));
      });
      unsuscribes.push(unsub);
    }
    setUsers(users);

    return () => {
      unsuscribes.forEach((unsuscribe) => unsuscribe());
    };
  };

  useEffect(() => {
    if (location.state?.ad) {
      getChat(location.state?.ad);
    }
    getList();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user2 = chat.other.uid;
    const chatId =
      user1 > user2
        ? `${user1}.${user2}.${chat.ad.adId}`
        : `${user2}.${user1}.${chat.ad.adId}`;

    await addDoc(collection(db, "messages", chatId, "chat"), {
      text,
      sender: user1,
      createdAt: Timestamp.fromDate(new Date()),
    });

    await updateDoc(doc(db, 'messages', chatId), {
      lastText: text,
      lastSender: user1,
      lastUnread:true,
    })
    setText("");
  };

  // Update the isOnline field in Firestore when the user logs in
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, { isOnline: true }, { merge: true });
    }
  });

  return (
    <div className="row g-0 ">
      <div className="col-2 col-md-4 users_container">
        {users.map((user, i) => (
          <User
            key={i}
            user={user}
            selectUser={selectUser}
            chat={chat}
            online={online}
            user1 = {user1}
          />
        ))}
      </div>
      <div className="col-10 col-md-8 position-relative">
        {chat ? (
          <div>
            <div
              className="text-center mt-1"
              style={{ borderBottom: "1px solid #ddd" }}
            >
              <h3>{chat.other.name}</h3>
            </div>
            <div className="p-2" style={{ borderBottom: "1px solid #ddd" }}>
              <div className="d-flex align-items-center">
                <img
                  src={chat.ad.images[0].url}
                  alt={chat.ad.title}
                  style={{ width: "80px", height: "70px" }}
                />
                <div className="d-flex align-items-center justify-content-between flex-grow-1 ms-1">
                  <div>
                    <h6>{chat.ad.title}</h6>
                    <small>{chat.ad.price}</small>
                  </div>
                  {/* <Link
                      className="btn btn-secondary btn-sm"
                      to={`/${chat.ad.category.toLowerCase()}/${chat.ad.adId}`}
                    >
                      View Ad
                    </Link>  */}
                </div>
              </div>
            </div>
            <div className="messages overflow-auto mx-overflow-0">
              {msgs.map((msg, i) => (
                <Message key={i} msg={msg} user1={user1} />
              ))}
            </div>
            <MessageForm
              text={text}
              setText={setText}
              handleSubmit={handleSubmit}
              className="messageSend"
            />
          </div>
        ) : (
          <div className="text-center mt-5">
            <h3>Select a user to start conversation</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;

