import React from "react";
import profileIllustration from "./images/profile-illustration.svg";
import "./stylesheets/About.scss";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="about__text-container">
          <p className="about__header">
            Hi, <br /> Nice to meet you!
          </p>
          <div className="about__text">
            <p>
              I'm a front-end developer who deeply values developing
              quality user experiences for everyone.
            </p>
            <br />
            <p>-</p>
            <br />
            <p>Key Principles</p>
            <br />
            <p>
              1) User-centered design
            </p>
            <p>
              2) Clear and maintainable code
            </p>
            <p>
              3) Feedback loops
            </p>
            <br />
            <br />
          </div>
          <div className="about__links">
            <a className="about__link" href="/#contact">
              Contact via email
            </a>
            <a className="about__link" href="/#contact">
              Download CV (PDF)
            </a>
          </div>
        </div>
        <img className="about__profile-image" alt="" src={profileIllustration} />
      </div>
    </section>
  );
}
