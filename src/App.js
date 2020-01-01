import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Stitched, TheBeths, WaldourStudios, Splore, SailCityJump, NightAtTheSavoy } from "./Projects";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <Router>
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
                <Route
                  // path={`/projects/${waldourStudiosProject.path}`}
                  path={`/projects/splore-2018`}
                  component={Splore}
                />
                <Route
                  // path={`/projects/${waldourStudiosProject.path}`}
                  path={`/projects/sail-city-jump-2017`}
                  component={SailCityJump}
                />
                <Route
                  // path={`/projects/${waldourStudiosProject.path}`}
                  path={`/projects/night-at-the-savoy-2017`}
                  component={NightAtTheSavoy}
                />
              </React.Fragment>
            )}
          />
        </Switch>
      </Router>
    );
  }
}
