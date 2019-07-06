import React from "react";
import { Route, Switch } from "react-router-dom";
import Hamburger from './Hamburger';
import { BethsPage, Splore } from './ProjectPage';
import ProjectSection from './ProjectSection';
import Header from './Header';
import splore from "./images/splore-c.jpg";
import nats from "./images/night-at-the-savoy.jpg";
import scj from "./images/sail-city-jump.jpg";
import beths from './images/beths-project.png';
import "./Projects.scss";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { img: beths, title: 'the-beths', info: "react js css html", category: "web" },
        { img: splore, title: 'splore-2018', info: 'press intern', category: "pr" },
        { img: nats, title: 'night-at-the-savoy', info: 'event manager', category: "pr" },
        { img: scj, title: 'sail-city-jump', info:'event coordinator', category: "pr" },
      ],
      filter: "web"
    };
  }

  setFilter(category) {
    this.setState(() => ({
      filter: category
    }));
  }

  render() {
    return (
      <Switch>
        <Route exact path="/projects" render={() => (
        <section className="projects">
          <Hamburger/>
          <Header title='projects'/>
          <section className="projects__filter">
            <h1 className="projects__filter__button" onClick={() => {this.setFilter('web')}}>web</h1>
            <h1 className="projects__filter__button" onClick={() => {this.setFilter('pr')}}>pr</h1>
          </section>
          <section className='projects__container'>
          <ProjectSection list={this.state.projects.filter(project=> project.category === this.state.filter || this.state.filter === 'all')} />
          </section>
        </section>)}/>
        <Route path="/projects/the-beths" component={BethsPage} />
        <Route path="/projects/splore-2018" component={Splore} />

      </Switch>
    );
  }
}
