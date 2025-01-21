/** @format */

import React from "react";
import styles from "./Ebook.module.css";

export default function Form() {
  function Submit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onClick={Submit}>
        <div className={styles.form}>
          <input type='text' name='' id='' placeholder='First Name' />
          <input type='text' name='' id='' placeholder='Last Name' />

          <input type='email' name='' id='' placeholder='Email Address' />
          <input type='text' name='' id='' placeholder='Phone Number' />
          <button type='submit'>Download my Free ebook</button>
        </div>
      </form>
    </>
  );
}
