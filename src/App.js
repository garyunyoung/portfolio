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
              <div className="header__wrapper">
                <NavLink className="header__title" to="/projects">
                  garyun
                </NavLink>
                <div className="hamburger">
                  <div className="hamburger__line hamburger__line--1" />
                  <div className="hamburger__line hamburger__line--2" />
                  <div className="hamburger__line hamburger__line--3" />
                </div>
              </div>
            </header>
          </div>
          <section className="main" />
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

{/* <Route path="/projects" />
<Route path="/projects" component={Projects} /> */}
