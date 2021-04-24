import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div class="skills">
        <h2 class="heading">Skills</h2>

        <div class="row g-8">
          <div class="col-3">
            <div class="h-100">
              <i class="fab fa-html5 html skills-icon"></i>
              <div class="card-body">
                <h5 class="card-title">HTML</h5>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="h-100">
              <i class="fab fa-css3-alt css skills-icon"></i>
              <div class="card-body">
                <h5 class="card-title">CSS</h5>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="h-100">
              <i class="fab fa-js-square javaScript skills-icon"></i>
              <div class="card-body">
                <h5 class="card-title">Java Script</h5>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="h-100">
              <i class="fab fa-bootstrap bootstrap skills-icon"></i>
              <div class="card-body">
                <h5 class="card-title">Bootstrap</h5>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="h-100">
              <i class="fas fa-cogs skills-icon"></i>
              <div class="card-body">
                <h5 class="card-title">API</h5>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="h-100">
              <i class="fab fa-github-square GitHub skills-icon"></i>
              <div class="card-body">
                <h5 class="card-title">GitHub</h5>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="h-100">
              <i class="fab fa-react react skills-icon"></i>
              <div class="card-body">
                <h5 class="card-title">React</h5>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="h-100">
              <i class="fas fa-laptop-code skills-icon"></i>
              <div class="card-body">
                <h5 class="card-title">Hosting</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
