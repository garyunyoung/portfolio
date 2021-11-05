import React from "react";
import ScrollToTopOnMount from "./utilities/ScrollToTop";
import "./stylesheets/ProjectPage.scss";

export default function ProjectPage(props) {
  return (
    <section className="project">
      <ScrollToTopOnMount />
      <div className="project__content">
        <a href='/#projects' className='project__back project__back--desktop is-active' >Back to projects</a>
        <div className="project__summary-container">
          <h2 className="project__title">{props.title}</h2>
          <p className="project__job-type-subtitle">{props.jobType}</p>
          <p className="project__job-year">{props.jobYear}</p>
          <ul className="project__technologies">
            {props.technologies.map((technology, index) => {
              return <li key={index} className="project__technology">{technology}</li>;
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
              {props.keyFeatures.map((keyFeature, index) => {
                return <li key={index} className="project__key-feature">{keyFeature}</li>;
              })}
            </ul>
          </div>
        </div>
        {props.images.map((image, index) => {
          return (
            <img key={index} className="project__image" src={image.src} alt={image.alt} />
          );
        })}
        {props.link !== "n/a" ? (
          <a className="project__link" href={props.link} rel="noopener noreferrer" target="_blank">
            Visit site
          </a>
        ) : (
          null
        )}
        <a href='/#projects' className='project__back is-active' >Back to projects</a>
      </div>
    </section>
  );
}
