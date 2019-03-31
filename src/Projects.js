import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from './Header';
import { BethsPage } from './ProjectPage';
import ProjectSection from './ProjectSection';
import splore from "./images/splore-c.jpg";
import nats from "./images/night-at-the-savoy.jpg";
import scj from "./images/sail-city-jump.jpg";
import beths from './images/beths-project.jpg';
import "./Projects.scss";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { img: beths, title: 'the-beths', info: "html css js react fluid design", category: "web" },
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
          <Header title='projects'/>
          <ul className="projects__filter">
            <li className="projects__filter__button" onClick={() => {this.setFilter('web')}}>web</li>
            <li className="projects__filter__button" onClick={() => {this.setFilter('pr')}}>pr</li>
          </ul>
          <section className='projects__container'>
          <ProjectSection list={this.state.projects.filter(project=> project.category === this.state.filter || this.state.filter === 'all')} />
          </section>
        </section>)}/>
        <Route path="/projects/the-beths" component={BethsPage} />
      </Switch>
    );
  }
}
