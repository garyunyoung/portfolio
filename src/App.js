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
            <header className="header">
              <NavLink className="header__title" to="/projects">
                garyun
              </NavLink>
            </header>
          </div>
          <Nav />
          <section className="main" />
          <Route path="/projects" />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </section>
        <footer className="footer">
          <i className="footer__social fab fa-github" />
          <i className="footer__social far fa-envelope" />
        </footer>
      </Router>
    );
  }
}
