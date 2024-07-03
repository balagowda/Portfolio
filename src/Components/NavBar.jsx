import React, { useState } from "react";
import "../Styles/NavBar.css";
import Hamburger from "./Hamburger";


const NavBar = () => {

  const [hamburger, setHamburger] = useState(true);
  const [isChecked, setIsChecked] = useState(true);

  const handleHamClick = () => {
    setHamburger((prevHamburger) => !prevHamburger);
    console.log(hamburger);
  };

  const setDarkMode=()=>{
    document.querySelector("body").setAttribute('data-theme','dark');
  }
  const setLigthMode=()=>{
    document.querySelector("body").setAttribute('data-theme','light');
  }

  const toggleTheme = (e) =>{
    setIsChecked(e.target.checked);
    if(isChecked) setDarkMode();
    else setLigthMode();
  }


  return (
    <header className="navbar-container">
    <div onClick={handleHamClick}>
      <Hamburger />
    </div>
    <div className="logo">
        <a href="/" className="home-link"><img src={`/logo.png`} alt="logo" /></a>
      </div>
   
    <nav className="nav-links" id={hamburger ? "display-ham" : ""}>
        <a href="#project-section" className="nav-link">
          Projects
        </a>
        <a href="#about-section" className="nav-link">
          About
        </a>
        <a href="#contact-section" className="nav-link">
          Contact
        </a>
        
        <div className=".dark-theme-toggle">
          <input type="checkbox" id="toggler" className="toggler" onChange={toggleTheme} checked={isChecked}/>
        </div>
      </nav>
  </header>
  );
};

export default NavBar;
