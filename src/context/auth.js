import { createContext, useState, useEffect, useRef } from "react";
import { FacebookAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth,db} from "../firebaseConfig";
import Loading from "../components/Loading";
// import { QuerySnapshot, collection, onSnapshot } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [unread, setUnread] = useState([]);
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const timeoutRef = useRef(null);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        const msgRef = collection(db, 'messages')
        const q = query(msgRef, where('users', 'array-contains', user.uid))

        const unsub = onSnapshot(q, querySnapshot => {
          querySnapshot.forEach(snap => {
            let data = snap.data()
            if (data.lastText && data.lastSender !== user.uid && data.lastUnread) {
              unread.push({...data, id: snap.id})
            }
          })
          setUnread(unread)
        })
        return () => unsub();
      }

    });
  },[]);
  if (loading) {
    return <Loading />;
  }
  return (
    <AuthContext.Provider value={{ user, unread }}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
