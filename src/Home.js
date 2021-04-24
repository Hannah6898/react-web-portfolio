import React from "react";
import "./Home.css";

import homeImage from "./img/home-image.svg";

export default function Home() {
  return (
    <section className="Home" id="home">
      <div className="row">
        <div className="col-7">
          <div className="home-text">
            <h2 className="heading">Hey There!</h2>
            <h3>
              I'm <strong>Hannah</strong>
            </h3>
            <h4>A Front-end Developer based in the UK</h4>
          </div>
        </div>
        <div className="col-5 d-flex justify-content-start align-items-center">
          <img src={homeImage} />
        </div>
      </div>
    </section>
  );
}
