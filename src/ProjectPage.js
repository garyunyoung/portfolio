import React from "react";
import { NavLink } from "react-router-dom";
import designMock from "./images/design-mock.png";
import stitched1 from "./images/stitched-1.png";
import beths0 from "./images/beths-project.png";
import beths1 from "./images/project-1-a.png";
import beths2 from "./images/project-1-b.png";
import beths3 from "./images/project-1-c.png";
import "./stylesheets/ProjectPage.scss";

export default function ProjectPage(props) {
  return (
    <section className="project">
      <div className="project__content">
        <div className="project__description-container">
          <p className="project__title">
            <span>Stitched</span>
          </p>
          <p className="project__tools">
            Elixir &nbsp; | &nbsp; Phoenix &nbsp;| &nbsp; React &nbsp; | &nbsp;
            SCSS &nbsp; | &nbsp; HTML
          </p>
          <p className="project__description">
            Stitched is an eco-friendly online curtain + blind retail start-up
            with a focus on 3D visualisation and AR <br />
            <br />
            <a href={props.link} rel="noopener noreferrer" target="_blank">
              stitched.co.uk
            </a>
          </p>
        </div>
        <div className="project__info-container">
          <p className="project__info">{props.info}</p>
          <ul className="project__bullets">
            <span>KEY FEATURES</span>
            <li>
              Built and deployed front-end changes for a site redesign that
              involved reusable CMS components.
            </li>
            <li>
              Mobile first and responsive site using React, JS, SASS,
              HTML/embedded Elixir and Git.
            </li>
            <li>
              Exposed to Redux, Elixir, Phoenix and unit/integration testing. 
            </li>
            <li>
              Worked closely with our UX/UI designer while implementing designs
              created on Zeplin.
            </li>
            <li>
              Experience using Kanban, CI and CD (Docker and Google Cloud).
            </li>
            <li>Practised pair programming with senior engineers. </li>
          </ul>
        </div>
        <div className="project__links">
          <a
            className="project__link"
            href={props.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            visit site
          </a>
          <br />
          <NavLink className="project__link project__link--back" to="/projects">
            back
          </NavLink>
          <br />
        </div>
        <img className="project__link-image" src={stitched1} />
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
    info="For my first role in a company I joined Stitched, interning as a Front End Developer.
    I was brought on to help with their site redesign but have since taken most front end features"
    link="https://www.stitched.co.uk/"
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
