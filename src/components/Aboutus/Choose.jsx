/** @format */

import React from "react";
import image5 from "../../assets/desktop/picture2.png";

export default function Choose() {
  return (
    <section className='choosecontainer'>
      <label>
        {" "}
        <span>Our</span> Competencies
      </label>
      <div className='choosesection'>
        <div className='img-choose'>
          <img className='desktopchoose' src={image5} alt='image' />
          {/* <img className='mobilechoose' src={image4} alt='image' /> */}

          <div className='choose'>
            <label>
              <span>Our</span> Competencies
            </label>
            <ul>
              <li>
                <span>Technology</span>: Software development, mobile app
                development, website design.
              </li>
              <br />
              <li>Brand design, management and marketing.</li>
              <br />
              <li className='chooselist'>
                Professional skills training, coaching and consulting.
              </li>
            </ul>
          </div>
        </div>
        <ul className='chooselist2'>
          <li>Professional skills training, coaching and consulting.</li>
        </ul>
      </div>
    </section>
  );
}
