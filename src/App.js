import React, { Component } from "react";
import Nav from "./Nav";
import Projects from "./Project";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <section className="App">
        <section className="header">
          <h1 className="header__title">garyun young</h1>
          <Nav />
        </section>
        <section className="projects">
          <h1 className="projects__title subheading">projects</h1>
          <ul className="projects__nav">
            <li className="projects__nav__item">
              web development
            </li>
            <li className="projects__nav__item">publicity / pr</li>
          </ul>
          <Projects />
        </section>
        <section className="about">
        <h1 className="about__title">about</h1>
        </section>
      </section>
    );
  }
}
