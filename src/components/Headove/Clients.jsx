/** @format */

import React from "react";
import sql from "../../assets/squareLab.png";
import luround from "../../assets/LUROUND1.png";
import FL from "../SVG/FL";
// import Jzb from "../SVG/jzb";
import Roo from "../SVG/Roo";
import Cobalt from "../SVG/Cobalt";
import Ireti from "../SVG/Ireti";
import { Link } from "react-router-dom";
import svg from "../SVG/Svg.json";
import Jzb from "../SVG/Jzb";

export default function Clients() {
  const svgComponents = {
    FL: <FL />,
    JZ: <Jzb />,
    Roo: <Roo />,
    Co: <Cobalt />,
    Ireti: <Ireti />,
    "image1.png": <img src={luround} alt='Luround' />,
    "image2.png": <img src={sql} alt='SQL Advisory' />,
  };
  return (
    <div className='clients'>
      <label className='text-about'>
        <label>Our</label> Clients
      </label>
      <div>
        {svg.map((data, index) => (
          <div key={index} className='svgs'>
            {svgComponents[data.Svg] || (
              <div className='default-svg'>No Icon</div>
            )}
            <hr />
            <div>
              <span>
                <span className='purple'> {data.servicetype}</span>
                <span className='text-color'> {data.type}</span>
              </span>
              <Link to={`https://${data.link}`} className='link'>
                <span>{data.link}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
