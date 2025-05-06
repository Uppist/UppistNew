/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";
import logo from "../../assets/logo.svg";
import cancel from "../../assets/cancel.svg";
import chatbot from "../../assets/chatbot.svg";
import Chatbot from "./Chatbot";
export default function Welcome({ handleClose }) {
  const [isChatbot, setIsChatbot] = useState(false);

  function handleClick() {
    setIsChatbot(true);
  }
  function Close() {
    setIsChatbot(false);
  }

  return (
    <div className={styles.dropdown}>
      <div className={styles.overlay}></div>
      <div className={styles.welcome}>
        {isChatbot ? (
          <Chatbot Close={Close} />
        ) : (
          <>
            <div className={styles.header}>
              <div className={styles.header__logo}>
                <img src={logo} alt='' />
                <img src={cancel} alt='' onClick={handleClose} />
              </div>
              <h2>Hello, how can we help you today? 👋</h2>
            </div>
            <div className={styles.content}>
              <div className={styles.text}>
                <img src={chatbot} alt='' />
                <span>
                  Ask all your questions and generate essays, articles, reports,
                  success stories & more
                </span>
              </div>
              <button onClick={handleClick}>Chat with us</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
