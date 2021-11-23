import React from "react";
import "./stylesheets/About.scss";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="about__text-container">
          <p className="about__header">Nice to meet you!</p>
          <div className="about__text">
            <p>I'm a front-end developer who is interested in contributing towards high-quality web and mobile experiences for anyone and everyone.</p>
            <br />
            <p>Things I like:</p>
            <br />
            <ul className="about__list">
              <li>Human-centered design</li>
              <li>Testing and iterating - two-way communication</li>
              <li>Writing clear, reusuable, and reliable code</li>
              <li>Accessibility (A11Y) advocate</li>
              {/* <li>Diversity and inclusivity</li> */}
              <li>Being a 'net-positive' to the world ✌️</li>
            </ul>
          </div>
          <div className="about__links">
            <a className="about__link"
              href="https://res.cloudinary.com/garyou/image/upload/v1637624735/portfolio/Garyun_Young_Developer_CV_2021.pdf"
              target='_blank'
              rel='noopener noreferrer'
            >See resume</a>
            <a className="about__link" href="mailto:garyunyoung@gmail.com">Email me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
