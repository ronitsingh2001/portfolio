import React from "react";
import location from "../assets/location.png";
import mail from "../assets/mail.png";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-title">
              <p>Contact</p>
              <h3>Don't be shy! Hit me up! 👇</h3>
            </div>
            <div className="contact-icons">
              <div className="contact-icon__box">
                <div className="pro-icon">
                  <img src={location} alt="" />
                </div>
                <div className="contact-info">
                  <h3>Location</h3>
                  <p>Delhi-NCR, India </p>
                </div>
              </div>
              <div className="contact-icon__box">
                <div className="pro-icon">
                  <img src={mail} alt="" />
                </div>
                <div className="contact-info">
                  <h3>Mail</h3>
                  <a href="mailto:ronitsingh2112@gmail.com">
                    ronitsingh2112@gmail.com{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
