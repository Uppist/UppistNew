/** @format */

import React from "react";
import Table from "./Table";
import uppist from "../../assets/uppist.png";
import copy from "../../assets/copyWhite.svg";
import styles from "./style.module.css";

export default function Admin() {
  return (
    <div className={styles.admin}>
      <img src={uppist} alt='' />

      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Mailing Lists</h2>
          <div className={styles.copy}>
            <img src={copy} alt='' />
            <span>Copy CSV</span>
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
}
