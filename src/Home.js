import React from "react";
import NavBar from "./components/NavBar";
import Project from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Sketch from "./Sketch";
import profileIllustration from "./images/profile-illustration.svg";
import "./stylesheets/Home.scss";

export default function Home() {
  return (
    <React.Fragment>
      <NavBar link="/#" title="GARYUN YOUNG" />
      <main>
        <Sketch />
        <section className="home">
          <div className="home__content">
            {/* <img
              className="home__image home__image--desktop"
              alt=""
              src={profileIllustration}
            /> */}
            <div className="home__text">
              <p>
                Hello! I'm Garyun.
                <br />A front-end developer<br />
                {/* who likes to design and develop! */}
                {/* with a passion for designing and developing highly-polished user experiences. */}
                {/* with a passion for designing and developing for accessibility and inclusion. */}
                {/* with a passion for designing and developing inclusive user experiences. */}
                with a passion for <br/>building inclusive user experiences.
                {/* who is passionate about <br/>building inclusive user experiences. */}
                {/* that values <br/>building inclusive user experiences. */}
              </p>
              <div className="home__currently-text">
                <p>Currently in London, UK</p>
              </div>
              {/* <img className="home__image" alt="" src={profileIllustration} /> */}
              <a className="home__projects-link" href="/#projects">
                Projects
              </a>
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
