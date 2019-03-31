import React from "react";
import { NavLink } from "react-router-dom";
import codeWars from "./images/codewars-logo.svg";
import "./Nav.scss";

export default function Nav(props) {
  return (
    <section className={`nav ${props.open ? "nav--open" : ""} `}>
      <section className="nav__container">
        <div className="nav__wrapper">
          <NavLink className="nav__link nav__link--projects" to="/projects">
            -projects-
          </NavLink>
          <NavLink className="nav__link nav__link--projects" to="/about">
            -about-
          </NavLink>
          <NavLink className="nav__link nav__link--projects" to="/">
            -cv-
          </NavLink>
        </div>
        <section className="socials">
          <i className="socials__link socials__link--github fab fa-github" />
          <i className="socials__link socials__link--envelope envelope far fa-envelope" />
          <img
            className="socials__link socials__link--codewars"
            src={codeWars}
          />
        </section>
      </section>
    </section>
  );
}
