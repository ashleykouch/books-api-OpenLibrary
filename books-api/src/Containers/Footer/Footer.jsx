import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-details">
      <div className="container">
        <div className="footer-info flex flex-c">
          <h3 className="footer-info-title">Ashley.K</h3>
          <div className="footer-icons">
            <a href="mailto:ashleykouch99@gmail.com">
              <FaEnvelope size={30} />
            </a>
            <a href="https://github.com/ashleykouch">
              <FaGithub size={30} />
            </a>
            <a href="www.linkedin.com/in/ashley-kouch99">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
