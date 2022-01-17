import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import { LinkInternal } from './partials/Links'

import github from '../assets/logos/github.svg';
import codewars from '../assets/logos/codewars.svg';
import exercism from '../assets/logos/exercism.svg';

import elementInView from '../utilities/ElementInView';

import '../styles/Navigation.scss';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSocialsOpen, setIsSocialsOpen] = useState(false)
  const [isInView, setIsInScrollView] = useState('home')

  const isHomePage = useLocation().pathname === '/'

  useEffect(() => {
    if (isHomePage) {
      elementInView(setIsInScrollView)
    }
  }, [isHomePage])

  function toggleNav() {
    setIsOpen(prevState => !prevState)
  }

  function closeNav() {
    setIsOpen(false)
  }

  function toggleSocials() {
    setIsSocialsOpen(prevState => !prevState)
  }

  return (
    <header className={`navigation ${isOpen ? 'is-open' : ''}`}>
      <div className='navigation__content'>
        <Logo isHomePage={isHomePage} />
        <button
          className='navigation__mobile-menu-button'
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
  );
}

function NavigationMenu({ isSocialsOpen, toggleSocials, closeNav, isInView }) {
  return (
    <nav className='navigation-menu navigation__nav'>
      <ul className='navigation-menu__nav-items'>
        <span className="navigation-menu__nav-main-items">
          <NavItemLink
            text="Projects"
            href="/#projects"
            id='projects'
            closeNav={() => closeNav()}
            isInView={isInView} />

          <NavItemLink
            text="About"
            href="/#about"
            id='about'
            closeNav={() => closeNav()}
            isInView={isInView} />
        </span>
        <span className='navigation-menu__nav-code-container'>
          <li
            onClick={() => toggleSocials()}
          >
            <button className={`
              navigation-menu__nav-item-link 
              navigation-menu__nav-item-link--socials 
              ${isSocialsOpen ? 'is-selected is-active' : ''}
            `}>
              Code
            </button>
          </li>
          <span data-testid="nav-socials" className={`navigation-menu__nav-socials ${isSocialsOpen ? 'is-visible' : ''}`}>
            <NavItemLinkSocial
              link="https://github.com/garyunyoung"
              text="Github"
              logoSrc={github} />

            <NavItemLinkSocial
              link="https://exercism.org/profiles/garyunyoung"
              text="Exercism"
              logoSrc={exercism} />

            <NavItemLinkSocial
              link="https://www.codewars.com/users/garryunn"
              text="Codewars"
              logoSrc={codewars} />
          </span>
        </span>
      </ul>
    </nav >
  );
}

export function Logo({ isHomePage }) {
  return (
    <div className='navigation__logo-wrapper'>
      {
        isHomePage ?
          <h1 className='navigation__logo'>Garyun Young</h1> :
          <LinkInternal
            className={`navigation__logo-link ${isHomePage ? '' : 'is-active'}`}
            type="link-button"
            href="/#"
            text="Garyun Young" />
      }
    </div >
  )
}
function NavItemLink({ id, text, href, closeNav, isInView }) {
  return (
    <li className='navigation-menu__nav-item'>
      <a
        className={`navigation-menu__nav-item-link ${isInView === id ? 'is-active' : ""}`}
        href={href}
        onClick={() => closeNav()}
      >{text}</a>
    </li>
  )
}

function NavItemLinkSocial({ text, href, logoSrc }) {
  return (
    <li>
      <a
        className="navigation-menu__nav-item-link-social"
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        <p className="navigation-menu__nav-item-text-social">{text}</p>
        <img src={logoSrc} alt="" />
      </a>
    </li>
  )
}

