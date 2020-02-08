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
              Garyun is a front-end developer who deeply values designing and
              developing creative high-quality user experiences for absolutley anyone and everyone.
              <br />
              <br/>
              Having just moved from New Zealand to London and armed with a Bachelor of Communications - Marketing and Public Relations -
              Garyun embarked on her coding career in February 2018, and has been able to transfer those skills
              ......attended Rails Girls London as a coach,
            </p>
            <br/>
            <br/>
            <p>Key Principles</p>
            <br />
            <p>
              1) User-centered design
            </p>
            <br />
            <p>
              2) Feedback loops
            </p>
            <br />
            <p>
              3) Keeping code simple
            </p>
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
