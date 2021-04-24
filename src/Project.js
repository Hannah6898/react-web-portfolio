import React from "react";
import "./Project.css";
import weatherapp from "./img/weatherapp.png";
import Dictionary from "./img/Dictionary.png";

export default function Project() {
  return (
    <section id="projects">
      <div className="Projects">
        <h2 className="heading">Projects</h2>

        <div className="container">
          <div className="row mb-5">
            <div className="col d-none d-lg-block">
              <div className="image d-flex justify-content-center">
                <img
                  src={weatherapp}
                  className="img-fluid weather-app"
                  alt="WeatherApp project preview"
                />
              </div>
            </div>
            <div className="col d-flex align-items-center">
              <div className="project-decription">
                <h3>Weather app - React</h3>
                <p>
                  I built a Vanilla JavaScript weather app in SheCodes Plus, an
                  advanced 8-week JavaScript coding workshop. Building upon my
                  previously-gained knowledge, I also became skilled in
                  Bootstrap, API’s, real-life development workflow, hosting, and
                  advanced JavaScript. I combined all of these skills to create
                  a fully-functioning weather app.
                </p>
                <a
                  href="https://fervent-galileo-89d4fe.netlify.app/"
                  target="_blank"
                >
                  <button type="button">See Live</button>
                </a>
                <a
                  href="https://github.com/Hannah6898/react-weather-app"
                  target="_blank"
                >
                  <button type="button">Source Code</button>
                </a>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col d-flex align-items-center">
              <div className="project-decription">
                <h3>Dictionary - React</h3>
                <p>
                  I built a Vanilla JavaScript weather app in SheCodes Plus, an
                  advanced 8-week JavaScript coding workshop. Building upon my
                  previously-gained knowledge, I also became skilled in
                  Bootstrap, API’s, real-life development workflow, hosting, and
                  advanced JavaScript. I combined all of these skills to create
                  a fully-functioning weather app.
                </p>

                <a
                  href="https://gallant-boyd-0ddfe2.netlify.app/"
                  target="_blank"
                >
                  <button type="button">See Live</button>
                </a>
                <a
                  href="https://github.com/Hannah6898/react-dictionary"
                  target="_blank"
                >
                  <button type="button">Source Code</button>
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block ">
              <div className="image d-flex justify-content-center">
                <img
                  src={Dictionary}
                  className="img-fluid dictionary"
                  alt="WeatherApp project preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
