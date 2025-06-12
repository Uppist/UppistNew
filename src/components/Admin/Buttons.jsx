/** @format */

import React from "react";
import styles from "./style.module.css";

export default function Buttons() {
  return (
    <div className={styles.buttons}>
      <div className={styles.pageInfo}>
        <span>Page 1 of 30</span>
      </div>
      <div className={styles.pageButtons}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((page) => (
          <div key={page}>
            <button>{page}</button>
          </div>
        ))}
      </div>
      <div className={styles.navigation}>
        <button className={styles.previous}>Previous</button>
        <button className={styles.next}>Next</button>
      </div>
    </div>
  );
}
