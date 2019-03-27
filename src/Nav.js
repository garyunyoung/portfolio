import React from "react";
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import Projects from './Projects';
import About from './About';
import "./Nav.scss";

export default class Nav extends React.Component {
  render() {
    return (
      <Router>
        <section>
          <div className="nav">
            <NavLink className="nav__item" to="/projects">projects</NavLink>
            <NavLink className="nav__item" to="/about">about</NavLink>
          </div>

          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />

        </section>
      </Router>
    );
  }
}
