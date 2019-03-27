import React, { Component } from "react";
import Nav from "./Nav";
import Project from "./Project";
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
          <h1 className="projects__title">projects</h1>
          <Project />
          <Project />
          <Project />
        </section>
      </section>
    );
  }
}
