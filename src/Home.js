import React from "react";
import UnderConstructionBanner from "./components/UnderConstructionBanner";
import NavBar from "./components/NavBar";
import Project from "./Projects";
import About from "./About";
import Footer from "./Footer";
import ElementInView from "./utilities/ElementInView";

import "./stylesheets/Home.scss";

export default function Home() {
  return (
    <React.Fragment>
      <NavBar link="/#" />
      <main>
        <section className="home">
          <div className="home__content">
            <div className="home__text">
              <p>
                Hi! I'm Garyun. < br />
                A front-end developer who values building inclusive user experiences.
              </p>
              <div className="home__currently-text">
                <p>Currently in Auckland, NZ</p>
              </div>
              <a className="home__projects-link" href="/#projects">
                See projects
              </a>
            </div>
          </div>
        </section>
        <Project />
        <About />
        <Footer />
        <UnderConstructionBanner />
        <ElementInView />
      </main>
    </React.Fragment>
  );
}