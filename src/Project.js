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
                  A REACT Weather application using a weather API.
                  <br /> I built a React weather app as part of my SheCodes
                  React coding workshop. I became skilled in Bootstrap, API’s,
                  real-life development workflow, hosting and advanced
                  Javascript. I combined all these skills to create a full -
                  functioning weather app.
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
                  A REACT Dictionary app using a dictionary and image API.
                  <br /> I built a Dictionary App as part of SheCodes React. I
                  used my knowledge of this highly -demanded framework to build
                  a working dictionary app incorporating coding best practices,
                  along with the most popular tools and technologies.
                </p>

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
            <div className="col d-none d-lg-block ">
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
