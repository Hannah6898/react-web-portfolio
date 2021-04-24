import React from "react";
import weatherapp from "./img/weatherapp.png";
import Dictionary from "./img/Dictionary.png";

export default function Project() {
  return (
    <section id="projects" className="Projects">
      <h2 className="heading">Projects</h2>

      <div className="row">
        <div className="col-6">
          <div className="card w-60">
            <img src={weatherapp} className="project-img" alt="Weather App" />
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="project-btn">
                <a href="projects.html">
                  <button type="button">See More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card w-90">
            <img src={Dictionary} alt="Dictionary" />
            <div className="card-body">
              <h5 className="card-title">Dictionary</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="project-btn">
                <a href="projects.html">
                  <button type="button">See More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
