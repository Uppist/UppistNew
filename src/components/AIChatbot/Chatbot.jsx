/** @format */

import React, { useRef, useState } from "react";
import styles from "./style.module.css";
import back from "../../assets/left.svg";
import ai from "../../assets/ai.svg";
import cancel from "../../assets/cancel2.svg";
import emoji from "../../assets/emoji.svg";
import enter from "../../assets/enter.svg";
import chatbot from "../../assets/chatbot.svg";
import axios from "axios";

export default function Chatbot({ Close, handleClose }) {
  const [chatHistory, setChatHistory] = useState([]);

  function generateResponse(history) {
    console.log(history);
  }

  const inputRef = useRef();
  async function handleSubmit(e) {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Show user message immediately
    setChatHistory((prev) => [
      ...prev,
      { role: "user", text: userMessage },
      { role: "model", text: "" }, // temporary placeholder
    ]);

    try {
      const response = await axios.post(
        "https://bot.uppist.xyz/chat",
        {
          user_prompt: userMessage,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const aiReply = response.data.response.content;
      // console.log(response.data.response.content);

      // Replace "Thinking..." with actual response
      setChatHistory(
        (prev) => [
          ...prev.slice(0, -1), // remove "Thinking..."
          { role: "model", text: aiReply },
        ],
        generateResponse([...chatHistory], { role: "model", text: userMessage })
      );
    } catch (error) {
      console.error("Error getting AI response:", error);
      setChatHistory((prev) => [
        ...prev.slice(0, -1),
        { role: "model", text: "Error: Could not get response." },
      ]);
    }
  }

  return (
    <div className={styles.chatbot}>
      <div className={styles.logos}>
        <img src={back} alt='' onClick={Close} />
        <img src={ai} alt='' />
        <img src={cancel} alt='' onClick={handleClose} />
      </div>

      <div className={styles.texts}>
        {chatHistory.map((chat, index) => (
          <div
            className={` ${
              chat.role === "model" ? styles.bot : styles.human
            } message user-message`}
            key={index}
          >
            {chat.role === "model" && <img src={chatbot} alt='' />}
            <span>{chat.text}</span>
          </div>
        ))}

        {/* <div className={styles.bot}>
          <span>bot</span>
        </div> */}
      </div>

      <form action='' onSubmit={handleSubmit}>
        <div className={styles.send}>
          <div>
            <textarea
              ref={inputRef}
              type='text'
              placeholder='Ask me anything...'
              required
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            ></textarea>
            <img src={emoji} alt='' />
          </div>
          <button>
            <img src={enter} alt='' />
          </button>
        </div>
      </form>
    </div>
  );
}
