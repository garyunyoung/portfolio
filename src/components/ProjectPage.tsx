import React, { useEffect, ReactElement } from 'react'

import {
  LinkInternal,
  LinkExternal
} from './partials/Links'
import scrollToTop from '../utilities/ScrollToTop'

import '../styles/ProjectPage.scss'

interface Link {
  href: string
  text: string
}

interface Image {
  src: string
  alt: string
}

interface Images {
  className: string
  images: Image[]
}

interface ImageSet {
  src: string
  modifier: 'mobile' | 'tablet' | 'desktop'
  alt: string
}

interface Props {
  title: string
  type: string
  year: string
  technologies: string[]
  description: string[]
  features: string[]
  links: Link[]
  desktopImages: Image[]
  mobileImages: Image[]
  imageSets: ImageSet[]
}

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
}: Props): ReactElement {
  useEffect(() => scrollToTop())

  return (
    <section className="project">
      <div className="project__content">
        <div className="project__content-top">
          <h2 className="project__title">{title}</h2>
          <p className="project__type">{type}</p>
          <p className="project__year">{year}</p>
          <ul className="project__technologies">
            {technologies.map((technology, index) => {
              return (
                <li
                  key={index}
                  className="project__technology"
                >
                  {technology}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="project__content-middle">
          <div className="project__descriptions">
            {description.map((description, index) => {
              return (
                <p
                  key={index}
                  className="project__description"
                >
                  {description}
                </p>
              )
            })}
          </div>
          <div>
            <p className="project__my-role">My Role:</p>
            <ul className="project__features">
              {features.map((feature, index) => {
                return (
                  <li
                    key={index}
                    className="project__feature"
                  >
                    {feature}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {desktopImages ? (
          <ProjectImages
            className="desktop-images"
            images={desktopImages}
          />
        ) : null}

        {mobileImages ? (
          <ProjectImages
            className="mobile-images"
            images={mobileImages}
          />
        ) : null}

        {imageSets ? (
          <ProjectImageSets imageSets={imageSets} />
        ) : null}

        <div className="project__buttons">
          <div className="project__primary-buttons">
            {links
              ? links.map(
                  ({ href, text }: Link, index: number) => {
                    return (
                      <LinkExternal
                        key={index}
                        className="project__primary-button"
                        type="button"
                        href={href}
                        text={text}
                      />
                    )
                  }
                )
              : null}
          </div>
        </div>
        <LinkInternal
          className="project__back is-active"
          type="link-button"
          href="/#projects"
          text="Back to projects"
        />
      </div>
    </section>
  )
}

function ProjectImages({ className, images }: Images) {
  return (
    <div className={className}>
      {images.map(({ src, alt }: Image, index: number) => {
        return (
          <img
            key={index}
            className={`${className}__image`}
            src={src}
            alt={alt}
          />
        )
      })}
    </div>
  )
}

// TO DO: imagesets type
function ProjectImageSets({ imageSets }: any) {
  return (
    <React.Fragment>
      {imageSets.map(
        (imageSet: ImageSet[], index: number) => {
          return (
            <div key={index} className="image-set">
              {imageSet.map(
                (
                  { src, alt, modifier }: ImageSet,
                  index: number
                ) => {
                  return (
                    <img
                      key={index}
                      className={`image-set__image image-set__image--${modifier}`}
                      src={src}
                      alt={alt}
                    />
                  )
                }
              )}
            </div>
          )
        }
      )}
    </React.Fragment>
  )
}
