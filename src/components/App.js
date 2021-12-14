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
    title={stitchedData.title}
    technologies={stitchedData.technologies}
    {...stitchedData.page}
  />
);

const StitchedArPage = () => (
  <ProjectPage
    title={stitchedArData.title}
    technologies={stitchedArData.technologies}
    {...stitchedArData.page}
  />
);

const TheBethsPage = () => (
  <ProjectPage
    title={theBethsData.title}
    technologies={theBethsData.technologies}
    {...theBethsData.page}
  />);

const WaldourStudiosPage = () => (
  <ProjectPage
    title={waldourStudiosData.title}
    technologies={waldourStudiosData.technologies}
    {...waldourStudiosData.page}
  />
);

const PortfolioPage = () => (
  <ProjectPage
    title={portfolioData.title}
    technologies={portfolioData.technologies}
    {...portfolioData.page}
  />
);

const SplorePage = () => (
  <ProjectPage
    title={sploreData.title}
    technologies={sploreData.technologies}
    {...sploreData.page}
  />
);

const SailCityJumpPage = () => (
  <ProjectPage
    title={sailCityJumpData.title}
    technologies={sailCityJumpData.technologies}
    {...sailCityJumpData.page}
  />
);

const NightAtTheSavoyPage = () => (
  <ProjectPage
    title={nightAtTheSavoyData.title}
    technologies={nightAtTheSavoyData.technologies}
    {...nightAtTheSavoyData.page}
  />
);
