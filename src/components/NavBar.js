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
          <NavLink
            to="/"
            onClick={() => this.closeNav()}
          >{`< GARYUN YOUNG />`}</NavLink>
        </h2>
        <div className="menu-desktop">
          <ul className="menu-desktop__items">
            <li className="menu-desktop__item">
              <NavLink to="/projects" onClick={() => this.closeNav()}>
                Projects
              </NavLink>
            </li>
            <li className="menu-desktop__item">
              <NavLink to="/about" onClick={() => this.closeNav()}>
                Contact
              </NavLink>
            </li>
            <li className="menu-desktop__item">
              <NavLink to="/" onClick={() => this.closeNav()}>
                ... />
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className={`hamburger ${this.state.isOpen ? "hamburger--open" : ""}`}
          onClick={() => this.toggleNav()}
        >
          <div className="hamburger__line" />
        </div>
        <NavMenu open={this.state.isOpen} />
      </div>
    );
  }
}

function NavMenu(props) {
  return (
    <nav className={`menu ${props.open ? "menu--open" : ""}`}>
      <ul className="menu__items">
        <li>
          <NavLink
            className="menu__item"
            to="/projects"
            onClick={() => this.closeNav()}
          >
            Projects />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="menu__item"
            to="/about"
            onClick={() => this.closeNav()}
          >
            Contact />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="menu__item"
            to="/"
            onClick={() => this.closeNav()}
          >
            ... />
          </NavLink>
        </li>
        <li>
          <a
            className="menu__item menu__item--github"
            href="https://github.com/garyunyoung"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
