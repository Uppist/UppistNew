/** @format */

import React from "react";
import ImageSection from "./ImageSection";
import AboutHeadove from "./AboutHeadove";
import Core from "./Core";
import Clients from "./Clients";
import Testimonials from "./Testimonials";
import Unlock from "../Aboutus/Unlock";

export default function Headove() {
  return (
    <div className='headove'>
      {/* <ImageSection /> */}
      <AboutHeadove />
      <Core />
      <Clients />
      {/* <Testimonials /> */}
      {/* <Unlock /> */}
    </div>
  );
}
