/** @format */

import React, { useState } from "react";
import styles from "./Ebook.module.css";

export default function Form({ Submit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required.";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email Address is required.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone Number is required.";
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
              name='firstName'
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {submittedData === false && errors.firstName && (
              <p className={styles.error}>{errors.firstName}</p>
            )}
          </div>

          <div className={styles.inputField}>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className={styles.inputField}>
            <input
              type='text'
              name='phone'
              placeholder='Phone Number'
              value={formData.phone}
              onChange={handleInputChange}
            />
            {submittedData === false && errors.phone && (
              <p className={styles.error}>{errors.phone}</p>
            )}
          </div>

          <button type='submit'>Download my Free ebook</button>
        </div>
      </form>
    </>
  );
}
