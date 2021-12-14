import React, { useEffect } from "react";
import { ButtonExternal } from './partials/Buttons'
import { LinkInternal } from './partials/Links'
import scrollToTop from "../utilities/ScrollToTop";
import "../styles/ProjectPage.scss";

export default function ProjectPage({
  title,
  modifier,
  technologies,
  projectType,
  projectYear,
  projectDescription,
  keyFeatures,
  images,
  mobileImages,
  imageSets,
  links
}) {
  useEffect(() => scrollToTop())
  return (
    <section className="project">
      <div className="project__content">
        <div className="project__summary-container">
          <h2 className="project__title">{title}</h2>
          <p className="project__job-type-subtitle">{projectType}</p>
          <p className="project__job-year">{projectYear}</p>
          <ul className="project__technologies">
            {technologies.map((technology, index) => {
              return <li key={index} className="project__technology">{technology}</li>;
            })}
          </ul>
        </div>
        <div className="project__projectDescription-container">
          <div className="project__description-container">
            {projectDescription.map((projectDescription, index) => {
              return <p key={index} className="project__description" >{projectDescription}</p>
            })}
          </div>
          <div className="project__key-features-container">
            <p className="project__key-features-subtitle">My Role:</p>
            <ul className="project__key-features">
              {keyFeatures.map((keyFeature, index) => {
                return <li key={index} className="project__key-feature">{keyFeature}</li>;
              })}
            </ul>
          </div>
        </div>

        {
          images ?
            <div className={`project__desktop-images project__desktop-images--${mobileImages ? 'spacer' : ""}`}>
              {images.map((image, index) => {
                return (
                  <img
                    key={index}
                    className={`project__image project__image--${modifier}`}
                    src={image.src} alt={image.alt} />
                );
              })}
            </div> : null
        }


        {
          mobileImages ?
            <div className="project__mobile-images">
              {mobileImages.map((image, index) => {
                return (
                  <img
                    key={index}
                    className={`project__mobile-image project__mobile-image--${modifier}`}
                    src={image.src} alt={image.alt} />
                );
              })}
            </div> : null
        }

        {
          imageSets ?
            <React.Fragment>
              {imageSets.map((imageSet, index) => {
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
            links !== "" ?
              links.map((link, index) => {
                return (
                  <ButtonExternal
                    key={index}
                    className="project__link"
                    link={link.url}
                    title={link.text} />
                )
              }) : null
          }
        </div>
        <LinkInternal
          className="project__back is-active"
          link="/#projects"
          title="Back to projects" />
      </div>
    </section >
  );
}
