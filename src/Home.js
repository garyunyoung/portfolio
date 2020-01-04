import React from "react";
import NavBar from "./components/NavBar";
import Project from "./Projects";
import About from "./About";
import Contact from "./Contact";
import profileIllustration from "./images/profile-illustration.svg";
import "./stylesheets/Home.scss";

export default function Home() {
  return (
    <React.Fragment>
      <NavBar link="/#" title="GARYUN YOUNG" />
      <main>
        <section className="home">
          <div className="home__content">
            <img
              className="home__image home__image--desktop"
              alt=""
              src={profileIllustration}
            />
            <div className="home__text">
              <p>
                Hi, I'm Garyun
                <br />A front end developer <br />
                who likes to <br /> design and develop!
              </p>
              <div className="home__currently-text">
                <p>Currently in London UK</p>
              </div>
              <img className="home__image" alt="" src={profileIllustration} />
                <a className="home__projects-link" href="/#projects">Projects</a>
            </div>
          </div>
        </section>
        <Project />
        <About />
        <Contact />
      </main>
    </React.Fragment>
  );
}
