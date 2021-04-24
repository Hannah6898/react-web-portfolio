import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <div className="Contact">
        <hr />
        <h2>Contact Me</h2>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <a
                href="https://www.linkedin.com/in/hannah-osibodu-63b524152/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin contact-icon"></i>
              </a>

              <a
                href="https://www.instagram.com/hanosiportfolio/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram-square contact-icon"></i>
              </a>

              <a
                href="https://github.com/Hannah6898"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square contact-icon"></i>
              </a>

              <a href="mailto:HannahOsibodu@gmail.com" rel="noreferrer">
                <i className="fas fa-envelope-square contact-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
