/** @format */

import React from "react";
import Buttons from "./Buttons";
import styles from "./style.module.css";
import table from "./Table.json";
import copy from "../../assets/copyP.svg";

export default function Table() {
  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div className={styles.tableRow}>
          <span>First Name</span>
          <span>Last Name</span>
          <span>Email Address</span>
          <span>Phone Number</span>
          <span>Date</span>
          <span>Svg</span>
        </div>

        {table.map((data, index) => (
          <div className={styles.tableRow} key={index}>
            <span>{data.FirstName}</span>
            <span>{data.LastName}</span>
            <span>{data.Email}</span>
            <span>{data.phone}</span>
            <span>{data.Date}</span>
            <img src={copy} alt='' />
          </div>
        ))}
      </div>
      <Buttons />
    </div>
  );
}
