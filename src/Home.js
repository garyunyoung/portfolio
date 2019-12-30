import React from "react";
import { NavLink } from "react-router-dom";
import profileIllustration from "./images/profile-illustration.svg";
import "./stylesheets/Home.scss";
import NavBar from "./components/NavBar";
import Project from "./Projects";
import About from "./About";

export default function Home() {
  return (
    <React.Fragment>
      <section className="home">
        <div className="home__content">
          <div className="home__text">
            <span>
              Hi, I'm Garyun
              <br />A front end developer <br />
              who likes to <br /> design and develop!
              <br />
              <br />
              Currently in London UK
            </span>
          </div>
          <img className="home__image" src={profileIllustration} />
          <p>Projects</p>
          <p>↓</p>
        </div>
      </section>
      <Project />
      <About />
      <section className="contact">
        <div className="about__content home__content">Contact Form</div>
      </section>
    </React.Fragment>
  );
}
