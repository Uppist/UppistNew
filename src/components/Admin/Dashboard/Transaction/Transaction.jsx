/** @format */

import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import time from "../../../../assets/Dashboard/time.svg";
import right from "../../../../assets/Dashboard/Icon.svg";
import csv from "../../../../assets/Dashboard/csv.svg";
import vector from "../../../../assets/Dashboard/Vector.svg";
import copy from "../../../../assets/Dashboard/copy.svg";
import delte from "../../../../assets/Dashboard/delte.svg";
import Buttons from "./Buttons";
import axios from "axios";

export default function Transaction({ logs, loading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const totalPages = Math.ceil(logs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLogs = logs.slice(startIndex, startIndex + itemsPerPage);
  const [isClick, setIsClick] = useState(null);
  const [isTime, setIsTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState("All Time");

  const Time = [
    "Today",
    "Yesterday",
    "This week",
    "Last 7 days",
    "This month",
    "Last 30 days",
    "All Time",
  ];

  function handleClick(index) {
    setIsClick(index);
  }

  function closeClick() {
    setIsClick(false);
  }

  function handleTime(item) {
    setSelectedTime(item);
    setIsTime((prev) => !prev);
  }
  function closeTime() {
    setIsTime(false);
  }
  return (
    <div className={styles.transaction}>
      <div className={styles.log}>
        <span>Chatbot Logs</span>
        <div className={styles.div}>
          <button className={styles.time} onClick={() => setIsTime(!isTime)}>
            <img src={time} alt='' />
            {selectedTime}
            <img src={right} alt='' />
          </button>
          {isTime && (
            <div className={styles.dropdownTime}>
              <div className={styles.overlay} onClick={closeTime}></div>
              <div className={styles.copy}>
                {Time.map((item, index) => (
                  <span key={index} onClick={() => handleTime(item)}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          <button className={styles.csv}>
            <img src={csv} alt='' />
            Download CSV
          </button>
        </div>
      </div>

      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div className={`${styles.name} ${styles.headerText}`}>
            <span className={styles.firstName}>User Name</span>
            <span>Email Address</span>
            <span>Prompt Query</span>
            <span>AI Response</span>
            <span>Date/Time</span>
            <span className={styles.svg}>Svg</span>
          </div>

          {currentLogs.map((data, index) => (
            <div className={styles.name} key={index}>
              <span>{data.user_name}</span>
              <span>{data.email}</span>
              <span>{`"${data.prompt}"`}</span>
              <span>{`"${data.response}"`}</span>
              <span>{data.timestamp}</span>
              <img
                src={vector}
                alt=''
                onClick={() => handleClick(index)}
              />{" "}
              {isClick === index && (
                <div className={styles.dropdown} onClick={closeClick}>
                  <div className={styles.overlay} onClick={closeClick}></div>
                  <div className={styles.copy}>
                    <span>
                      <img src={copy} alt='' />
                      Copy
                    </span>
                    <span>
                      <img src={delte} alt='' />
                      Delete
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Buttons
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
