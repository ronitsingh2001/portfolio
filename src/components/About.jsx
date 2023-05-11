import React from "react";
import pc from "../assets/pc.webp";
import coding from "../assets/coding.png";
import text from "../assets/text.svg";
import { AboutMe } from "../Constants";

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
                {AboutMe.interest_text}
                <br />
                {AboutMe.loaction} 📍
              </h3>
              <p>{AboutMe.short_intro}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
