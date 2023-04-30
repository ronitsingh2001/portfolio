import React from 'react'
import './Footer.css'

import linkedin from '../assets/linkedin.png'
import github from '../assets/github-logo.png'

function Footer() {
  return (
    <>
        <footer>
            <div className="container">
                <div className="footer">
                    <h3>Copyright © 2023. All rights are reserved</h3>
                    <div className="footer-socials">
                    <a
                    href="https://www.linkedin.com/in/ronit-singh-955914201/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/ronitsingh2001" target="_blank">
                    <img src={github} alt="Github" />
                  </a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer