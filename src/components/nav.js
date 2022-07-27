import React,{useState} from "react";
import "../App.css";
import { Link } from "react-router-dom";


function Nav() {
  // let menuOpen = false;
  //    const menuBtn = document.querySelector(".navigator");
  //    const navContainer = document.querySelector(".nav-container");
  //    const navLinks = document.querySelector(".nav-links");
  // const navbar = document.querySelector('.navbar');
  // const kami = document.querySelector('.kami');

  // function openNav() {

  //   if (!menuOpen) {
  //     menuBtn.classList.add("open");
  //     menuOpen = true;
  //     navContainer.classList.add("appear");
  //     navLinks.style.display = 'grid'
  //     navbar.classList.add('grad');
  //     kami.style.webkitTextFillColor = '#d8d8d8';
  //     document.body.style.overflow = 'hidden';
  //     // navbar.style.background =
  //       // 'linear-gradient(45deg, #12c2e9, #f64f59)';
  //   } else {
  //     menuBtn.classList.remove("open");
  //     menuOpen = false;
  //     navContainer.classList.remove("appear");
  //     navLinks.style.display = "none";
  //     navbar.classList.remove("grad");
  //     kami.style.webkitTextFillColor = 'transparent';
  //     document.body.style.overflow = 'visible';
  //     // navbar.style.background = '#000'
  //   }
  // }

  // function closeMenu() {
  //   menuBtn.classList.remove("open");
  //   menuOpen = false;
  //   navContainer.classList.remove("appear");
  //   navLinks.style.display = "none";
  //     navbar.classList.remove("grad");
  //     kami.style.webkitTextFillColor = 'transparent';
  //     document.body.style.overflow = 'visible';
  // }

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="nav">
      <nav className={toggle ? "navbar expanded" : "navbar"}>
        <div className="navbar-top">
          <Link to="/" >
            <h1>
              <span className={toggle ? "kami gray" : "kami"}>神</span>
              <span> OBETEN</span>
            </h1>
          </Link>

          <div
            className={toggle ? "navigator open" : "navigator"}
            onClick={handleToggle}
          >
            <div className="navigator__burger"></div>
          </div>
        </div>

        {/* Nav links */}
        <ul className="links">
          <Link to="/" onClick={handleToggle}>
            <li>HOME</li>
          </Link>
          <Link to="/about" onClick={handleToggle}>
            <li>ABOUT</li>
          </Link>
          <Link to="/projects" onClick={handleToggle}>
            <li>PROJECTS</li>
          </Link>
          <Link to="/contact" onClick={handleToggle}>
            <li>CONTACT</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
