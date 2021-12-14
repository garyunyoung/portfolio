import React, { useEffect } from "react"
import { ButtonExternal } from './partials/Buttons'
import { LinkInternal } from './partials/Links'
import scrollToTop from "../utilities/ScrollToTop"
import "../styles/ProjectPage.scss"

export default function ProjectPage({
  title,
  modifier,
  technologies,
  type,
  year,
  description,
  features,
  mobileImages,
  desktopImages,
  imageSets,
  links
}) {
  useEffect(() => scrollToTop())

  return (
    <section className="project">
      <div className="project__content">
        <div className="project__summary-container">
          <h2 className="project__title">{title}</h2>
          <p className="project__job-type-subtitle">{type}</p>
          <p className="project__job-year">{year}</p>
          <ul className="project__technologies">
            {
              technologies.map((technology, index) => {
                return <li key={index} className="project__technology">{technology}</li>
              })
            }
          </ul>
        </div>
        <div className="project__description-container">
          <div className="project__description-container">
            {
              description.map((description, index) => {
                return <p key={index} className="project__description" >{description}</p>
              })
            }
          </div>
          <div className="project__key-features-container">
            <p className="project__key-features-subtitle">My Role:</p>
            <ul className="project__key-features">
              {
                features.map((feature, index) => {
                  return <li key={index} className="project__key-feature">{feature}</li>
                })
              }
            </ul>
          </div>
        </div>

        {
          desktopImages ?
            <DesktopImages
              desktopImages={desktopImages}
              modifier={modifier} /> :
            null
        }


        {
          mobileImages ?
            <MobileImages
              mobileImages={mobileImages}
              modifier={modifier} /> :
            null
        }

        {
          imageSets ?
            <ImageSets imageSets={imageSets} /> :
            null
        }

        <div className='project__cta-links'>
          {
            links ?
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
  )
}


function DesktopImages({ desktopImages, modifier }) {
  return (
    <div className={`project__desktop-images project__desktop-images--${modifier ? 'spacer' : ""}`}>
      {
        desktopImages.map(({ src, alt }, index) => {
          return (
            <img
              key={index}
              className={`project__image project__image--${modifier}`}
              src={src}
              alt={alt} />
          )
        })
      }
    </div>
  )
}

function MobileImages({ mobileImages, modifier }) {
  return (
    <div className="project__mobile-images">
      {
        mobileImages.map((image, index) => {
          return (
            <img
              key={index}
              className={`project__mobile-image project__mobile-image--${modifier}`}
              src={image.src}
              alt={image.alt} />
          )
        })
      }
    </div>
  )
}

function ImageSets({ imageSets }) {
  return (
    <div className="project__image-set-container">
      {
        imageSets.map((imageSet, index) => {
          return (
            <div key={index} className={`project__image-set`}>
              {
                imageSet.map(({ src, alt, modifier }, index) => {
                  return (
                    <img
                      key={index}
                      className={`project__image-set-image project__image-set-image--${modifier}`}
                      src={src}
                      alt={alt} />
                  )
                })
              }
            </div>
          )
        })}
    </div>
  )
}