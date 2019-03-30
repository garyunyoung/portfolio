import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <section className="App">
          <Switch>
            <Route path="/" exact component={Nav} />
            <Route render={() => 
            (
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
