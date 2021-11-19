import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Stitched,
  StitchedAR,
  TheBeths,
  WaldourStudios,
  Splore,
  SailCityJump,
  NightAtTheSavoy
} from "./Projects";
import Home from "./Home";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path={`/projects/stitched`}
            component={Stitched}
          />
          <Route
            path={`/projects/stitched-ar`}
            component={StitchedAR}
          />
          <Route
            path={`/projects/the-beths`}
            component={TheBeths}
          />
          <Route
            path={`/projects/waldour-studios`}
            component={WaldourStudios}
          />
          <Route
            path={`/projects/splore-2018`}
            component={Splore}
          />
          <Route
            path={`/projects/sail-city-jump-2017`}
            component={SailCityJump}
          />
          <Route
            path={`/projects/night-at-the-savoy-2017`}
            component={NightAtTheSavoy}
          />
        </Switch>
        <Footer window={window}/>
      </Router>
    );
  }
}
