import React from "react";
import { ButtonExternal, ButtonInternal } from './partials/Buttons'
import { LinkExternal } from './partials/Links'
import "../styles/AboutSection.scss";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <p className="about__header">Nice to meet you!</p>
        <p className="about__description">I'm a front-end developer who is interested in contributing towards high-quality web and mobile experiences for anyone and everyone.</p>
        <div className="about__personality-list-container">
          <p className="about__list-header">Things I like:</p>
          <ul className="about__personality-list">
            <li>User-centered design</li>
            <li>Testing, iterating, and collaboration</li>
            <li>Writing clear, reusuable, and reliable code</li>
            <li>Diversity and inclusivity</li>
            <li>Being a 'net-positive' to the world ✌️</li>
          </ul>
        </div>

        <div className="about__buttons">
          <ButtonExternal
            className="about__button"
            href="https://res.cloudinary.com/garyou/image/upload/v1638130760/portfolio/Garyun-Young-Front-End-Developer-CV-2021.pdf"
            text="See resume" />

          <ButtonInternal
            className="about__button"
            href="mailto:garyunyoung@gmail.com"
            text="Email me" />
        </div>

        <div className="about__resource-list-container">
          <p className="about__list-header">Favourite learning resources:</p>
          <ul className="about__resource-list">
            <ListItemLink linkName="The Bike Shed" link="https://www.bikeshed.fm/" />
            <ListItemLink linkName="Syntax" link="https://syntax.fm/" />
            <ListItemLink linkName="Execute Program" link="https://www.executeprogram.com/" />
            <ListItemLink linkName="Advent of Code" link="https://adventofcode.com/2021/about" />
            <ListItemLink linkName="The A11Y Project" link="https://www.a11yproject.com/" />
            <ListItemLink linkName="The Coding Train" link="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw" />
          </ul>
        </div>
      </div>
    </section>
  );
}

function ListItemLink(props) {
  return (
    <li className="about__resource-list-item">
      <LinkExternal
        className="about__resource-list-item-link"
        href={props.link}
        text={props.linkName} />
    </li>
  )
}