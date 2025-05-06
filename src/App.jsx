/** @format */

import AboutUs from "./components/Aboutus/AboutUs";
import Contactus from "./components/Contactus/Contactus";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import HeadoveSection from "./components/Headove/headoveSection";
import StunLearn from "./components/StunLearn/StunLearn";
import Ebook from "./components/Ebook/Ebook";
import Logo from "./components/AIChatbot/Logo";

export default function App() {
  return (
    <HashRouter>
      <Logo />
      <div>
        <Routes>
          <Route path='/' element={<AboutUs />} />
          <Route path='headove' element={<HeadoveSection />} />
          <Route path='contact' element={<Contactus />} />
          <Route path='stunlearn' element={<StunLearn />} />
          <Route path='ebook' element={<Ebook />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
