import React from "react";
import NavBar from "./components/NavBar";
import Project from "./Projects";
import About from "./About";
import Contact from "./Contact";
// import Sketch from "./Sketch";
import "./stylesheets/Home.scss";

export default function Home() {
  return (
    <React.Fragment>
      <NavBar link="/#" />
      <main>
        {/* <Sketch /> */}
        <section className="home">
          <div className="home__content">
            <div className="home__text">
              <p>
                Hello! I'm Garyun.
                <br />A front-end developer<br />
                with a passion for <br />building inclusive user experiences.
              </p>
              <div className="home__currently-text">
                <p>Currently in London, UK</p>
              </div>
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