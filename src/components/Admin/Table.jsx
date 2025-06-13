/** @format */

import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import styles from "./style.module.css";
import table from "./Table.json";
import copy from "../../assets/copyP.svg";
import axios from "axios";
export default function Table() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    try {
      const response = await axios.get("https://bot.uppist.xyz/logs");
      setLogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch logs:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

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
