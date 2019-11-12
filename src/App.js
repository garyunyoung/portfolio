import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hamburger from "./components/Hamburger";
import Projects from "./Projects";
import About from "./About";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <section className="App">
          <Hamburger />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              render={() => (
                <React.Fragment>
                  <Route path="/projects" component={Projects} />
                  <Route path="/about" component={About} />
                </React.Fragment>
              )}
            />
          </Switch>
        </section>
      </Router>
    );
  }
}
