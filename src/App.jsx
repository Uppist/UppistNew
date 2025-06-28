/** @format */

import AboutUs from "./components/Aboutus/AboutUs";
import Contactus from "./components/Contactus/Contactus";
import { Routes, Route, useLocation } from "react-router-dom";
import HeadoveSection from "./components/Headove/headoveSection";
import StunLearn from "./components/StunLearn/StunLearn";
import Ebook from "./components/Ebook/Ebook";
import Logo from "./components/AIChatbot/Logo";
import Admin from "./components/Admin/Admin";
import Login from "./components/Admin/Login/Login";
import Dashboard from "./components/Admin/Dashboard/Dashboard";

export default function App() {
  const location = useLocation();

  const adminRoutes = ["/admin", "/login", "/dashboard"];
  return (
    <>
      {!adminRoutes.includes(location.pathname) && <Logo />}
      <div>
        <Routes>
          <Route path='/' element={<AboutUs />} />
          <Route path='headove' element={<HeadoveSection />} />
          <Route path='contact' element={<Contactus />} />
          <Route path='stunlearn' element={<StunLearn />} />
          <Route path='ebook' element={<Ebook />} />
          <Route path='admin' element={<Admin />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}
