import React from "react";
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
        className={`site-header ${
          this.state.isOpen ? "site-header--display-mobile-nav" : ""
        }`}
      >
        <span className="site-header__logo-wrapper">
          <a
            className="site-header__logo"
            href={this.props.link}
            onClick={() => this.closeNav()}
          >
            {this.props.title}
          </a>
        </span>
        <button
          className="site-header__mobile-menu-button"
          onClick={() => this.toggleNav()}
        >
          MENU
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
        <li className="site-menu__nav-item site-menu__nav-item--github">
          <a
            href="https://github.com/garyunyoung"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
      </ul>
    </nav>
  );
}
