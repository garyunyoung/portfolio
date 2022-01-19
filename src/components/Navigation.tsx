import { useState, useEffect, ReactElement } from 'react'
import { useLocation } from 'react-router-dom'

import { LinkInternal } from './partials/Links'

import github from '../assets/logos/github.svg'
import codewars from '../assets/logos/codewars.svg'
import exercism from '../assets/logos/exercism.svg'

import elementInView from '../utilities/ElementInView'

import '../styles/Navigation.scss'

interface NavigationMenuProps {
  isSocialsOpen: boolean
  toggleSocials: () => any
  closeNav: () => any
  isInView: string
}

interface LogoProps {
  isHomePage: boolean
}

interface NavItemLinkProps {
  id: string
  text: string
  href: string
  closeNav: () => any
  isInView: string
}

interface NavItemLinkSocialProps {
  text: string
  href: string
  logoSrc: string
}
export default function Navigation(): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isSocialsOpen, setIsSocialsOpen] =
    useState<boolean>(false)
  const [isInView, setIsInScrollView] =
    useState<string>('home')

  const isHomePage: boolean = useLocation().pathname === '/'

  useEffect(() => {
    if (isHomePage) {
      elementInView(setIsInScrollView)
    }
  }, [isHomePage])

  function toggleNav() {
    setIsOpen((prevState) => !prevState)
  }

  function closeNav() {
    setIsOpen(false)
  }

  function toggleSocials() {
    setIsSocialsOpen((prevState) => !prevState)
  }

  return (
    <header
      className={`navigation ${isOpen ? 'is-open' : ''}`}
    >
      <div className="navigation__content">
        <Logo isHomePage={isHomePage} />
        <button
          className="navigation__mobile-menu-button"
          onClick={() => toggleNav()}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <NavigationMenu
          isSocialsOpen={isSocialsOpen}
          toggleSocials={toggleSocials}
          closeNav={closeNav}
          isInView={isInView}
        />
      </div>
    </header>
  )
}

function NavigationMenu({
  isSocialsOpen,
  toggleSocials,
  closeNav,
  isInView
}: NavigationMenuProps): ReactElement {
  return (
    <nav className="navigation-menu navigation__nav">
      <ul className="navigation-menu__nav-items">
        <span className="navigation-menu__nav-main-items">
          <NavItemLink
            text="Projects"
            href="/#projects"
            id="projects"
            closeNav={() => closeNav()}
            isInView={isInView}
          />

          <NavItemLink
            text="About"
            href="/#about"
            id="about"
            closeNav={() => closeNav()}
            isInView={isInView}
          />
        </span>
        <span className="navigation-menu__nav-code-container">
          <li onClick={() => toggleSocials()}>
            <button
              className={`
              navigation-menu__nav-item-link 
              navigation-menu__nav-item-link--socials 
              ${
                isSocialsOpen ? 'is-selected is-active' : ''
              }
            `}
            >
              Code
            </button>
          </li>
          <span
            data-testid="nav-socials"
            className={`navigation-menu__nav-socials ${
              isSocialsOpen ? 'is-visible' : ''
            }`}
          >
            <NavItemLinkSocial
              href="https://github.com/garyunyoung"
              text="Github"
              logoSrc={github}
            />

            <NavItemLinkSocial
              href="https://exercism.org/profiles/garyunyoung"
              text="Exercism"
              logoSrc={exercism}
            />

            <NavItemLinkSocial
              href="https://www.codewars.com/users/garryunn"
              text="Codewars"
              logoSrc={codewars}
            />
          </span>
        </span>
      </ul>
    </nav>
  )
}

export function Logo({
  isHomePage
}: LogoProps): ReactElement {
  return (
    <div className="navigation__logo-wrapper">
      {isHomePage ? (
        <h1 className="navigation__logo">Garyun Young</h1>
      ) : (
        <LinkInternal
          className={`navigation__logo-link ${
            isHomePage ? '' : 'is-active'
          }`}
          type="link-button"
          href="/#"
          text="Garyun Young"
        />
      )}
    </div>
  )
}
function NavItemLink({
  id,
  text,
  href,
  closeNav,
  isInView
}: NavItemLinkProps): ReactElement {
  return (
    <li className="navigation-menu__nav-item">
      <a
        className={`navigation-menu__nav-item-link ${
          isInView === id ? 'is-active' : ''
        }`}
        href={href}
        onClick={() => closeNav()}
      >
        {text}
      </a>
    </li>
  )
}

function NavItemLinkSocial({
  text,
  href,
  logoSrc
}: NavItemLinkSocialProps): ReactElement {
  return (
    <li>
      <a
        className="navigation-menu__nav-item-link-social"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="navigation-menu__nav-item-text-social">
          {text}
        </p>
        <img src={logoSrc} alt="" />
      </a>
    </li>
  )
}
