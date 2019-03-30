import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Home from './Home';
import Nav from "./Nav";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <section className="App">
          <Route path="/" component={Home}/>
          <div className="sticky">
            <header className="header">
              <section className="header__wrapper">
                <NavLink className="header__title" to="/projects">
                  garyun
                </NavLink>
                <div className="hamburger">
                  <div className="hamburger__line hamburger__line--1" />
                  <div className="hamburger__line hamburger__line--2" />
                  <div className="hamburger__line hamburger__line--3" />
                </div>
              </section>
            </header>
          </div>
          <section className="main" />
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About} />
        </section>
      </Router>
    );
  }
}

{
  /* <Route path="/projects" />
<Route path="/projects" component={Projects} /> */
}
