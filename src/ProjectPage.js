import React from "react";
import { NavLink } from "react-router-dom";
import designMock from "./images/design-mock.png";
import beths0 from "./images/beths-project.png";
import beths1 from "./images/project-1-a.png";
import beths2 from "./images/project-1-b.png";
import beths3 from "./images/project-1-c.png";
import "./stylesheets/ProjectPage.scss";

export default function ProjectPage(props) {
  return (
    <section className="project">
      <img className="project__image" src={beths0} />
      <div className="project__content">
        <div className="project__description-container">
          <p className="project__title">
            <span>Stitched</span>
          </p>
          <p className="project__tools">
            Elixir &nbsp; | &nbsp; Phoenix &nbsp;| &nbsp; React &nbsp; | &nbsp;
            SCSS &nbsp; | &nbsp; HTML
          </p>
          <p className="project__description">{props.info}</p>
        </div>
        <div className="project__info-container">
          <p className="project__info">{props.info}</p>
          <ul className="project__bullets">
            <span>KEY FEATURES</span>
            <li>DESIGNED AND INTERATED USING GRAVIT.IO</li>
            <li>MOBILE FiRST, RESPONSIVE AND ACCESSIBLE</li>
            <li>INTEGrEATED GOOGLE ANALYTICS USING GOOGLE TAG MANAGER</li>
          </ul>
        </div>
        <div className="project__links">
          <a className="project__link" href={props.link}>
            visit site
          </a>
          <span>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
          <a className="project__link" href={props.link}>
            github
          </a>
          <br />
          <NavLink className="project__link project__link--back" to="/projects">
            &nbsp;&nbsp; back
          </NavLink>
          <br />
        </div>
        <a href="/">v</a>
        <img src={designMock} />
      </div>
    </section>
  );
}

export const BethsPage = () => (
  <ProjectPage
    images={[
      { img: beths0, imgInfo: "desktop" },
      { img: beths1, imgInfo: "mobile first" },
      { img: beths2, imgInfo: "mobile second" },
      { img: beths3, imgInfo: "mobile third" }
    ]}
    info="After accompanying Morgane in e. from scratch, in HTML5 and CSS3. A
bit of Javascript has of course perfected the product."
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
