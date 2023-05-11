import React from "react";
import git from "../assets/github-logo.png";
import demo from "../assets/share.png";
import { projects } from "../Constants";

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="project-grid">
              {projects.map((project, index) => (
                <div className={index % 2 === 0 ? "pro__1" : "pro__1 rev_pro"}>
                  <div className="pro-img">
                    <a style={{ cursor: "pointer" }}>
                      <img id={project.name} src={project.img} alt="" />
                    </a>
                  </div>
                  <div className="pro-text">
                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>
                    {project.stack.length > 0 && (
                      <div className="stack">
                        {project.stack.map((s) => (
                          <p>{s}</p>
                        ))}
                      </div>
                    )}
                    <div className="links">
                      <a href={project.github}>
                        Code <img src={git} alt="" />
                      </a>
                      <a href={project.link}>
                        Live Demo <img src={demo} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
