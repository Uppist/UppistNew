/** @format */

import React, { useState } from "react";
import "../../style.css";
import uppist from "../../assets/uppist.png";
import { Link } from "react-router-dom";
import Uppist from "../Ebook/Uppist";

export default function NavBar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  function sideBar() {
    setIsSidebarVisible(true);
  }

  function onClose() {
    setIsSidebarVisible(false);
  }

  function Dropdown() {
    setIsDropdown((prev) => !prev);
  }

  return (
    <header className='firstsection'>
      <nav className='nav'>
        <Link to='/' className='uppist'>
          <Uppist />
        </Link>

        <ul className='nav-ul'>
          <Link to='/'>
            <li className='list'>Home</li>
          </Link>
          {/* <Link to='/services'> */}
          <li className='company-menu' onClick={Dropdown}>
            Company
            <svg
              className='company-svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 18L15 12L9 6'
                stroke='#2B2B2B'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </li>
          {isDropdown && (
            <div className='dropdown-company'>
              <ul>
                <Link to='/headove'>
                  {" "}
                  <li>Headove</li>
                </Link>
                <Link to='https://www.luround.com'>
                  {" "}
                  <li>Luround</li>
                </Link>
                <Link to='/stunlearn'>
                  <li>StunLearn</li>
                </Link>
              </ul>
            </div>
          )}

          <Link to='/contact'>
            <li className='list-contact contact-nav'>Contact Us</li>
          </Link>

          <li className='list-menu' onClick={sideBar}>
            <a className='dropdown'>
              <svg
                width='27'
                height='26'
                viewBox='0 0 27 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.41882 18.4188L20.5915 18.4188'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 13H20.5915'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 7.58118L14.0889 7.58119'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </li>
        </ul>

        <div
          className={`side-bar ${isSidebarVisible ? "active" : "fade-out"}`}
          id='side-bar'
        >
          <div className='image-close'>
            <Link to='/'>
              <img className='uppist-logo' src={uppist} />
            </Link>

            <a className='dropdown-close' id='sidebar-close' onClick={onClose}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.758 17.243L12.001 12M17.244 6.757L12 12M12 12L6.758 6.757M12.001 12L17.244 17.243'
                  stroke='#2B2B2B'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </div>

          <ul className='sidebar-menu'>
            <Link to='/'>
              <li className='sidebar-list'>Home</li>
            </Link>
            <li className='sidebar-list company' onClick={Dropdown}>
              Company
              <svg
                className='company-svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 18L15 12L9 6'
                  stroke='#2B2B2B'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </li>
            {isDropdown && (
              <ul className='dropdown-company-mobile'>
                <Link to='/headove'>
                  {" "}
                  <li>Headove</li>
                </Link>
                <Link to='https://www.luround.com'>
                  {" "}
                  <li>Luround</li>
                </Link>
                <Link to='/stunlearn'>
                  <li>StunLearn</li>
                </Link>
              </ul>
            )}

            <Link to='/contact'>
              <li className='sidebar-contact'>Contact Us</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
