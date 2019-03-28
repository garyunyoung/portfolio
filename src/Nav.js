import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <NavLink className="nav__item" to="/projects">
          projects
        </NavLink>
        <NavLink className="nav__item" to="/about">
          about
        </NavLink>
        <NavLink className="nav__item" to="/about">
          cv
        </NavLink>
      </div>
    );
  }
}
