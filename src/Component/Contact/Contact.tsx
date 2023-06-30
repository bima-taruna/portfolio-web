import React from "react";
import "./contact.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import ContactForm from "./Contact Form/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100vh" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1, type: "tween" }}
        className="border-left"
      ></motion.div>
      <h1 className="header">Let's get in Touch!</h1>
      <section className="contact-body">
        <section className="info">
          <h1 className="info-header">Contact Information</h1>
          <ul>
            <li>
              <BsFillTelephoneFill /> : 085762068329
            </li>
            <li>
              <SiGmail /> : bimataruna21@gmail.com
            </li>
            <li>
              <HiLocationMarker /> : Jl. Besar Deli Tua Gg Sentosa Desa Suka
              Makmur Kec Deli Tua, Medan
            </li>
          </ul>
        </section>
        <section className="form">
          <ContactForm />
        </section>
      </section>
    </section>
  );
};

export default Contact;
