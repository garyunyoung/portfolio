import React from "react";
import "./stylesheets/About.scss";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="about__text-container">
          <p className="about__header">Nice to meet you!</p>
          <div className="about__text">
            <p>I'm a front-end developer who is interested in contributing towards quality user experiences for anyone and everyone.</p>
            <br />
            <p>Principals:</p>
            <br />
            <p>- Human-centered design</p>
            <p>- Testing and iterating - two-way communication</p>
            <p>- Writing clear, reusuable, and reliable code</p>
            <p>- Accessibility (A11Y) advocate</p>
            <p>- Diversity and inclusivity</p>
            <p>- Being a 'net-positive' to the world ✌️</p>
            <br />
            <br />
          </div>
          <div className="about__links">
            <a className="about__link"
              href="https://res.cloudinary.com/garyou/image/upload/v1637034607/portfolio/Garyun_Young_Developer_2021.pdf"
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
