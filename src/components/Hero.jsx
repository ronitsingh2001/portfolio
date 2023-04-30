import React from "react";
import wave from "../assets/wave.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github-logo.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import react from "../assets/react.png";
import angular from "../assets/angular.png";
import sass from "../assets/sass.png";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero" id="home">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-end react developer</h1>
                <img className="wave" src={wave} alt="waving hand" />
                <p>
                Hi, I'm Ronit. A passionate Front-end React Developer based in Delhi-NCR, India.
                </p>
                <span>
                  <a
                    href="https://www.linkedin.com/in/ronit-singh-955914201/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/ronitsingh2001" target="_blank">
                    <img src={github} alt="Github" />
                  </a>
                </span>
              </div>
              <div className="hero-img"></div>
            </div>
            <div className="skills">
              <p>tech stack</p>
              <div className="logos">
                <ul>
                  <li>
                    <img src={html} alt="html" />
                  </li>
                  <li>
                    <img src={css} alt="css" />
                  </li>
                  <li>
                    <img src={js} alt="js" />
                  </li>
                  <li>
                    <img src={react} alt="react" />
                  </li>
                  <li>
                    <img src={angular} alt="angular" />
                  </li>
                  <li>
                    <img src={tailwind} alt="tailwind" />
                  </li>
                  <li>
                    <img src={sass} alt="sass" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
