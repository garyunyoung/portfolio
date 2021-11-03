import React from "react";
import ScrollToTopOnMount from "./utilities/ScrollToTop";
import "./stylesheets/ProjectPage.scss";

export default function ProjectPage(props) {
  return (
    <section className="project">
      <ScrollToTopOnMount />
      <div className="project__content">
        <div className="project__summary-container">
          <h2 className="project__title">{props.title}</h2>
          <p className="project__job-type-subtitle">{props.jobType}</p>
          <p className="project__job-year">{props.jobYear}</p>
          <ul className="project__technologies">
            {props.technologies.map(technology => {
              return <li className="project__technology">{technology}</li>;
            })}
          </ul>
        </div>
        <div className="project__info-container">
          <p className="project__info">
            {props.companyDescription}
            <br /> <br />
            {props.info}
          </p>
          <div className="project__key-features-container">
            <p className="project__key-features-subtitle">My Role:</p>
            <ul className="project__key-features">
              {props.keyFeatures.map(keyFeature => {
                return <li className="project__key-feature">{keyFeature}</li>;
              })}
            </ul>
          </div>
        </div>
        {props.images.map(image => {
          return (
            <img className="project__image" src={image.src} alt={image.alt} />
          );
        })}
        {props.link != "n/a" ? (
          // <div className="project__link">
          <a className="project__link" href={props.link} rel="noopener noreferrer" target="_blank">
            Visit site
          </a>
          // </div>
        ) : (
          null
        )}
      </div>
    </section>
  );
}
