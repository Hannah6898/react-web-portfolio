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
              <div>
                <h3>Weather app - React</h3>
                <p>
                  I built a React weather app as part my SheCodes React coding
                  course. Through this project I became skilled in using
                  Bootstrap, API's, real- life development workflow, hosting and
                  JavaScript.
                </p>
                <a
                  href="https://fervent-galileo-89d4fe.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button">See Live</button>
                </a>
                <a
                  href="https://github.com/Hannah6898/react-weather-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button">Source Code</button>
                </a>
              </div>
            </div>
          </div>

          <div className="row  mb-5">
            <div className="col">
              <div>
                <h3>Dictionary - React</h3>
                <p>
                  I built a React Dictionary app as part of SheCodes React
                  Course. I used the knowledge I'd gained on the course to build
                  a working dictionary app incorporating coding best practices,
                  along with popular technologies such as API's and JavaScript.
                </p>
                <div>
                  <a
                    href="https://gallant-boyd-0ddfe2.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button">See Live</button>
                  </a>
                  <a
                    href="https://github.com/Hannah6898/react-dictionary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button">Source Code</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col  d-none d-lg-block">
              <div className="image d-flex justify-content-center">
                <img
                  src={Dictionary}
                  className="img-fluid dictionary"
                  alt="Dictionary project preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
