import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home">
      <section className="home__top">
        <h1 className="home__hello">
          he
          <br />
          llo
        </h1>
        <h1 className="home__garyun">i'm garyun</h1>
      </section>
      <section className="home__mid">
        <h1 className="home__front">
          front end <br />
          developer
        </h1>
        <h1 className="home__london">london,uk</h1>
      </section>
      <section className="home__bottom">
        <NavLink className="home__nav home__nav--projects" to="/projects">
          projects
        </NavLink>
        <NavLink className="home__nav home__nav--about" to="/about">
          about
        </NavLink>
        <NavLink className="home__nav home__nav--cv" to="/projects">
          cv
        </NavLink>
      </section>
    </section>
  );
}
