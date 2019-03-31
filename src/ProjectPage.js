import React from "react";
import Hamburger from "./Hamburger";
import Header from "./Header";
import beths1 from "./images/project-1-a.jpg";
import "./ProjectPage.scss";

export default function ProjectPage(props) {
  return (
    <section className="project__section">
      <Hamburger />
      <Header title="project #1" />
      <section className="project__section__container">
        <section className="carousel">
          <h1 className="carousel__button">{`<`}</h1>
          <div className="carousel__wrapper">
            <img className="carousel__image" src={props.img} />
            <p className="carousel__image__info">{props.imgInfo}</p>
          </div>
          <h1 className="carousel__button">{`>`}</h1>
        </section>
        <p className="project__section__info">{props.info}</p>
        <a href={props.link}>
          <h1 className="project__section__button">visit site</h1>
        </a>
      </section>
    </section>
  );
}

export const BethsPage = () => (
  <ProjectPage
    img={beths1}
    imgInfo="mobile first"
    info="After accompanying Morgane in e. from scratch, in HTML5 and CSS3. A
bit (/ splash) of Javascript has of course perfected the product,
adding a fair dose of animation and interaction that such a site
deserves."
    link="#"
  />
);

export const Splore = () => (
  <ProjectPage
    img={beths1}
    imgInfo="test"
    info="test"
    link="#"
  />
);
