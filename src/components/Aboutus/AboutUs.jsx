/** @format */

import React, { useEffect } from "react";
import "../../style.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import AboutSection from "./AboutSection";
import ValueSection from "./ValueSection";
import Unlock from "./Unlock";
import Choose from "./Choose";
import Clients from "../Headove/Clients";
import Testimonials from "../Headove/Testimonials";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='background1'>
      <NavBar />
      <AboutSection />
      <ValueSection />
      <div className='stunlearn-unlock'>
        {" "}
        <Unlock />
      </div>
      <Choose />
      <Clients />
      <Testimonials />
      <Footer />
    </div>
  );
}
