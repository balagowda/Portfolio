import React, { useState } from "react";
import "../Styles/NavBar.css";
import Hamburger from "./Hamburger";


const NavBar = () => {

  const [hamburger, setHamburger] = useState(true);

  const handleHamClick = () => {
    setHamburger((prevHamburger) => !prevHamburger);
    console.log(hamburger);
  };


  return (
    <header className="navbar-container">
    <div onClick={handleHamClick}>
      <Hamburger />
    </div>
    <div className="nav-img">
      <img src="/logo_.png" alt="img" />
    </div>
    <nav className="nav-links" id={hamburger ? "display-ham" : ""}>
        <a href="#projects" class="nav-link">
          Projects
        </a>
        <a href="#aboutme" class="nav-link">
          About Me
        </a>
        <a href="#contact" class="nav-link">
          Contact
        </a>
        
        <div>
          <input type="checkbox" id="toggler" class="toggler"/>
        </div>
      </nav>
  </header>
  );
};

export default NavBar;
