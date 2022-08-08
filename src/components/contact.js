import React from "react";
import "../App.css";
import Mailto from "./mailto";
import Resume from '../assets/01 DIVINE OBETEN RESUME --- FRONTEND DEVELOPER.pdf'

import { motion } from 'framer-motion'


function Contact() {
  return (
    <motion.div
      className="contacts"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", transition: { duration: 0.2, delay: 0.2 } }}
    >
      <div className="contacts__heading">
        <h2>Like What You See?</h2>
        <h4>get in touch</h4>
      </div>
      <div className="contacts__main">
        <Mailto email="divineobeten9@gmail.com" subject="" body="">
          Shoot me a mail!
        </Mailto>
        <a
          href="http://www.linkedin.com/in/divine-obeten"
          target="blank"
          className="mail"
        >
          Linkedin
        </a>
        <a href={Resume} className="mail" target="blank">
          Download Resume
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;
