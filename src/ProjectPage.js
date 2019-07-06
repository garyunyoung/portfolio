import React from "react";
import Hamburger from "./Hamburger";
import Header from "./Header";
import Carousel from "./Carousel";
import { NavLink } from "react-router-dom";
import beths1 from "./images/project-1-a.jpg";
import beths2 from "./images/project-1-b.jpg";
import beths3 from "./images/project-1-c.jpg";
import "./ProjectPage.scss";

export default function ProjectPage(props) {
  return (
    <section className="project__section">
      <Hamburger />
      <Header title="project #1" />
      <section className="project__section__container">
        <Carousel images={props.images} />
        <p className="project__section__info">{props.info}</p>
        <section className="button__wrapper">
          <a href={props.link}>
            <h1 className="button button--visit">visit site</h1>
          </a>
          <a href={props.link}>
            <h1 className="button button--github">github</h1>
          </a>
        </section>
        <NavLink className="button button--back" to="/projects">
          <h1>back</h1>
        </NavLink>
      </section>
    </section>
  );
}

export const BethsPage = () => (
  <ProjectPage
    images={[
      { img: beths1, imgInfo: "mobile first" },
      { img: beths2, imgInfo: "mobile second" },
      { img: beths3, imgInfo: "mobile third" }
    ]}
    info="After accompanying Morgane in e. from scratch, in HTML5 and CSS3. A
bit (/ splash) of Javascript has of course perfected the product,
adding a fair dose of animation and interaction that such a site
deserves."
    link="#"
  />
);

export const Splore = () => (
  <ProjectPage
    images={[
      { img: beths1, imgInfo: "mobile first" },
      { img: beths2, imgInfo: "mobile second" },
      { img: beths3, imgInfo: "mobile third" }
    ]}
    imgInfo="test"
    info="test"
    link="#"
  />
);
