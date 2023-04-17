import React from "react";

const MessageForm = ({ text, setText, handleSubmit }) => {
  return (
    <form
      className="position-fixed bottom-0 p-2 w-100"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Write your message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", }}
      />
    </form>
  );
};
export default MessageForm;
