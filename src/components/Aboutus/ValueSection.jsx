/** @format */

import React from "react";
import "../../style.css";

import headhove from "../../assets/desktop/headove.png";
import luround from "../../assets/desktop/luround.png";
import stunlearn from "../../assets/desktop/stunlearn.png";

import headhove1 from "../../assets/desktop/headove1.png";
import luround1 from "../../assets/desktop/luround2.png";
import stunlearn1 from "../../assets/desktop/stunlearn1.png";
import { Link } from "react-router-dom";

export default function ValueSection() {
  return (
    <section className='section-value'>
      <label>
        {" "}
        <span>Our</span> Services
      </label>
      <div className='brand-container'>
        <div>
          <img className='headove1' src={headhove} alt='' />
          <img className='headove2' src={headhove1} alt='' />

          <div className='headove-container'>
            <div>
              <h2>Creative and Marketing</h2>
              <p>
                Affordable creative and marketing services for small businesses.
              </p>
            </div>

            <Link to='/headove'>
              <button>
                Learn More{" "}
                <svg
                  className='contact-svg'
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.33325 16H26.6666M17.3333 6.66669L26.6666 16L17.3333 25.3334'
                    stroke='#7C118B'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img className='luround-image1' src={luround} alt='' />
          <img className='luround-image2' src={luround1} alt='' />

          <div className='luround-container'>
            <div>
              <h2>Luround</h2>
              <p>
                All-in-one business management app for professional service
                providers.{" "}
              </p>
            </div>
            <Link to='/luround'>
              <button>
                Learn More{" "}
                <svg
                  className='contact-svg'
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.33325 16H26.6666M17.3333 6.66669L26.6666 16L17.3333 25.3334'
                    stroke='#7C118B'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img className='stunlearn1' src={stunlearn} alt='' />
          <img className='stunlearn2' src={stunlearn1} alt='' />

          <div className='stunlearn-container'>
            <div>
              <h2>Education</h2>
              <p>Training institute for professionals and entrepreneurs. </p>
            </div>

            <Link to='/stunlearn'>
              {" "}
              <button>
                Learn More{" "}
                <svg
                  className='contact-svg'
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.33325 16H26.6666M17.3333 6.66669L26.6666 16L17.3333 25.3334'
                    stroke='#7C118B'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
