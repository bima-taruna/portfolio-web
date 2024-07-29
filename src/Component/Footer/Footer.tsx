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
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="footer-menu">
        <HashLink to="#home" smooth>
          <div className="footer-icons">
            <AiOutlineHome />
            Home
          </div>
        </HashLink>
        <HashLink to="#about" smooth>
          <div className="footer-icons">
            <AiOutlineUser />
            About
          </div>
        </HashLink>
        <HashLink to="#project" smooth>
          <div className="footer-icons">
            <AiOutlineAppstore />
            Project
          </div>
        </HashLink>
        <HashLink to="#contact" smooth>
          <div className="footer-icons">
            <BsTelephone />
            Contact
          </div>
        </HashLink>
      </ul>
      <ul className="footer-socialmedia">
        <a
          target="_blank"
          href="https://www.instagram.com/bim_tar/"
          rel="noopener noreferrer"
          className="footer-icons"
        >
          <AiOutlineInstagram />
        </a>
        <a
          target="_blank"
          href="https://github.com/bima-taruna"
          rel="noopener noreferrer"
          className="footer-icons"
        >
          <AiOutlineGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/bima-taruna/"
          rel="noopener noreferrer"
          className="footer-icons"
        >
          <AiOutlineLinkedin />
        </a>
      </ul>
      <h1>Design Inspired By : SaulDesign</h1>
    </footer>
  );
};

export default Footer;
