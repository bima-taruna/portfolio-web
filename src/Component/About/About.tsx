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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            ex amet ipsa sequi nulla possimus sunt porro, provident in vero
            commodi quibusdam obcaecati! Sapiente quisquam reiciendis aliquam
            vel atque facere? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quod non eum dolores saepe sunt ducimus numquam
            alias fugit nisi sint. Similique quidem velit, explicabo iure
            consectetur vel illo laboriosam beatae.
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
