import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import github from '../assets/logos/github.svg';
import codewars from '../assets/logos/codewars.svg';
import exercism from '../assets/logos/exercism.svg';

import elementInView from '../utilities/ElementInView';

import '../styles/Navigation.scss';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSocialsOpen, setIsSocialsOpen] = useState(false)
  const [isInScrollView, setIsInScrollView] = useState('home')

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
        <div className='navigation__title-wrapper'>
          {isHomePage ?
            <h1 className='navigation__title'>Garyun Young</h1> :
            <a
              className={`navigation__title-link ${isHomePage ? '' : 'is-active'}`}
              href='/#'>
              Garyun Young</a>
          }
        </div>
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
          isInScrollView={isInScrollView}
        />
      </div>
    </header>
  );
}

function NavigationMenu({ isSocialsOpen, toggleSocials, closeNav, isInScrollView }) {
  return (
    <nav className='navigation-menu navigation__nav'>
      <ul className='navigation-menu__nav-items'>
        <span className="navigation-menu__nav-main-items">
          <NavItemLink
            link="/#projects"
            title="Projects"
            sectionId='projects'
            closeNav={() => closeNav()}
            isInScrollView={isInScrollView} />

          <NavItemLink
            link="/#about"
            title="About"
            sectionId='about'
            closeNav={() => closeNav()}
            isInScrollView={isInScrollView} />
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
          <span className={`navigation-menu__nav-socials ${isSocialsOpen ? 'is-visible' : ''}`}>
            <NavItemLinkSocial
              link="https://github.com/garyunyoung"
              title="Github"
              logoSrc={github} />

            <NavItemLinkSocial
              link="https://exercism.org/profiles/garyunyoung"
              title="Exercism"
              logoSrc={exercism} />

            <NavItemLinkSocial
              link="https://www.codewars.com/users/garryunn"
              title="Codewars"
              logoSrc={codewars} />
          </span>
        </span>
      </ul>
    </nav >
  );
}

function NavItemLink({ sectionId, title, link, closeNav, isInScrollView }) {
  return (
    <li className='navigation-menu__nav-item'>
      <a
        className={`navigation-menu__nav-item-link ${isInScrollView === sectionId ? 'is-active' : ""}`}
        href={link}
        onClick={() => closeNav()}
      >{title}</a>
    </li>
  )
}

function NavItemLinkSocial({ title, link, logoSrc }) {
  return (
    <li>
      <a
        className="navigation-menu__nav-item-link-social"
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <p className="navigation-menu__nav-item-text-social">{title}</p>
        <img src={logoSrc} alt="" />
      </a>
    </li>
  )
}

