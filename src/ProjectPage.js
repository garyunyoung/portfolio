import React from "react";
import { NavLink } from "react-router-dom";
import "./stylesheets/ProjectPage.scss";

export default function ProjectPage(props) {
  return (
    <section className="project">
      <div className="project__content">
        <div className="project__description-container">
          <p className="project__title">
           {props.title}
          </p>
          <p className="project__tools">
            {props.technologies.map(technology => {
              return <span className="project__tools-text">{technology}</span>;
            })}
          </p>
          <p className="project__description">
            {props.companyDescription}
            <br />
            <br />
            {/* <a
              className="project__link"
              href={props.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {props.displayLink}
            </a> */}
          </p>
        </div>
        <div className="project__info-container">
          <p className="project__info">{props.info}</p>
          <ul className="project__bullets">
            <p>KEY FEATURES</p>
            {props.keyFeatures.map(keyFeature => {
              return <li>{keyFeature}</li>;
            })}
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
        </div>
        {props.images.map(image => {
          return (
            <img
              className="project__link-image"
              src={image.src}
              alt={image.alt}
            />
          );
        })}
      </div>
    </section>
  );
}
