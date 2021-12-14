import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  stitchedData,
  stitchedArData,
  theBethsData,
  waldourStudiosData,
  portfolioData,
  sploreData,
  sailCityJumpData,
  nightAtTheSavoyData
} from "../data/projects";

import Navigation from "./Navigation";
import Home from "./Home";
import ProjectPage from "./ProjectPage";
import Footer from "./Footer";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path={stitchedData.path}
            component={StitchedPage}
          />
          <Route
            path={stitchedArData.path}
            component={StitchedArPage}
          />
          <Route
            path={theBethsData.path}
            component={TheBethsPage}
          />
          <Route
            path={waldourStudiosData.path}
            component={WaldourStudiosPage}
          />
          <Route
            path={portfolioData.path}
            component={PortfolioPage}
          />
          <Route
            path={sploreData.path}
            component={SplorePage}
          />
          <Route
            path={sailCityJumpData.path}
            component={SailCityJumpPage}
          />
          <Route
            path={nightAtTheSavoyData.path}
            component={NightAtTheSavoyPage}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const StitchedPage = () => (
  <ProjectPage
    {...stitchedData.shared}
    {...stitchedData.page}
  />
);

const StitchedArPage = () => (
  <ProjectPage
    {...stitchedArData.shared}
    {...stitchedArData.page}
  />
);

const TheBethsPage = () => (
  <ProjectPage
    {...theBethsData.shared}
    {...theBethsData.page}
  />);

const WaldourStudiosPage = () => (
  <ProjectPage
    {...waldourStudiosData.shared}
    {...waldourStudiosData.page}
  />
);

const PortfolioPage = () => (
  <ProjectPage
    {...portfolioData.shared}
    {...portfolioData.page}
  />
);

const SplorePage = () => (
  <ProjectPage
    {...sploreData.shared}
    {...sploreData.page}
  />
);

const SailCityJumpPage = () => (
  <ProjectPage
    {...sailCityJumpData.shared}
    {...sailCityJumpData.page}
  />
);

const NightAtTheSavoyPage = () => (
  <ProjectPage
    {...nightAtTheSavoyData.shared}
    {...nightAtTheSavoyData.page}
  />
);
