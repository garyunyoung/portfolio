import { Component, ReactElement } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import {
  stitchedData,
  stitchedArData,
  theBethsData,
  waldourStudiosData,
  portfolioData,
  sploreData,
  sailCityJumpData,
  nightAtTheSavoyData
} from '../data/projects'

import Navigation from './Navigation'
import Home from './Home'
import ProjectPage from './ProjectPage'
import Footer from './Footer'

export default class App extends Component<ReactElement> {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path={stitchedData.shared.path}
            component={StitchedPage}
          />
          <Route
            path={stitchedArData.shared.path}
            component={StitchedArPage}
          />
          <Route
            path={theBethsData.shared.path}
            component={TheBethsPage}
          />
          <Route
            path={waldourStudiosData.shared.path}
            component={WaldourStudiosPage}
          />
          <Route
            path={portfolioData.shared.path}
            component={PortfolioPage}
          />
          <Route
            path={sploreData.shared.path}
            component={SplorePage}
          />
          <Route
            path={sailCityJumpData.shared.path}
            component={SailCityJumpPage}
          />
          <Route
            path={nightAtTheSavoyData.shared.path}
            component={NightAtTheSavoyPage}
          />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

const StitchedPage = () => (
  <ProjectPage
    {...stitchedData.shared}
    {...stitchedData.page}
  />
)

const StitchedArPage = () => (
  <ProjectPage
    {...stitchedArData.shared}
    {...stitchedArData.page}
  />
)

const TheBethsPage = () => (
  <ProjectPage
    {...theBethsData.shared}
    {...theBethsData.page}
  />
)

const WaldourStudiosPage = () => (
  <ProjectPage
    {...waldourStudiosData.shared}
    {...waldourStudiosData.page}
  />
)

const PortfolioPage = () => (
  <ProjectPage
    {...portfolioData.shared}
    {...portfolioData.page}
  />
)

const SplorePage = () => (
  <ProjectPage
    {...sploreData.shared}
    {...sploreData.page}
  />
)

const SailCityJumpPage = () => (
  <ProjectPage
    {...sailCityJumpData.shared}
    {...sailCityJumpData.page}
  />
)

const NightAtTheSavoyPage = () => (
  <ProjectPage
    {...nightAtTheSavoyData.shared}
    {...nightAtTheSavoyData.page}
  />
)
