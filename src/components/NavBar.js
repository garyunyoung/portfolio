import React from 'react';
import githubLogo from '../images/github-logo.svg';
import codewarsLogo from '../images/codewars-logo.svg';
import '../stylesheets/NavBar.scss';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleNav() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  closeNav() {
    this.setState(() => ({
      isOpen: false
    }));
  }

  render() {
    return (
      <header className={`site-header ${this.state.isOpen ? 'is-open' : ''}`}>
        <div className='site-header__content'>
          <div className='site-header__title-wrapper'>
            <h1 className='site-header__title'>Garyun Young</h1>
          </div>
          <button
            className='site-header__mobile-menu-button'
            onClick={() => this.toggleNav()}
          >
            {this.state.isOpen ? 'CLOSE' : 'MENU'}
          </button>
          <NavMenu open={this.state.isOpen} closeNav={() => this.closeNav()} />
        </div>
      </header>
    );
  }
}

function NavMenu(props) {
  return (
    <nav className='site-menu site-header__nav'>
      {/* toggle aria label */}
      <ul className='site-menu__nav-items'>
        <li className='site-menu__nav-item'>
          <a href='/#projects' onClick={() => props.closeNav()}>
            projects
          </a>
        </li>
        <li className='site-menu__nav-item'>
          <a href='/#about' onClick={() => props.closeNav()}>
            about
          </a>
        </li>
        <span className='site-menu__nav-socials'>
          <li className='site-menu__nav-item'>
            <a
              href='https://www.codewars.com/users/garryunn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={codewarsLogo} />
            </a>
          </li>
          <li className='site-menu__nav-item'>
            <a
              href='https://github.com/garyunyoung'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={githubLogo} />
            </a>
          </li>
        </span>
      </ul>
    </nav>
  );
}
