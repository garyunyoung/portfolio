import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import githubLogo from '../assets/logos/github.svg';
import codewarsLogo from '../assets/logos/codewars.svg';
import exercismLogo from '../assets/logos/exercism.svg';


import '../styles/Navigation.scss';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSocialsOpen, setIsSocialsOpen] = useState(false)
  const [isInScrollView, setIsInScrollView] = useState('home')

  const isHomePage = useLocation().pathname === '/'

  function toggleNav() {
    setIsOpen(prevState => !prevState)
  }

  function closeNav() {
    setIsOpen(false)
  }

  function toggleSocials() {
    setIsSocialsOpen(prevState => !prevState)
  }

  useEffect(() => {
    if (isHomePage) {
      elementInView(setIsInScrollView)
    }
  })

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
          toggleSocials={() => toggleSocials()}
          closeNav={() => closeNav()}
          isInScrollView={isInScrollView}
        />
      </div>
    </header>
  );
}

function NavigationMenu(props) {
  return (
    <nav className='navigation-menu navigation__nav'>
      <ul className='navigation-menu__nav-items'>
        <span className="navigation-menu__nav-main-items">
          <li className='navigation-menu__nav-item'>
            <a className={`navigation-menu__nav-item-link ${props.isInScrollView === 'projects' ? 'is-active' : ""}`} href='/#projects' onClick={props.closeNav}>
              Projects
            </a>
          </li>
          <li className='navigation-menu__nav-item'>
            <a className={`navigation-menu__nav-item-link ${props.isInScrollView === 'about' ? 'is-active' : ""}`} href='/#about' onClick={props.closeNav}>
              About
            </a>
          </li>
        </span>
        <span className='navigation-menu__nav-socials-container'>
          <li
            onClick={props.toggleSocials}
          >
            <button className={`
              navigation-menu__nav-item-link 
              navigation-menu__nav-item-link--socials 
              ${props.isSocialsOpen ? 'is-selected is-active' : ''}
            `}>
              Code
            </button>
          </li>
          <span className={`navigation-menu__nav-socials ${props.isSocialsOpen ? 'is-visible' : ''}`}>
            <li>
              <NavItemLinkSocial
                link="https://github.com/garyunyoung"
                title="Github"
                image={githubLogo} />
            </li>
            <li>
              <NavItemLinkSocial
                link="https://exercism.org/profiles/garyunyoung"
                title="Exercism"
                image={exercismLogo} />

            </li>
            <li>
              <NavItemLinkSocial
                link="https://www.codewars.com/users/garryunn"
                title="Codewars"
                image={codewarsLogo} />
            </li>
          </span>
        </span>
      </ul>
    </nav >
  );
}

function NavItemLinkSocial(props) {
  return (
    <a
      className="navigation-menu__nav-item-link-social"
      href={props.link}
      target='_blank'
      rel='noopener noreferrer'
    >
      <p className="navigation-menu__nav-item-text-social">{props.title}</p>
      <img src={props.image} alt='' />
    </a>
  )
}


function elementInView(setIsInScrollView) {
  const projects = document.querySelector('#projects')
  const about = document.querySelector('#about')

  if (projects && about) {
    const projectsPos = projects.getBoundingClientRect().top + window.scrollY
    const aboutPos = about.getBoundingClientRect().top + window.scrollY

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY

      if (scrolled < projectsPos) {
        setIsInScrollView('home')
      } else if (scrolled > aboutPos) {
        setIsInScrollView('about')
      } else {
        setIsInScrollView('projects')
      }
    })
  }
}