import React from "react";
import "../App.css";
import HTML from "../assets/icons8-html-5.svg";
import CSS from "../assets/icons8-css3.svg";
import BTS from "../assets/icons8-bootstrap.svg";
import SASS from '../assets/icons8-sass.svg';
import JS from '../assets/icons8-javascript.svg';
import TS from '../assets/icons8-typescript.svg';
import RE from '../assets/icons8-react.svg';
import TW from '../assets/icons8-tailwindcss.svg'

import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
      className="about"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", transition: { duration: 0.2, delay: 0.2 } }}
    >
      <div className="about__me">
        <h3>Who am i?</h3>
        <p>
          Hi, I'm Divine Obeten. I am a{" "}
          <span className="header__hero-gradient">Frontend Developer</span> from
          Nigeria. I am passionate about creating great products and giving the
          users a great experience.
          <br />
          {/* <br /> */}I also take pride in contributing to fellow developers,
          reviewing their codes and solutions on the{" "}
          <a
            href="https://www.frontendmentor.io/profile/Deevyn9"
            target="blank"
          >
            Frontend Mentors
          </a>{" "}
          platform.
        </p>
      </div>
      <div className="about__stack">
        <h3>my stack</h3>
        <div className="skills">
          <span className="skill">
            <img src={HTML} alt="" />
            html
          </span>
          <span className="skill">
            <img src={CSS} alt="" />
            css
          </span>
          <span className="skill">
            <img src={SASS} alt="" />
            sass
          </span>
          <span className="skill">
            <img src={RE} alt="" />
            react
          </span>
          <span className="skill">
            <img src={TW} alt="" />
            tailwind
          </span>
          <span className="skill">
            <img src={BTS} alt="" />
            bootstrap
          </span>
          <span className="skill">
            <img src={JS} alt="" />
            javascript
          </span>
          <span className="skill">
            <img src={TS} alt="" />
            typescript
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
