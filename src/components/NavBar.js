import React, { useState } from 'react';
import githubLogo from '../images/github-logo.svg';
import codewarsLogo from '../images/codewars-logo.svg';
import '../stylesheets/NavBar.scss';

export default function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleNav() {
    setIsOpen(prevState => !prevState)
  }

  function closeNav() {
    setIsOpen(false)
  }

  return (
    <header className={`site-header ${isOpen ? 'is-open' : ''}`}>
      <div className='site-header__content'>
        <div className='site-header__title-wrapper'>
          {props.link === '/#' ?
            <h1 className='site-header__title'>Garyun Young</h1> :
            <a className={`site-header__title-link ${props.link === '/#' ? '' : 'is-active'}`} href='/#'>Garyun Young</a>
          }
        </div>
        <button
          className='site-header__mobile-menu-button'
          onClick={() => toggleNav()}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <NavMenu closeNav={() => closeNav()} />
      </div>
    </header>
  );
}

function NavMenu(props) {
  return (
    <nav className='site-menu site-header__nav'>
      {/* toggle aria label */}
      <ul className='site-menu__nav-items'>
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
        <span className='site-menu__nav-socials'>
          <li className='site-menu__nav-item'>
            <a
              href='https://www.codewars.com/users/garryunn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={codewarsLogo} alt='' />
            </a>
          </li>
          <li className='site-menu__nav-item'>
            <a
              href='https://github.com/garyunyoung'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={githubLogo} alt='' />
            </a>
          </li>
        </span>
      </ul>
    </nav>
  );
}
