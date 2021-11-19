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
            {props.technologies.map((technology, index) => {
              return <li key={index} className="project__technology">{technology}</li>;
            })}
          </ul>
        </div>
        <div className="project__info-container">
          <div className="project__description-container">
            <p className="project__description project__description--company">{props.companyDescription}</p>

            {props.info.map((info, index) => {
              return <p key={index} className="project__description" >{info}</p>
            })}
          </div>
          <div className="project__key-features-container">
            <p className="project__key-features-subtitle">My Role:</p>
            <ul className="project__key-features">
              {props.keyFeatures.map((keyFeature, index) => {
                return <li key={index} className="project__key-feature">{keyFeature}</li>;
              })}
            </ul>
          </div>
        </div>

        {
          props.images ?
            <div className={`project__desktop-images project__desktop-images--${props.mobileImages ? 'spacer' : ""}`}>
              {props.images.map((image, index) => {
                return (
                  <img
                    key={index}
                    className={`project__image project__image--${props.modifier}`}
                    src={image.src} alt={image.alt} />
                );
              })}
            </div> : null
        }


        {
          props.mobileImages ?
            <div className="project__mobile-images">
              {props.mobileImages.map((image, index) => {
                return (
                  <img
                    key={index}
                    className={`project__mobile-image project__mobile-image--${props.modifier}`}
                    src={image.src} alt={image.alt} />
                );
              })}
            </div> : null
        }

        {
          props.imageSets ?
            <React.Fragment>
              {props.imageSets.map((imageSet, index) => {
                return (
                  <div key={index} className={`project__image-set`}>
                    {
                      imageSet.map((image, index) => {
                        return (
                          <img
                            key={index}
                            className={`project__image-set-image project__image-set-image--${image.modifier}`}
                            src={image.src} alt={image.alt} />
                        );
                      })
                    }
                  </div>
                )
              })}
            </React.Fragment> : null
        }

        <div className='project__cta-links'>
          {
            props.links !== "" ?
              props.links.map((link, index) => {
                return (
                  <a
                    key={index}
                    className="project__link"
                    href={link.url} 
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.text}
                  </a>
                )
              }) : null
          }
        </div>
        <a href='/#projects' className='project__back is-active' >Back to projects</a>
      </div>
    </section >
  );
}
