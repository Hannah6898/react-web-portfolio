import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <div class="contact-details" id="contact">
        <hr />
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <a
                href="https://www.linkedin.com/in/hannah-osibodu-63b524152/"
                target="_blank"
              >
                <i class="fab fa-linkedin contact-icon"></i>
              </a>

              <a
                href="https://www.instagram.com/hanosiportfolio/"
                target="_blank"
              >
                <i class="fab fa-instagram-square contact-icon"></i>
              </a>

              <a href="https://github.com/Hannah6898" target="_blank">
                <i class="fab fa-github-square contact-icon"></i>
              </a>

              <a href="mailto:HannahOsibodu@gmail.com">
                <i class="fas fa-envelope-square contact-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
