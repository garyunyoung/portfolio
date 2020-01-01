import React from "react";
import "./stylesheets/About.scss";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <p className="about__header">
          Hi, <br /> Nice to meet you!
        </p>
        <p className="about__text">
          Garyun is a New Zealand native who came of age in the Auckland music
          scene before moving to sunny London.
          <br />
          <br />
          She is far too obsessed with a band called The Beths, a dance called
          Lindy Hop, and that drool-worthy dish we call Carbonara.
        </p>
        <div className="about__links">
          <a className="about__link" href="/#contact">
            Contact
          </a>
          <a className="about__link" href="/#contact">
            CV
          </a>
        </div>
      </div>
    </section>
  );
}
