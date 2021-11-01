import React from "react";
import githubLogo from "../images/github-logo.svg";
import codewarsLogo from "../images/codewars-logo.svg";
import "../stylesheets/NavBar.scss";

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
      <header
        className={`site-header ${this.state.isOpen ? "site-header--display-mobile-nav" : ""
          }`}
      >
        <span className="site-header__logo-wrapper">
          <a
            className="site-header__logo"
            href={this.props.link}
            onClick={() => this.closeNav()}
          >
            <h1 className="site-header__title">GARYUN YOUNG</h1>
            <p className="site-header__description">front-end developer</p>
          </a>
        </span>
        <button
          className="site-header__mobile-menu-button"
          onClick={() => this.toggleNav()}
        >
          {this.state.isOpen ? 'CLOSE' : 'MENU'}
          <span className="site-header__mobile-menu-text"></span>
          <span className="site-header__mobile-menu-bar"></span>
        </button>
        <NavMenu open={this.state.isOpen} closeNav={() => this.closeNav()} />
      </header>
    );
  }
}

function NavMenu(props) {
  return (
    <nav className="site-menu site-header__nav">
      {/* toggle aria label */}
      <ul className="site-menu__nav-items">
        <li className="site-menu__nav-item">
          <a href="/#projects" onClick={() => props.closeNav()}>
            Projects
          </a>
        </li>
        <li className="site-menu__nav-item">
          <a href="/#about" onClick={() => props.closeNav()}>
            Me
          </a>
        </li>
        <span className="site-menu__nav-socials">
          <li className="site-menu__nav-item">
            <a
              href="https://www.codewars.com/users/garryunn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={codewarsLogo} />
            </a>
          </li>
          <li className="site-menu__nav-item">
            <a
              href="https://github.com/garyunyoung"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} />
            </a>
          </li>
        </span>
      </ul>
    </nav>
  );
}
