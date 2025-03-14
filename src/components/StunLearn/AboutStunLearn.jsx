/** @format */

import React from "react";
import image1 from "../../assets/desktop/stunlearn13.png";
import image2 from "../../assets/desktop/teach.png";
import image3 from "../../assets/desktop/mode.png";
// import image21 from "../../assets/desktop/stunlearn-mobile.png";
// import image31 from "../../assets/desktop/mission-mobile.png";
import data from "./Mission.json";
export default function AboutStunLearn() {
  const MapImage = {
    "image1.png": image1,
    "image2.png": image2,
    "image3.png": image3,
  };
  return (
    <section>
      <div className='stun-mission'>
        {data.map((mission, index) => (
          <div key={index} className='img-div'>
            <div className='text-div'>
              <h2>
                {mission.title}
                <span>{mission.title2}</span>
              </h2>
              <span>{mission.text}</span>
              {(mission.li1 || mission.li2 || mission.li3) && (
                <ul>
                  {mission.li1 && <li>{mission.li1}</li>}
                  {mission.li2 && <li>{mission.li2}</li>}
                  {mission.li3 && <li>{mission.li3}</li>}
                </ul>
              )}
            </div>
            <img src={MapImage[mission.image]} alt='' />
          </div>
        ))}
      </div>
    </section>
  );
}
