import React from "react";
import { PrimaryButtonExternal, PrimaryButtonInternal } from './partials/PrimaryButtons'
import "../styles/About.scss";

export default function About() {
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

        <div className="about__links">
          <PrimaryButtonExternal
            className="about__link"
            link="https://res.cloudinary.com/garyou/image/upload/v1638130760/portfolio/Garyun-Young-Front-End-Developer-CV-2021.pdf"
            title="See resume" />

          <PrimaryButtonInternal
            className="about__link"
            link="mailto:garyunyoung@gmail.com"
            title="Email me" />
        </div>

        <div className="about__resource-list-container">
          <p className="about__list-header">Favourite learning resources:</p>
          <ul className="about__resource-list">
            <ListItemLink linkName="The Bike Shed" link="https://www.bikeshed.fm/" />
            <ListItemLink linkName="Syntax" link="https://syntax.fm/" />
            <ListItemLink linkName="Execute Program" link="https://www.executeprogram.com/" />
            <ListItemLink linkName="The A11Y Project" link="https://www.a11yproject.com/" />
          </ul>
        </div>
      </div>
    </section>
  );
}

function ListItemLink(props) {
  return (
    <li className="about__resource-list-item">
      <a className="about__resource-list-item-link"
        href={props.link}
        target='_blank'
        rel='noopener noreferrer'
      >{props.linkName}</a>
    </li>
  )
}