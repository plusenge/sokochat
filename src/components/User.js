import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import useSnapshot from "../utils/useSnapshot"

const User = ({ user, selectUser, chat, online, user1 }) => {
  const user2 = user.other.uid;
  const id =
    user1 > user2
      ? `${user1}.${user2}.${user.ad?.adId}`
      : `${user2}.${user1}.${user.ad?.adId}`;

  const { val } = useSnapshot("messages", id);

  const [selectedUser, setSelectedUser] = useState(null);
  if (!user || !user.ad || !user.ad.title) {
    return null; // Return null to hide the user
  }
  let userClass =
    "d-flex align-items-center justify-content-center justify-content-md-start my-2 p-1";
  if (chat && user.ad.title !== chat.ad.title) {
    userClass += " unavailable";
  }
  if (selectedUser && selectedUser.ad.title === user.ad.title) {
    userClass += " selected";
  }
  const handleClick = () => {
    setSelectedUser(user);
    selectUser(user);
  };
  // Log values for debugging
  console.log("val: ", val);
  console.log("val.lastSender: ", val?.lastSender);
  console.log("val.lastUnread: ", val?.lastUnread);
  return (
    <div>
    <div
      className={`d-flex align-items-center justify-content-center justify-content-md-start my-2 p-1 mx-1 ${
        user.ad.title === chat?.ad.title ? "user-bg" : ""
      } ${
        val?.lastSender !== user1 && val?.lastUnread ? "bg-info !important" : ""
      }`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div style={{ position: "relative" }}>
        {user.other.photoUrl ? (
          <img
            src={user.other.photoUrl}
            alt={user.other.name}
            style={{
              width: "60px",
              height: "60px",
              border: "1px solid #fff",
              borderRadius: "50%",
            }}
          />
        ) : (
          <FaUserCircle size={50} />
        )}
        <span
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            bottom: "-5px",
            left: "77%",
            transform: "translateX(-50%)",
            borderRadius: "50%",
          }}
          className={`${
            online[user.other.uid] ? "status-online" : "status-offline"
          } `}
        />
      </div>
      <div className="d-none d-md-inline-block ms-2">
        <h6>
        {user.other.name}
          <br />
        <span className="product-name">{user.ad.title}</span>  
        </h6>
        </div>
      </div>
      </div>
  );
};
export default User;

