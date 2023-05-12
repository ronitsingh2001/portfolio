import React, { useState } from "react";

function Resume() {
  const [resume, setResume] = useState(false);

  return (
    <>
      <section className="resume" id="cv">
        <div className="container">
          <div className="resume-content">
            <div className="resume-content-title">
              <h3>Resume/CV</h3>
              <div className="resume-content-button">
                <a onClick={() => setResume(true)} className="view">
                  View CV
                </a>
                {/* <a href="" className="download" download>
                  Download CV
                </a> */}
              </div>
            </div>
            <div className={"resume-content-img" + (resume ? " full" : "")}>
              {resume && (
                <i
                  onClick={() => setResume(false)}
                  className="fa-solid fa-close fa-3x"
                ></i>
              )}
            </div>
            {resume && (
              <div onClick={() => setResume(false)} className="modal"></div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
