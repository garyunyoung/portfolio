import React, { useEffect } from "react"
import { ButtonExternal } from './partials/Buttons'
import { LinkInternal } from './partials/Links'
import scrollToTop from "../utilities/ScrollToTop"
import "../styles/ProjectPage.scss"

export default function ProjectPage({
  title,
  type,
  year,
  technologies,
  description,
  features,
  desktopImages,
  mobileImages,
  imageSets,
  links
}) {
  useEffect(() => scrollToTop())
  console.log(title)

  return (
    <section className="project">
      <div className="project__content">
        <div className="project__content-top">
          <h2 className="project__title">{title}</h2>
          <p className="project__type">{type}</p>
          <p className="project__year">{year}</p>
          <ul className="project__technologies">
            {
              technologies.map((technology, index) => {
                return <li key={index} className="project__technology">{technology}</li>
              })
            }
          </ul>
        </div>
        <div className="project__content-middle">
          <div className="project__descriptions">
            {
              description.map((description, index) => {
                return <p key={index} className="project__description" >{description}</p>
              })
            }
          </div>
          <div>
            <p className="project__my-role">My Role:</p>
            <ul className="project__features">
              {
                features.map((feature, index) => {
                  return <li key={index} className="project__feature">{feature}</li>
                })
              }
            </ul>
          </div>
        </div>

        {
          desktopImages ?
            <Images className='desktop-images' images={desktopImages} /> :
            null
        }


        {
          mobileImages ?
            <Images className='mobile-images' images={mobileImages} /> :
            null
        }

        {
          imageSets ?
            <ImageSets imageSets={imageSets} /> :
            null
        }

        <div className='project__buttons'>
          <div className='project__primary-buttons'>
            {
              links ?
                links.map((link, index) => {
                  return (
                    <ButtonExternal
                      key={index}
                      className="project__primary-button"
                      link={link.url}
                      title={link.text} />
                  )
                }) : null
            }
          </div>
        </div>
        <LinkInternal
          className="project__back is-active"
          link="/#projects"
          title="Back to projects" />
      </div>
    </section >
  )
}


function Images({ className, images }) {
  return (
    <div className={className}>
      {
        images.map(({ src, alt }, index) => {
          return (
            <img
              key={index}
              className={`${className}__image`}
              src={src}
              alt={alt} />
          )
        })
      }
    </div>
  )
}

function ImageSets({ imageSets }) {
  return (
    <React.Fragment>
      {
        imageSets.map((imageSet, index) => {
          return (
            <div
              key={index}
              className='image-set'>
              {
                imageSet.map(({ src, alt, modifier }, index) => {
                  return (
                    <img
                      key={index}
                      className={`image-set__image image-set__image--${modifier}`}
                      src={src}
                      alt={alt} />
                  )
                })
              }
            </div>
          )
        })}
    </React.Fragment>
  )
}