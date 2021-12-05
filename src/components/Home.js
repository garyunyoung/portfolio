import React from "react";

import Project from "./Projects";
import About from "./About";
import ElementInView from "../utilities/ElementInView";

import "../styles/Home.scss";

export default function Home() {
  return (
    <React.Fragment>
      <main>
        <section className="home">
          <div className="home__content">
            <p className="home__text">
              Hi! I'm <u>Garyun</u>.
              <br />
              <br />
              A front-end developer passionate about building <u>inclusive</u> and <u>innovative</u> digital experiences.
            </p>
            <p className="home__text">Currently in Auckland, NZ</p>
            <a className="home__projects-cta" href="/#projects">
              See projects
            </a>
          </div>
        </section>
        <Project />
        <About />
      </main>
      <ElementInView />
    </React.Fragment>
  );
}