import { LinkExternal, LinkInternal } from './partials/Links'

import "../styles/AboutSection.scss";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <h2 className="about__header">Nice to meet you!</h2>
        <p className="about__description">I'm a front-end developer who is interested in contributing towards high-quality web and mobile experiences for anyone and everyone.</p>
        <div className="about__personality-list-container">
          <h4 className="about__list-header">Things I like:</h4>
          <ul className="about__personality-list">
            <li>User-centered design</li>
            <li>Testing, iterating, and collaboration</li>
            <li>Writing clear, reusuable, and reliable code</li>
            <li>Diversity and inclusivity</li>
            <li>Being a 'net-positive' to the world ✌️</li>
          </ul>
        </div>

        <div className="about__links">
          <LinkExternal
            className="about__link"
            type="button"
            href="https://res.cloudinary.com/garyou/image/upload/v1638130760/portfolio/Garyun-Young-Front-End-Developer-CV-2021.pdf"
            text="See resume" />

          <LinkInternal
            className="about__link"
            type="button"
            href="mailto:garyunyoung@gmail.com"
            text="Email me" />
        </div>

        <div className="about__resource-list-container">
          <h4 className="about__list-header">Favourite learning resources:</h4>
          <ul className="about__resource-list">
            <ResourceListItem text="The Bike Shed" href="https://www.bikeshed.fm/" />
            <ResourceListItem text="Syntax" href="https://syntax.fm/" />
            <ResourceListItem text="Execute Program" href="https://www.executeprogram.com/" />
            <ResourceListItem text="Advent of Code" href="https://adventofcode.com/2021/about" />
            <ResourceListItem text="The A11Y Project" href="https://www.a11yproject.com/" />
            <ResourceListItem text="The Coding Train" href="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw" />
          </ul>
        </div>
      </div>
    </section>
  );
}

function ResourceListItem({ text, href }) {
  return (
    <li className="about__resource-list-item">
      <LinkExternal
        className="about__resource-list-item-link"
        type="link"
        href={href}
        text={text} />
    </li>
  )
}