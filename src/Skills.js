import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="Skills">
        <h2 className="heading">Skills</h2>

        <div className="row g-8">
          <div className="col-3">
            <div className="h-100">
              <i className="fab fa-html5 html skills-icon"></i>
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="h-100">
              <i className="fab fa-css3-alt css skills-icon"></i>
              <div className="card-body">
                <h5 className="card-title">CSS</h5>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="h-100">
              <i className="fab fa-js-square javaScript skills-icon"></i>
              <div className="card-body">
                <h5 className="card-title">Java Script</h5>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="h-100">
              <i className="fab fa-bootstrap bootstrap skills-icon"></i>
              <div className="card-body">
                <h5 className="card-title">Bootstrap</h5>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="h-100">
              <i className="fas fa-cogs skills-icon api"></i>
              <div className="card-body">
                <h5 className="card-title">API</h5>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="h-100">
              <i className="fab fa-github-square GitHub skills-icon"></i>
              <div className="card-body">
                <h5 className="card-title">GitHub</h5>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="h-100">
              <i className="fab fa-react react skills-icon"></i>
              <div className="card-body">
                <h5 className="card-title">React</h5>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="h-100">
              <i className="fas fa-laptop-code skills-icon"></i>
              <div className="card-body">
                <h5 className="card-title">Hosting</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
