import React from "react";
import { Route, Switch } from "react-router-dom";
import { BethsPage, Splore } from './ProjectPage';
import ProjectSection from './components/ProjectSection';
import splore from "./images/splore-c.jpg";
import nats from "./images/night-at-the-savoy.jpg";
import scj from "./images/sail-city-jump.jpg";
import beths from './images/beths-project.png';
import "./stylesheets/Projects.scss";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { img: beths, path: 'the-beths', title: "the beths", category: "web" },
        { img: splore, path: 'stitched', title: "stitched", category: "web" },
        { img: scj, path: 'waldour-studios', title: "waldour studios", category: "web" },
        { img: splore, path: 'splore-2018', title: 'splore', category: "pr" },
        { img: nats, path: 'night-at-the-savoy', title: 'night at the savoy', category: "pr" },
        { img: scj, path: 'sail-city-jump', title:'sail city jump', category: "pr" },
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
          <div className='projects__container'>
            <h1 className="projects__title">PROJECtS /></h1>
            <div className="projects__filter">
              <h1 className="projects__filter__button" onClick={() => {this.setFilter('web')}}>web</h1>
              <h1 className="projects__filter__button" onClick={() => {this.setFilter('pr')}}>pr</h1>
            </div>
            <div className='projects__items-container'>
              <ul className='projects__item'>
                <ProjectSection list={this.state.projects.filter(project=> project.category === this.state.filter || this.state.filter === 'all')} />
              </ul>
            </div>
          </div>
        </section>)}/>
        <Route path="/projects/the-beths" component={BethsPage} />
        <Route path="/projects/splore-2018" component={Splore} />
      </Switch>
    );
  }
}
