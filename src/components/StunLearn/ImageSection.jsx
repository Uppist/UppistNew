/** @format */

import React from "react";
import stun from "../../assets/desktop/stunlearn2.png";
import stun1 from "../../assets/desktop/stunlearn21.png";

import StunLearnSvg from "./StunLearnSvg";
import { Link } from "react-router-dom";

export default function ImageSection() {
  return (
    <div>
      <img className='stun-img' src={stun} alt='' />
      <img className='stun-img2' src={stun1} alt='' />

      <div className='img-text stun-text'>
        <div>
          {/* <StunLearnSvg /> */}
          <h3>
            <span>Growth</span> is Here
          </h3>
          <p>
            We provide the necessary tools and environment to foster career and
            business growth for ambitious professionals and entrepreneurs.
          </p>
        </div>
        <Link to='/contact'>
          <button>
            Contact Us
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
                stroke='#FFFFFF'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
