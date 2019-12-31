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
      <header className={`nav ${this.state.isOpen ? "nav--open" : ""}`}>
        <span className="nav__logo-wrapper">
          <a
            className="nav__logo"
            href={this.props.link}
            onClick={() => this.closeNav()}
          >
            {this.props.title}
          </a>
        </span>
        <button
          className={`hamburger ${this.state.isOpen ? "hamburger--open" : ""}`}
          onClick={() => this.toggleNav()}
        >
          MENU
          <span className="hamburger__menu-text"></span>
          <span className="hamburger__menu-bar"></span>
        </button>
        <NavMenu open={this.state.isOpen} closeNav={() => this.closeNav()} />
      </header>
    );
  }
}

function NavMenu(props) {
  return (
    <nav className={`nav__menu`}>
      {/* toggle aria label */}
      <ul className="nav__menu-items">
        <li className="nav__menu-item">
          <a href="/#projects" onClick={() => props.closeNav()}>
            Projects
          </a>
        </li>
        <li className="nav__menu-item">
          <a href="/#about" onClick={() => props.closeNav()}>
            Me
          </a>
        </li>
        <li className="nav__menu-item nav__menu-item--github">
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
