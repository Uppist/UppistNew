/** @format */

import React from "react";
import image2 from "../../assets/desktop/stunlearn12.png";
import image3 from "../../assets/desktop/stunlearn13.png";

export default function AboutStunLearn() {
  return (
    <section>
      <div className='about-mission'>
        <div className='about-stunlearn'>
          <div className='aboutus'>
            <img src={image2} alt='image2' />
          </div>

          <div className='stun-about'>
            <h2>
              About <span>StunLearn</span>
            </h2>
            <p>
              StunLearn Institute provides the necessary tools and environment
              to foster growth.
              <br />
              <br />
              Leveraging well-defined curriculums, we empower our students with
              knowledge and skills that improve their competitiveness, thus
              positioning them as frontier leaders, entrepreneurs and
              professionals
            </p>
          </div>
        </div>

        <div className='mission-stunlearn'>
          <div className='stun-mission'>
            <h2>
              Our <span>Mission</span>
            </h2>
            <div>
              <p>
                {" "}
                Our mission is to be a forefront education brand
                <br /> that enhances productivity and inspires
                <br /> passion.
              </p>
              <br />
              <div className='teach-mode'>
                <div>
                  <label>What we teach</label>

                  <ul>
                    <li>Business Growth</li>
                    <li>Leadership Development</li>
                    <li> Professional Skills Development</li>
                  </ul>
                </div>

                <div>
                  <label>Mode</label>

                  <ul>
                    <li>Workshops</li>
                    <li>Programs</li>
                    <li>Courses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='aboutus'>
            <img src={image3} alt='image2' />
          </div>
        </div>
      </div>
    </section>
  );
}