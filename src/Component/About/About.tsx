import React from "react";
import { motion } from "framer-motion";
import asset3 from "../../assets/asset3.png";
import Square from "../Shared/Square Button/Square";
import "./about.scss";

export interface otherRef {
  ref: any;
  resultRef: any;
}

const About: React.FC<otherRef> = React.forwardRef(
  ({ resultRef }: any, ref: any) => {
    const scrollTo = () => {
      console.log(resultRef);
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
      <section ref={ref} className="about" id="about">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100vh" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1, type: "tween" }}
          className="border-left"
        ></motion.div>
        <section className="about-me">
          <h1>
            About <span>me</span>
          </h1>
          <p>
            Hello! My Name is Bima, I'm Software Engineer that specialize in web
            development using React.js, TypeScript, and JavaScript, as well as
            Android app development with Kotlin. My passion lies in creating
            efficient, user-friendly applications that solve real-world
            problems. Currently, I am focusing and continuously learning and
            adapting to new technologies and industry trends. Whether it's
            building responsive web interfaces or developing robust mobile
            applications, I thrive on the challenge of bringing innovative ideas
            to life.
          </p>
        </section>
        <section className="gambar">
          <img src={asset3} alt="asset3" />
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="next-button"
          onClick={() => scrollTo()}
        >
          <Square />
        </motion.div>
      </section>
    );
  }
);

export default About;
