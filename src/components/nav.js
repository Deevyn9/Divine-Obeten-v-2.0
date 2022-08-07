import React,{useState} from "react";
import "../App.css";
import { Link } from "react-router-dom";


function Nav() {
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
