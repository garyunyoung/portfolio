import React from "react";
import Header from './Header';
import ProjectSection from './ProjectSection';
import splore from "./images/splore-c.jpg";
import nats from "./images/night-at-the-savoy.jpg";
import scj from "./images/sail-city-jump.jpg";
import beths from './images/beths-logo.png';
import "./Projects.scss";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { img: beths, info: "html css js react fluid design", category: "web" },
        { img: splore, info: "splore 2018", category: "pr" },
        { img: nats, info: "night at the savoy", category: "pr" },
        { img: scj, info: "sail city jump", category: "pr" },
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
      <section className="projects">
        <Header title='projects'/>
        <section className='projects__container'>
        <ul className="projects__nav">
          <li className="projects__nav__item projects__nav__item--web" onClick={() => {this.setFilter('web')}}>web</li>
          <li className="projects__nav__item projects__nav__item--pr" onClick={() => {this.setFilter('pr')}}>pr</li>
          {/* <li className="projects__nav__item projects__nav__item--all" onClick={() => {this.setFilter('all')}}>all</li> */}
        </ul>
        <ProjectSection list={this.state.projects.filter(project=> project.category === this.state.filter || this.state.filter === 'all')} />
        </section>
      </section>
    );
  }
}
