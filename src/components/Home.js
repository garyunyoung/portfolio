import React from "react";

import { ButtonInternal } from './partials/Buttons'
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";


import "../styles/Home.scss";

export default function Home() {
  return (
    <main>
      <section className="home">
        <div className="home__content">
          <p className="home__text">Hi! I'm <u>Garyun</u>.</p>
          <p className="home__text">A front-end developer passionate about building <u>inclusive</u> and <u>innovative</u> digital experiences.</p>
          <p className="home__text">Currently in Auckland, NZ</p>
          <ButtonInternal
            className="home__projects-cta"
            link="/#projects"
            title="See projects" />
        </div>
      </section>
      <ProjectsSection />
      <AboutSection />
    </main>
  );
}