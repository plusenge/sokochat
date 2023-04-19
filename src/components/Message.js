import React, { useRef, useEffect } from "react";
import moment from "moment";

const Message = ({ msg, user1, onDelete }) => {
  const createdAt = moment(msg.createdAt.toDate());
  const formattedDateTime = createdAt.format("MMM DD YYYY h:mm A");

  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  return (
    <div
      className={`mb-3 mt-2 d-flex flex-column  align-items-${
        msg.sender === user1 ? "end" : "start"
      }`}
      ref={scrollRef}
    >
      <div
        className={`py-2 px-3 rounded-3 ${
          msg.sender === user1
            ? "sendMessage__color text-white"
            : "receiverMessage-color"
        }`}
        style={{ maxWidth: "70%" }}
      >
        <p className="m-0">{msg.text}</p>
      </div>
      <small
        className={`text-muted ${
          msg.sender === user1 ? "align-self-end" : "align-self-start"
        } mt-1`}
        style={{ marginLeft: "1rem", marginRight: "1rem" }}
      >
        {formattedDateTime}
      </small>
    </div>
  );
};

export default Message;
