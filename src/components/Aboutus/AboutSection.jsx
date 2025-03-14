/** @format */

import React from "react";
import "../../style.css";

import image1 from "../../assets/desktop/picture1.png";
import image2 from "../../assets/desktop/image2.png";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className='aboutsection'>
      <div className='hero-section'>
        <div className='img-text'>
          <div>
            <h2>
              Empowering Businesses <br />
              with Design and Technology.
            </h2>
            <p>Your partner in creativity and digital innovation.</p>
          </div>
          <span>
            <Link to='/contact'>
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
            </Link>
          </span>
        </div>

        <img src={image1} alt='image' />
      </div>
      <div className='about-detail'>
        <div className='aboutus'>
          <img src={image2} alt='image2' />
        </div>

        <div className='values'>
          <div>
            <div className='mission'>
              {" "}
              <span>Mission</span>
              <p>
                To elevate the human potential through first-class professional
                services and technology.
              </p>
            </div>

            <br />
            <div className='vision'>
              <span>Vision</span>
              <p>
                To be a distinguished global business conglomerate designing
                cutting-edge products and services that transform the human
                experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
