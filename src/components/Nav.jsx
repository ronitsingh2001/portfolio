import React, { useEffect, useState } from "react";
import darkpng from "../assets/dark.png";
import lightpng from "../assets/light.png";
import { navlinks } from "../Constants";

function Nav() {
  const [hamburger, setHamburger] = useState(true);
  const [dark, setDark] = useState(true);

  const [active, setactive] = useState("/");

  useEffect(() => {
    setHamburger(true);
  }, [active]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary-color", dark ? "#2d2e32" : "#abacb3");
    root.style.setProperty("--blue-color", dark ? "#147efb" : "#e8f2ff");
    root.style.setProperty("--bg-color", dark ? "#f9f9f9" : "#0e0e0e");
    root.style.setProperty("--white-color", dark ? "#fff" : "#1f1f1f");
    root.style.setProperty("--dark-grey", dark ? "#767676" : "#f6f6f6");
    root.style.setProperty(
      "--box-shadow",
      dark ? "rgba(0,0,0,0.09)" : "rgba(255,255,255,0.09)"
    );
    // --primary-color: #2d2e32;
    // --blue-color: #147efb;
    // --bg-color: #f9f9f9;
    // --white-color: #fff;
    // --dark-grey: #767676;
  }, [dark]);

  const hamburgermenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <nav id="#" className="nav">
        <h3 className="logo">
          <a onClick={() => setactive("/")} href="#">
            {"<RONIT /> "}
          </a>
        </h3>
        <button onClick={() => hamburgermenu()} className="toggle-button">
          <div className="toggle-button-bar"></div>
          <div className="toggle-button-bar bar2"></div>
          <div className="toggle-button-bar"></div>
        </button>
        <ul className="nav-links">
          {navlinks.map((item) => (
            <li>
              <a
                className={active == item.name ? "active" : ""}
                onClick={() => (setHamburger(true), setactive(item.name))}
                href={"#" + item.name}
              >
                {item.class} {active !== item.name ? item.name : "..."}
              </a>
            </li>
          ))}
          <li
            onClick={() => setDark(!dark)}
            className={dark ? "theme" : "theme dark"}
          >
            <a>
              <span>{!dark ? "LIGHTMODE" : "DARKMODE"}</span>
              <i className="fas  fa-lightbulb"></i>
            </a>
          </li>
        </ul>
      </nav>

      <>
        <div className={!hamburger ? "mobile-menu" : "slow mobile-menu"}>
          <button onClick={() => hamburgermenu()} className="toggle-button">
            <div className="toggle-button-bar-open bar1"></div>
            <div className="toggle-button-bar-open bar3"></div>
          </button>
          <ul className="nav-links">
            {navlinks.map((item) => (
              <li>
                <a
                  className={active == item.name ? "active" : ""}
                  onClick={() => (setHamburger(true), setactive(item.name))}
                  href={"#" + item.name}
                >
                  {item.class} {active !== item.name ? item.name : "..."}
                </a>
              </li>
            ))}
            <li
              onClick={() => (setDark(!dark), setHamburger(true))}
              className={dark ? "theme" : "theme dark"}
            >
              <a>
                <span>{!dark ? "LIGHTMODE" : "DARKMODE"}</span>
                <i className="fas  fa-lightbulb"></i>
              </a>
            </li>
          </ul>
        </div>
      </>
    </>
  );
}

export default Nav;
