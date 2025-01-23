/** @format */

import React from "react";
import EbookSvg from "./EbookSvg";
import styles from "./Ebook.module.css";
import Uppist from "./Uppist";

export default function Thankyou() {
  return (
    <section>
      <section>
        <div className={styles.uppist}>
          <Uppist />
        </div>
        <div className={styles.container}>
          <div className={styles.container2}>
            <h3>Thank you for downloading</h3>
            <h2>"2025 Guide To Launching Your New Business In Nigeria".</h2>
            <p>Please check your email to access your copy of the ebook.</p>
          </div>

          <div className={styles.ebook}>
            <EbookSvg />
          </div>
        </div>
      </section>
    </section>
  );
}
