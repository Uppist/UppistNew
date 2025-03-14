/** @format */

/** @format */

import React, { useState, useEffect, useRef } from "react";
import location from "../../assets/desktop/contact.png";
// import location2 from "../../assets/mobile/map.png";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_47im79b",
        "template_gbkyx8c",
        form.current,
        "Dr_TDKK9HAWTw7qNU"
      )
      .then(
        () => {
          toast.success("Message sent!");
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
        }
      );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='contactsection'>
      <div className='get-in-touch'>
        <div className='touch-form'>
          <h2>Get in Touch</h2>
          <label>Use the form below to contact us</label>
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <div className='input-text'>
            <input type='text' placeholder='Full name' name='from_name' />
            <input type='phonenumber' placeholder='Phone number' />
            <input type='email' placeholder='Email address' name='from_email' />
            <textarea placeholder='Message' name='message'></textarea>
          </div>
          <div className='button-type'>
            <button type='submit' className='submit'>
              Send Message
            </button>
          </div>
        </form>
      </div>
      <img className='locationimage' src={location} alt='location' />
      {/* <img className='locationimage2' src={location2} alt='location2' /> */}
      <ToastContainer />
    </div>
  );
}
