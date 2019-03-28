import React from "react";
import ProjectSection from './ProjectSection';
import splore from "./images/splore-c.jpg";
import nats from "./images/night-at-the-savoy.jpg";
import scj from "./images/sail-city-jump.jpg";
import beths from './images/the-beths.jpg';
import skilaa from './images/skilaa.jpg';
import "./Projects.scss";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { img: beths, title: "the beths", category: "web" },
        { img: skilaa, title: "skilaa", category: "web" },
        { img: splore, title: "splore 2018", category: "pr" },
        { img: nats, title: "night at the savoy", category: "pr" },
        { img: scj, title: "sail city jump", category: "pr" },
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
        <h1 className="projects__title">projects</h1>
        <ul className="projects__nav">
          <li className="projects__nav__item" onClick={() => {this.setFilter('web')}}>web</li>
          <li className="projects__nav__item" onClick={() => {this.setFilter('pr')}}>publicity / pr</li>
          <li className="projects__nav__item" onClick={() => {this.setFilter('all')}}>all</li>
        </ul>
        <ProjectSection list={this.state.projects.filter(project=> project.category === this.state.filter || this.state.filter === 'all')} />
      </section>
    );
  }
}
