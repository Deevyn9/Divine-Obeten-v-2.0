import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Mailto from "./mailto";
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div
      className="hero-wrapper"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", transition: { duration: 0.2, delay: 0.2 } }}
    >
      <header className="header">
        <div className="header__hero">
          <p>Hello,</p>
          {/* <br /> */}
          <p className="hero-text">
            This is the portfolio site of{" "}
            <span className="header__hero-gradient">Divine Obeten.</span>
          </p>
          {/* <br /> */}
          <p>I'm a Frontend Developer.</p>
        </div>
        <Link to="/projects">
          <div className="proj-link">
            <span className="my-projects">View Projects</span>
          </div>
        </Link>
      </header>
      <footer>
        <a href="http://www.linkedin.com/in/divine-obeten" target="blank">
          LN
        </a>
        <a href="https://github.com/Deevyn9" target="blank">
          GH
        </a>
        <Mailto email="divineobeten9@gmail.com" subject="" body="">
          MAIL
        </Mailto>
        <a href="https://hashnode.com/@Deevyn" target="blank">
          HN
        </a>
      </footer>
    </motion.div>
  );
}

export default Home;