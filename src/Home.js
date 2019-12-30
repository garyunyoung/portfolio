import React from "react";
import "./stylesheets/Home.scss";
import NavBar from "./components/NavBar";
import Project from "./Projects";
import About from "./About";

export default function Home() {
  return (
    <React.Fragment>
      <NavBar link="/#" title="< GARYUN YOUNG />" />
      <section className="home">
        <div className="home__content">
          <div className="home__text">
            <p>
              Hi, I'm Garyun
              <br />A front end developer <br />
              who likes to <br /> design and develop!
            </p>
            <div className="home__currently-text">
              <p>Currently in London UK</p>
            </div>
            <div className="home__projects-text">
              <a href="/#projects">
                <p>Projects</p>
                <p>↓</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Project />
      <About />
      <section id="contact" className="contact">
        <div className="about__content home__content">Contact Form</div>
      </section>
    </React.Fragment>
  );
}
