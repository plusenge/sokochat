// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";

// const User = ({ user, selectUser, chat }) => {
//   const [selectedUser, setSelectedUser] = useState(null);

//   if (!user || !user.ad || !user.ad.title) {
//     return null; // Return null to hide the user
//   }

//   let userClass =
//     "d-flex align-items-center justify-content-center justify-content-md-start my-2 p-1";
//   if (chat && user.ad.title !== chat.ad.title) {
//     userClass += " unavailable";
//   }
//   if (selectedUser && selectedUser.ad.title === user.ad.title) {
//     userClass += " selected";
//   }
//   const handleClick = () => {
//     setSelectedUser(user);
//     selectUser(user);
//   };

//   return (
//     <div
//       className={`d-flex align-items-center justify-content-center justify-content-md-start my-2 p-1 mx-1 ${
//         user.ad.title === chat?.ad.title ? "user-bg" : ""
//       }`}
//       // className={`${userClass}`}
//       onClick={handleClick}
//       style={{ cursor: "pointer" }}
//     >
//       {user.other.photoUrl ? (
//         <img
//           src={user.other.photoUrl}
//           alt={user.other.name}
//           style={{
//             width: "50px",
//             height: "50px",
//             border: "1 solid #f1f1f1",
//             borderRadius: "50%",
//           }}
//         />
//       ) : (
//         <FaUserCircle size={50} />
//       )}

//       <div className="d-none d-md-inline-block ms-2">
//         <h6>
//           {user.other.name}
//           <br />
//           {user.ad.title}
//         </h6>
//       </div>
//     </div>
//   );
// };
// export default User;


import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const User = ({ user, selectUser, chat, online }) => {
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
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div style={{ position: "relative" }}>
        {user.other.photoUrl ? (
          <img
            src={user.other.photoUrl}
            alt={user.other.name}
            style={{
              width: "50px",
              height: "50px",
              border: "1 solid #f1f1f1",
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
            bottom: "0px",
            left: "77%",
            transform: "translateX(-50%)",
            borderRadius: "50%",
          }}
          className={`${
            online[user.other.uid] ? "status-online" : "status-offline"
          }`}
        />
      </div>

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
