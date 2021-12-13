import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Home from "./Home";
import Footer from "./Footer";
import {
  StitchedPage,
  StitchedArPage,
  TheBethsPage,
  WaldourStudiosPage,
  PortfolioPage,
  SplorePage,
  SailCityJumpPage,
  NightAtTheSavoyPage
} from "./ProjectsSection";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation modifier="home" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path={`/projects/stitched`}
            component={StitchedPage}
          />
          <Route
            path={`/projects/stitched-ar`}
            component={StitchedArPage}
          />
          <Route
            path={`/projects/the-beths`}
            component={TheBethsPage}
          />
          <Route
            path={`/projects/waldour-studios`}
            component={WaldourStudiosPage}
          />
          <Route
            path={`/projects/portfolio`}
            component={PortfolioPage}
          />
          <Route
            path={`/projects/splore-2018`}
            component={SplorePage}
          />
          <Route
            path={`/projects/sail-city-jump-2017`}
            component={SailCityJumpPage}
          />
          <Route
            path={`/projects/night-at-the-savoy-2017`}
            component={NightAtTheSavoyPage}
          />
        </Switch>
        <Footer window={window} />
      </Router>
    );
  }
}
