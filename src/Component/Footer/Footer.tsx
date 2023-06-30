import React from "react";
import "./footer.scss";
import {
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineUser,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="footer-menu">
        <HashLink to="#home" smooth>
          <div className="footer-icons">
            <AiOutlineHome />
          </div>
          Home
        </HashLink>
        <HashLink to="#about" smooth>
          <div className="footer-icons">
            <AiOutlineUser />
          </div>
          About
        </HashLink>
        <HashLink to="#project" smooth>
          <div className="footer-icons">
            <AiOutlineAppstore />
          </div>
          Project
        </HashLink>
        <HashLink to="#contact" smooth>
          <div className="footer-icons">
            <BsTelephone />
          </div>
          Contact
        </HashLink>
      </ul>
      <ul className="footer-socialmedia">
        <li>
          <div className="footer-icons">
            <AiOutlineInstagram />
          </div>
        </li>
        <li>
          <div className="footer-icons">
            <AiOutlineGithub />
          </div>
        </li>
        <li>
          <div className="footer-icons">
            <AiOutlineLinkedin />
          </div>
        </li>
      </ul>
      <h1>Design Inspired By : SaulDesign</h1>
    </footer>
  );
};

export default Footer;
