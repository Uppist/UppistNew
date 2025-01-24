/** @format */

import React, { useState } from "react";
import styles from "./Ebook.module.css";

export default function Form({ Submit, LoginDetail, logindetail }) {
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setSubmittedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!logindetail.first_name) {
      newErrors.first_name = "First Name is required.";
    }
    if (!logindetail.last_name) {
      newErrors.last_name = "Last Name is required.";
    }

    if (!logindetail.email) {
      newErrors.email = "Email Address is required.";
    }
    if (!logindetail.phone_number) {
      newErrors.phone_number = "Phone Number is required.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      Submit();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <div className={styles.inputField}>
            <input
              type='text'
              name='first_name'
              placeholder='First Name'
              value={logindetail.first_name}
              onChange={(e) => LoginDetail(e)}
            />
            {submittedData === false && errors.first_name && (
              <p className={styles.error}>{errors.first_name}</p>
            )}
          </div>

          <div className={styles.inputField}>
            <input
              type='text'
              name='last_name'
              placeholder='Last Name'
              value={logindetail.last_name}
              onChange={(e) => LoginDetail(e)}
            />
            {submittedData === false && errors.lastName && (
              <p className={styles.error}>{errors.lastName}</p>
            )}
          </div>

          <div className={styles.inputField}>
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              value={logindetail.email}
              onChange={(e) => LoginDetail(e)}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className={styles.inputField}>
            <input
              type='text'
              name='phone_number'
              placeholder='phone number'
              value={logindetail.phone_number}
              onChange={(e) => LoginDetail(e)}
            />
            {submittedData === false && errors.phone_number && (
              <p className={styles.error}>{errors.phone_number}</p>
            )}
          </div>

          <button type='submit'>Download my Free ebook</button>
        </div>
      </form>
    </>
  );
}
