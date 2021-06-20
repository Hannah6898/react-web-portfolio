import React from "react";
import "./Project.css";
import weatherapp from "./img/weatherapp.png";
import Dictionary from "./img/Dictionary.png";
import YoutubeClone from "./img/Youtube-clone.png";
import Drumkit from "./img/DrumKit.png";

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
                  A weather application which dynamically displays the present
                  weather of the users desired location and current location,
                  using Open Weather Map API. Through this project I became
                  skilled in using Bootstrap, API's, real- life development
                  workflow, hosting and JavaScript.
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
                <a
                  href="https://hannahosibodu583859.invisionapp.com/freehand/Weather-App-QmESz2J3k"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button">Wire frame</button>
                </a>
              </div>
            </div>
          </div>

          <div className="row  mb-5">
            <div className="col d-flex align-items-center">
              <div>
                <h3>Dictionary - React</h3>
                <p>
                  A dictionary application which displays meanings and images of
                  a users searched word; using multiple API calls.
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
                  <a
                    href="https://hannahosibodu583859.invisionapp.com/freehand/Dictionary-osLR8Dby"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button">Wire frame</button>
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

          <div className="row mb-5">
            <div className="col d-none d-lg-block">
              <div className="image d-flex justify-content-center">
                <img
                  src={YoutubeClone}
                  className="img-fluid dictionary"
                  alt="YouTube clone project preview"
                />
              </div>
            </div>
            <div className="col d-flex align-items-center">
              <div>
                <h3>Youtube Homepage clone</h3>
                <p>
                  Developed a site clone of the YouTube homepage using HTML,
                  CSS, Bootstrap and JavaScript.
                </p>
                <a
                  href="https://elegant-sinoussi-498e6f.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button">See Live</button>
                </a>
                <a
                  href="https://github.com/Hannah6898/Youtube-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button">Source Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="row  mb-5">
            <div className="col d-flex align-items-center">
              <div>
                <h3>JavaScript Drumkit</h3>
                <p>
                  Created a Drum Kit, designed using CSS grid and implementing
                  Keyboard events
                </p>
                <div>
                  <a
                    href="https://dreamy-kalam-3b5e13.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button">See Live</button>
                  </a>
                  <a
                    href="https://github.com/Hannah6898/JavaScript-Drum-Kit"
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
                  src={Drumkit}
                  className="img-fluid dictionary"
                  alt="Drum kit project preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
