import React, { useState } from "react";
import { FaPaperPlane, FaThumbsUp } from "react-icons/fa";
import "../MessageForm/MessageForm.css";

const MessageForm = ({ text, setText, handleSubmit }) => {
  const [showEmojis, setShowEmojis] = useState(false);

  const handleLikeClick = () => {
    setText(text + "👍");
  };

  return (
    <form className="position-fixed message-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          className="message-input"
          placeholder="Write your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="send-button">
          <FaPaperPlane />
        </button>
        <button type="button" className="like-button" onClick={handleLikeClick}>
          <FaThumbsUp />
        </button>
        <input
          type="button"
          value="😀"
          className="emoji-button"
          onClick={() => setShowEmojis(!showEmojis)}
        />
        {showEmojis && (
          <div className="emoji-container">
            <input
              type="button"
              value="❌"
              className="close-emoji-button"
              onClick={() => setShowEmojis(false)}
            />
            <div className="emoji-grid">
              <input
                type="button"
                value="😀"
                onClick={() => setText(text + "😀")}
              />
              <input
                type="button"
                value="😂"
                onClick={() => setText(text + "😂")}
              />
              <input
                type="button"
                value="❤️"
                onClick={() => setText(text + "❤️")}
              />
              <input
                type="button"
                value="😍"
                onClick={() => setText(text + "😍")}
              />
              <input
                type="button"
                value="🤔"
                onClick={() => setText(text + "🤔")}
              />
              <input
                type="button"
                value="🙏"
                onClick={() => setText(text + "🙏")}
              />
              <input
                type="button"
                value="👍"
                onClick={() => setText(text + "👍")}
              />
              <input
                type="button"
                value="👎"
                onClick={() => setText(text + "👎")}
              />

              <input
                type="button"
                value="😊"
                onClick={() => setText(text + "😊")}
              />

              <input
                type="button"
                value="😎"
                onClick={() => setText(text + "😎")}
              />

              <input
                type="button"
                value="🥰"
                onClick={() => setText(text + "🥰")}
              />

              <input
                type="button"
                value="🤩"
                onClick={() => setText(text + "🤩")}
              />

              <input
                type="button"
                value="🤔"
                onClick={() => setText(text + "🤔")}
              />

              <input
                type="button"
                value="🥰"
                onClick={() => setText(text + "🥰")}
              />

              <input
                type="button"
                value="🤯"
                onClick={() => setText(text + "🤯")}
              />

              <input
                type="button"
                value="🤗"
                onClick={() => setText(text + "🤗")}
              />
              <input
                type="button"
                value="🤔"
                onClick={() => setText(text + "🤔")}
              />
              <input
                type="button"
                value="🤫"
                onClick={() => setText(text + "🤫 ")}
              />

              <input
                type="button"
                value="😴"
                onClick={() => setText(text + "😴")}
              />

              <input
                type="button"
                value="🥱 "
                onClick={() => setText(text + "🥱 ")}
              />

              <input
                type="button"
                value="🤫"
                onClick={() => setText(text + "🤫")}
              />
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default MessageForm;
