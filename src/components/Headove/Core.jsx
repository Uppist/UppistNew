/** @format */

import React from "react";
import headove1 from "../../assets/desktop/headhove13.png";
import headove2 from "../../assets/desktop/headhove14.png";

export default function Core() {
  return (
    <div className='core'>
      <label className='text-about'>
        <label>Core</label> Offerings
      </label>
      <div className='core-container'>
        <div className='brand-design'>
          <img src={headove1} alt='' />
          <div>
            <h3>Brand Design</h3>
            <hr />
            <p>
              Get your brand off the ground with strategic brand design
              services. Whether you're a new business or an existing business
              needing to refresh your brand, we can help you with the designs
              you need from start to finish.
              <br />
              <br /> We Design:
              <ul>
                <li>Logo packages (logo, font styling, colours)</li>
                <li> Company letterhead</li>
                <li>Business cards</li>
                <li>Company profile</li>
                <li>Website</li>
              </ul>{" "}
            </p>
          </div>
        </div>
        <div className='brand-marketing'>
          <div>
            <h3>Brand Marketing</h3>
            <hr />
            <p>
              We assist leading businesses and brands with digital marketing
              services that keep them atop their customers' minds.
              <br />
              <br /> Services Include:
              <ul>
                <li>Social media management</li>
                <li> Email marketing</li>
                <li>Ads</li>
                <li>Content creation and production</li>
                <li> Graphics design</li>
              </ul>
            </p>
          </div>
          <img src={headove2} alt='' />
        </div>{" "}
      </div>
    </div>
  );
}
