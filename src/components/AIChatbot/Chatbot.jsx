/** @format */

import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import back from "../../assets/left.svg";
import ai from "../../assets/ai.svg";
import cancel from "../../assets/cancel2.svg";
import emoji from "../../assets/emoji.svg";
import enter from "../../assets/enter.svg";
import chatbot from "../../assets/chatbot.svg";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export default function Chatbot({ Close, handleClose }) {
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

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
    setChatHistory((prev) => [...prev, { role: "user", text: userMessage }]);

    setIsTyping(true);
    setChatHistory((prev) => [
      ...prev,
      { role: "model", text: "..." }, // Placeholder for AI response
    ]);

    try {
      const response = await axios.post(
        "https://bot.uppist.xyz/chat",
        {
          user_prompt: userMessage,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const aiReply = response.data.response.content;

      // Replace "Thinking..." with actual response
      setTimeout(() => {
        setIsTyping(false);

        setChatHistory(
          (prev) => [
            ...prev.slice(0, -1), // remove "Thinking..."
            { role: "model", text: aiReply },
          ],
          generateResponse([...chatHistory], {
            role: "model",
            text: userMessage,
          })
        );
      }, 1000);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setIsTyping(false);
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
            <div ref={messagesEndRef} />
            {chat.text === "..." && isTyping ? (
              <div className={styles.typing}>
                <span>. . .</span>
                {/* <span>.</span> */}
                {/* <span>.</span> */}
              </div>
            ) : chat.role === "model" ? (
              <div className={styles.botText}>
                <ReactMarkdown>{chat.text}</ReactMarkdown>
              </div>
            ) : (
              <span>{chat.text}</span>
            )}
          </div>
        ))}
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
            <img src={enter} className={styles.sendImg} alt='' />
          </button>
        </div>
      </form>
    </div>
  );
}
