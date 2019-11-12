import React from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import codeWars from "../images/codewars-logo.svg";
import "../stylesheets/Nav.scss";

export default function Nav(props) {
  return (
    <section className={`nav ${props.open ? "nav--open" : ""} `}>
      <NavLink className="nav__link" to="/">
        <Header title="garyun" />
      </NavLink>
      <div className="nav__wrapper">
        <NavLink className="nav__link" to="/projects">
          -projects-
        </NavLink>
        <NavLink className="nav__link" to="/about">
          -about-
        </NavLink>
        <NavLink className="nav__link" to="/">
          -cv-
        </NavLink>
      </div>
      <section className="socials__wrapper">
        <a
          className="socials__link socials__link--github"
          href="https://github.com/garyunyoung"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          className="socials__link socials__link--envelope"
          href="mailto:garyunyoung@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="envelope far fa-envelope" />
        </a>
        <a
          className="socials__link socials__link--codewars"
          href="https://www.codewars.com/users/gyou/completed_solutions"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={codeWars} />
        </a>
      </section>
    </section>
  );
}
