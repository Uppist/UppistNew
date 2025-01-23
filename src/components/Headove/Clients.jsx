/** @format */

import React from "react";
import jessie from "../../assets/desktop/JZB.png";
import sql from "../../assets/squareLab.png";
import luround from "../../assets/LUROUND1.png";
import broom from "../../assets/desktop/broomApp.png";
import FL from "../SVG/FL";

export default function Clients() {
  return (
    <div className='clients'>
      <label className='text-about'>
        <label>Our</label> Clients
      </label>
      <div>
        <img src={jessie} alt='' />
        <FL />
        <img src={sql} alt='' />
        <img src={luround} alt='' />
        <img src={broom} alt='' />
      </div>
    </div>
  );
}
