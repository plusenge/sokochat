import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const User = ({ user, selectUser, chat }) => {
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

  return (
    <div
      className={`d-flex align-items-center justify-content-center justify-content-md-start my-2 p-1 mx-1 ${
        user.ad.title === chat?.ad.title ? "user-bg" : ""
      }`}
      // className={`${userClass}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {user.photoUrl ? (
        <img
          src={user.photoUrl}
          alt={user.name}
          style={{ width: "50", height: "50px", borderRadius: "50%" }}
        />
      ) : (
        <FaUserCircle size={50} />
      )}
      <div className="d-none d-md-inline-block ms-2">
        <h6>
          {user.other.name}
          <br />
          {user.ad.title}
        </h6>
      </div>
    </div>
  );
};
export default User;

