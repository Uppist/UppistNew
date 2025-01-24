/** @format */

import React, { useState } from "react";
import Uppist from "./Uppist";
import styles from "./Ebook.module.css";
import EbookSvg from "./EbookSvg";
import Form from "./Form";
import Thankyou from "./Thankyou";
import axios from "axios";

export default function Ebook() {
  /*API Response */

  const [logindetail, setLogindetail] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  });
  const data = {
    email: logindetail.email,
    first_name: logindetail.first_name,
    last_name: logindetail.last_name,
    phone_number: logindetail.phone_number,
  };
  function LoginDetail(e) {
    setLogindetail({ ...logindetail, [e.target.name]: e.target.value });
  }

  const [isNext, setIsNext] = useState(false);

  function Submit() {
    setIsNext(true);

    axios
      .post(
        "https://luround-api-7ad1326c3c1f.herokuapp.com/api/download-ebook",
        data
      )
      .then((res) => {
        console.log("response", res);
      });
  }
  return (
    <section>
      {isNext ? (
        <Thankyou />
      ) : (
        <>
          <div className={styles.uppist}>
            <Uppist />
          </div>
          <div className={styles.container}>
            <div className={styles.container2}>
              <h3>GET FREE E-BOOK</h3>
              <h2>2025 Guide to Launching your New Business in Nigeria.</h2>
              <p>
                Starting a new business can be both daunting and rewarding.
                There are numerous obligations to fulfil before and during the
                course of the business’s lifecycle. However, if the right steps
                are taken to set up and run the business properly, many pitfalls
                might be avoided.
              </p>
              <p>
                You may be considering launching your own business. Perhaps you
                have an idea and a little bit of capital. This guide will help
                you quickly understand the primary requirements for launching a
                new business in Nigeria in 2025.
              </p>
              <p>
                Complete the form to receive your <b>free guide!</b>
              </p>
              <Form
                Submit={Submit}
                logindetail={logindetail}
                LoginDetail={LoginDetail}
              />
            </div>

            <div className={styles.ebook}>
              <EbookSvg />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
