import React from "react";
import "./About.css";
import pc from "../assets/pc.webp";
import coding from "../assets/coding.png";
import text from '../assets/text.svg'

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
            <img src={pc} alt="" className="img-side__main-img" />
            <span className="emo">
              <img className="coding" src={coding} alt="" />
              <img className="text2" src={text} alt="" />
            </span>

            </div>
            <div className="text-side">
              <h4>About Me</h4>
              <h3>
                A dedicated Front-end Developer
                <br />
                based in Belgrade, Serbia 📍
              </h3>
              <p>
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
