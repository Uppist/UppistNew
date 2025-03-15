/** @format */

import React from "react";
import headove1 from "../../assets/desktop/headhove12.png";
import { Link } from "react-router-dom";

export default function AboutHeadove() {
  return (
    <div className='about-headove'>
      <h2 className='text-about-mobile'>Creative & Digital Marketing</h2>
      <div>
        <h2 className='text-about text-about-desktop'>
          Creative & Digital Marketing
        </h2>
        <p>
          Customer needs are evolving. Helping businesses keep up with change is
          at the heart of what we do. <br />
          <br />
          From a logo design that sparks curiosity to a full-service website
          that helps to convert prospects; designing creative and digital
          marketing engines for our clients that drive result are what propel
          us.
        </p>

        <Link to='/contact'>
          <button>
            Get started{" "}
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.33325 16H26.6666M17.3333 6.66669L26.6666 16L17.3333 25.3334'
                stroke='#FFF'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>{" "}
        </Link>
      </div>

      <img src={headove1} alt='' />
    </div>
  );
}
