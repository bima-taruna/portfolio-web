import React from "react";
import "./header.scss";
import { motion } from "framer-motion";
import asset1 from "../../assets/asset2.png";
import Button from "../Shared/Button/Button";
import Square from "../Shared/Square Button/Square";
import { MyRef } from "../Main/Main";

interface UserData {
  isAdmin: boolean;
}

const Header: React.FC<MyRef> = ({ resultRef }: any) => {
  const squareButton = React.useRef<HTMLDivElement>(null);
  const scrollTo = () => {
    console.log(resultRef);
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header id="home">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100vh" }}
        transition={{ delay: 1.7, duration: 1, type: "tween" }}
        className="border-left"
      ></motion.div>
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="title"
      >
        <h1>Software Engineer</h1>
        <section className="button-container">
          <div className="contact-button">
            <Button
              text="Contact Me"
              textColor="white"
              backgroundColor="#3f5278"
              border="#0a2647"
              textSize="1.1em"
              hoverColor="#2c74b3"
            />
          </div>
          <div className="cv-button">
            <Button
              text="My CV"
              textColor="white"
              backgroundColor="#3f5278"
              border="#0a2647"
              textSize="1.1em"
              hoverColor="#2c74b3"
            />
          </div>
        </section>
      </motion.section>
      <motion.section
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="gambar"
      >
        <img src={asset1} alt="asset1" />
      </motion.section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="next-button"
        onClick={() => scrollTo()}
        ref={squareButton}
      >
        <Square />
      </motion.div>
    </header>
  );
};

export default Header;
