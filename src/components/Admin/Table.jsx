/** @format */

import React from "react";
import Buttons from "./Buttons";
import styles from "./style.module.css";
import table from "./Table.json";
import copy from "../../assets/copyP.svg";

export default function Table() {
  const nestedLogs = JSON.parse(localStorage.getItem("logs")) || [];
  const logs = nestedLogs[0] || []; // get the inner array
  console.log(logs);

  const SvgCopy = {
    svg: copy,
  };
  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div className={`${styles.name} ${styles.firstName}`}>
          <span>User Name</span>
          {logs.map((data, index) => (
            <div className={styles.tableRow} key={index}>
              <span>{data.user_name}</span>
            </div>
          ))}
        </div>
        <div className={styles.name}>
          <span>Email Address</span>
          {logs.map((data, index) => (
            <div className={styles.tableRow} key={index}>
              <span>{data.email}</span>
            </div>
          ))}
        </div>
        <div className={styles.name}>
          <span>Prompt Query</span>
          {logs.map((data, index) => (
            <div className={styles.tableRow} key={index}>
              <span>{`"${data.prompt}"`}</span>
            </div>
          ))}
        </div>
        <div className={styles.name}>
          <span>AI Response</span>
          {logs.map((data, index) => (
            <div className={styles.tableRow} key={index}>
              <span>{`"${data.response}"`}</span>
            </div>
          ))}
        </div>
        <div className={styles.name}>
          <span>Date/Time</span>
          {logs.map((data, index) => (
            <div className={styles.tableRow} key={index}>
              <span>{data.timestamp}</span>
            </div>
          ))}
        </div>

        <div className={`${styles.name} ${styles.svg}`}>
          <span className={styles.svgtext}>Svg</span>
          {table.map((data, index) => (
            <div className={styles.tableRow} key={index}>
              <img src={SvgCopy[data.img]} alt='' />
            </div>
          ))}
        </div>
      </div>
      <Buttons />
    </div>
  );
}
