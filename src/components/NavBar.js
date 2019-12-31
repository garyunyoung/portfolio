import React from "react";
import { NavLink } from "react-router-dom";
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
      <div className="nav">
        <h2 className="nav__logo">
          <a href={this.props.link} onClick={() => this.closeNav()}>
            {this.props.title}
          </a>
        </h2>
        <div className="menu-desktop">
          <ul className="menu-desktop__items">
            <li className="menu-desktop__item">
              <a href="/#projects" onClick={() => this.closeNav()}>
                Projects
              </a>
            </li>
            <li className="menu-desktop__item">
              <a href="/#about" onClick={() => this.closeNav()}>
                Me
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`hamburger ${this.state.isOpen ? "hamburger--open" : ""}`}
          onClick={() => this.toggleNav()}
        >
          <p className="hamburger__menu-text">MENU //</p>
          <p className="hamburger__menu-text hamburger__menu-text--close">MENU X</p>
          <NavMenu open={this.state.isOpen} closeNav={() => this.closeNav()} />
        </div>
      </div>
    );
  }
}

function NavMenu(props) {
  return (
    <nav className={`menu ${props.open ? "menu--open" : ""}`}>
      <ul className="menu__items">
        <li>
          <a
            className="menu__item"
            href="/#projects"
            onClick={() => props.closeNav()}
          >
            Projects />
          </a>
        </li>
        <li>
          <a
            className="menu__item"
            href="/#about"
            onClick={() => props.closeNav()}
          >
            Me />
          </a>
        </li>
        <li>
          <a
            className="menu__item menu__item--github"
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
