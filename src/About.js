import React from "react";
import NavBar from "./components/NavBar";
import profileIllustration from "./images/profile-illustration.svg";
import "./stylesheets/About.scss";

export default function About() {
  return (
    <React.Fragment>
    <NavBar link="/" title="< GARYUN YOUNG />"/>
      <section className="about">
        <div className="about__content">
          <div className="about__header-image">
            <img className="about__image" src={profileIllustration} />
            <p className="about__header-text">
              Hi, <br /> Nice to meet you!
            </p>
          </div>
          <p className="about__text">
            Garyun is a New Zealand native who came of age in the Auckland music
            scene before moving to sunny London.
            <br />
            <br />
            She is far too obsessed with a band called The Beths, a dance called
            Lindy Hop, and that drool-worthy dish we call Carbonara.
          </p>
          <a
            className="about__text"
            href="mailto:garyunyoung@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONtACT | CV
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}
