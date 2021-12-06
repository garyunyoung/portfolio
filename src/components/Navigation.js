import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import githubLogo from '../assets/logos/github.svg';
import codewarsLogo from '../assets/logos/codewars.svg';
import exercismLogo from '../assets/logos/exercism.svg';

import elementInView from "../utilities/elementInView";

import '../styles/Navigation.scss';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSocialsOpen, setIsSocialsOpen] = useState(false)

  const isHome = useLocation().pathname === '/'

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
    if (isHome) {
      elementInView()
    }
  })

  return (
    <header className={`site-header ${isOpen ? 'is-open' : ''}`}>
      <div className='site-header__content'>
        <div className='site-header__title-wrapper'>
          {isHome ?
            <h1 className='site-header__title'>Garyun Young</h1> :
            <a className={`site-header__title-link ${isHome ? '' : 'is-active'}`} href='/#'>Garyun Young</a>
          }
        </div>
        <button
          className='site-header__mobile-menu-button'
          onClick={() => toggleNav()}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <NavMenu
          isSocialsOpen={isSocialsOpen}
          toggleSocials={() => toggleSocials()}
          closeNav={() => closeNav()} />
      </div>
    </header>
  );
}

function NavMenu(props) {
  return (
    <nav className='site-menu site-header__nav'>
      <ul className='site-menu__nav-items'>
        <span className="site-menu__nav-main-items">
          <li className='site-menu__nav-item'>
            <a className='site-menu__nav-item-link site-menu__nav-item-link--projects' href='/#projects' onClick={props.closeNav}>
              Projects
            </a>
          </li>
          <li className='site-menu__nav-item'>
            <a className='site-menu__nav-item-link site-menu__nav-item-link--about' href='/#about' onClick={props.closeNav}>
              About
            </a>
          </li>
        </span>
        <span className='site-menu__nav-socials-container'>
          <li
            onClick={props.toggleSocials}
          >
            <button className={`
              site-menu__nav-item-link 
              site-menu__nav-item-link--socials 
              ${props.isSocialsOpen ? 'is-selected is-active' : ''}
            `}>
              Code
            </button>
          </li>
          <span className={`site-menu__nav-socials ${props.isSocialsOpen ? 'is-visible' : ''}`}>
            <li>
              <a
                className='site-menu__nav-item-link-social'
                href='https://github.com/garyunyoung'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className="site-menu__nav-item-text-social">Github</p>
                <img src={githubLogo} alt='' />
              </a>
            </li>
            <li>
              <a
                className='site-menu__nav-item-link-social'
                href='https://exercism.org/profiles/garyunyoung'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className="site-menu__nav-item-text-social">Exercism</p>
                <img src={exercismLogo} alt='' />
              </a>
            </li>
            <li>
              <a
                className='site-menu__nav-item-link-social'
                href='https://www.codewars.com/users/garryunn'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className="site-menu__nav-item-text-social">Codewars</p>
                <img src={codewarsLogo} alt='' />
              </a>
            </li>
          </span>
        </span>
      </ul>
    </nav>
  );
}