import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [hamburger, setHamburger] = useState(true);

  const hamburgermenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
          <nav className="nav">
            <h3 className="logo">Ronit.dev</h3>
            <button onClick={() => hamburgermenu()} className="toggle-button">
              <div className="toggle-button-bar"></div>
              <div className="toggle-button-bar bar2"></div>
              <div className="toggle-button-bar"></div>
            </button>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
     
      {!hamburger && (
        <>
          <div className="mobile-menu">
            <button onClick={() => hamburgermenu()} className="toggle-button">
              <div className="toggle-button-bar-open bar1"></div>
              <div className="toggle-button-bar-open bar3"></div>
            </button>
            <ul className="nav-links">
            <li>
                <a onClick={()=>setHamburger(true)} href="#home">Home</a>
              </li>
              <li>
                <a onClick={()=>setHamburger(true)} href="#about">About</a>
              </li>
              <li>
                <a onClick={()=>setHamburger(true)} href="#projects">Projects</a>
              </li>
              <li>
                <a onClick={()=>setHamburger(true)} href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Nav;
