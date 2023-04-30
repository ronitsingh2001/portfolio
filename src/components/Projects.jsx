import React from "react";
import "./Project.css";
import car from "../assets/car-rental.webp";

import git from '../assets/github-logo.png'
import demo from '../assets/share.png'

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="project-grid">
              <div className="pro pro__1 undefined">
                <div className="pro-img">
                  <a href="#projects">
                    <img src={car} alt="" />
                  </a>
                </div>
                <div className="pro-text">
                  <h3>Car Rental🚗</h3>
                  <p>
                    A car rental website is an online platform that allows users
                    to rent cars for personal or business use. The website
                    provides an interface for searching, comparing, and
                    reserving cars.
                  </p>
                  <div className="stack">
                    <p>React</p>
                    <p>SCSS</p>
                  </div>
                  <div className="links">
                    <a href="#">Code <img src={git} alt="" /></a>
                    <a href="#">Live Demo <img src={demo} alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
