import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export default class Nav extends React.Component {
  render() {
    return (
      <header className="header">
        <section className="header__wrapper">
          <NavLink className="header__title" to="/">
            {this.props.title}
          </NavLink>
          <div className="hamburger">
            <div className="hamburger__line hamburger__line--1" />
            <div className="hamburger__line hamburger__line--2" />
            <div className="hamburger__line hamburger__line--3" />
          </div>
        </section>
      </header>
    );
  }
}
