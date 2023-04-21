import React from "react";

import "./Footer.css";

import logo from "../../img/logo.png";

import { FaHome, FaUser, FaSuitcase, FaRegHandshake } from "react-icons/fa";

import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <div className="footer">
        <ScrollToTop smooth />
        <div className="footer-container">
          <div className="logo-container">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="links-container">
            <ul className="links">
              <li>
                <a href="/">
                  <FaHome className="icon" />
                  Home
                </a>
              </li>
              <li>
                <a href="/about">
                  <FaUser className="icon" />
                  About Us
                </a>
              </li>
              <li>
                <a href="/jobseeker">
                  <FaSuitcase className="icon" />
                  Job Seeker
                </a>
              </li>
              <li>
                <a href="/employer">
                  <FaRegHandshake className="icon" />
                  Employer
                </a>
              </li>
            </ul>
          </div>
          <div className="legal-container">
            <ul className="legal">
              <li>© 2023 Job Dekho. All rights reserved.</li>
              <li>
                <a href="/terms">Terms &amp; Conditions</a> |{" "}
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Footer;
