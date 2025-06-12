/** @format */

import React from "react";
import Buttons from "./Buttons";
import styles from "./style.module.css";
import table from "./Table.json";
import copy from "../../assets/copyP.svg";

export default function Table() {
  const SvgCopy = {
    svg: copy,
  };
  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div className={`${styles.name} ${styles.firstName}`}>
          <span>User Name</span>
          {table.map((data, index) => (
            <div className={styles.tableRow} key={index}>
              <span>{data.FirstName}</span>
            </div>
          ))}
        </div>
        <div className={styles.name}>
          <span>Email Address</span>
          {table.map((data, index) => (
            <div className={styles.tableRow} key={index}>
              <span>{data.Email}</span>
            </div>
          ))}
        </div>
        <div className={styles.name}>
          <span>Prompt Query</span>
          {table.map((data, index) => (
            <div className={styles.tableRow} key={index}>
              <span>{data.LastName}</span>
            </div>
          ))}
        </div>
        <div className={styles.name}>
          <span>AI Response</span>
          {table.map((data, index) => (
            <div className={styles.tableRow} key={index}>
              <span>{data.phone}</span>
            </div>
          ))}
        </div>
        <div className={styles.name}>
          <span>Date/Time</span>
          {table.map((data, index) => (
            <div className={styles.tableRow} key={index}>
              <span>{data.Date}</span>
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
