import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Stitched, TheBeths, WaldourStudios } from "./Projects";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <section className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              render={() => (
                <React.Fragment>
                  <Route
                    // path={`/projects/${stitchedProject.path}`}
                    path={`/projects/stitched`}
                    component={Stitched}
                  />
                  <Route
                    // path={`/projects/${bethsProject.path}`}
                    path={`/projects/the-beths`}
                    component={TheBeths}
                  />
                  <Route
                    // path={`/projects/${waldourStudiosProject.path}`}
                    path={`/projects/waldour-studio`}
                    component={WaldourStudios}
                  />
                </React.Fragment>
              )}
            />
          </Switch>
        </section>
      </Router>
    );
  }
}
