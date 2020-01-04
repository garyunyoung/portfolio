import React from "react";
import profileIllustration from "./images/profile-illustration.svg";
import "./stylesheets/About.scss";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div>
          <p className="about__header">
            Hi, <br /> Nice to meet you!
          </p>
          <div className="about__text">
            <p>
              Hi, I'm Garyun, a front-end developer who carries and interest in
              design and user experience for all (accessibility)
              <br />
              <br />
              Started coding in February, Have attended Rails Girls London as a
              coach, Background in Marketing and Public Relations Main focus is
              on user experience, clean code, Merging accessible design and
              visual ascetics, New Zealander currently in London
            </p>
            <br />
            <br />
            <p>Key Principles</p>
            <br />
            <p>1) Keep it simple the build from there</p>
            <br />
            <p>2) Accessibility first (Designed with Accessibility in mind)</p>
            <br />
            <p>
              3) Two way communication flow/feedback loop - allows for target
              and focused progress that will maximise the effectiveness
            </p>
            <br />
          </div>
          <div className="about__links">
            <a className="about__link" href="/#contact">
              Contact
            </a>
            <a className="about__link" href="/#contact">
              CV
            </a>
          </div>
        </div>
        <img alt="" src={profileIllustration} />
      </div>
    </section>
  );
}
