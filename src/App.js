import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Nav from "./Nav";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <section className="App">
          <div className="sticky">
            <section className="header">
              <NavLink className="header__title" to="/projects">
                garyun young
              </NavLink>
              <Nav />
            </section>
          </div>
          <section className="main" />
          <Route path="/projects" />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </section>
      </Router>
    );
  }
}
