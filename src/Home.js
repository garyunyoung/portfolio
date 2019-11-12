import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./components/Hamburger";
import "./stylesheets/Home.scss";

export default function Home() {
  return (
    <section className="home">
      <Hamburger />
      <section className="home__body">
        <NavLink className="home__nav home__nav--projects" to="/projects">
          projects />
        </NavLink>
      </section>
    </section>
  );
}
