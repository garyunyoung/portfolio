import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  stitchedProject,
  bethsProject,
  waldourStudiosProject
} from "./ProjectData";
import NavBar from "./components/NavBar";
import ProjectPage from "./ProjectPage";
import ProjectSection from "./components/ProjectSection";
import "./stylesheets/Projects.scss";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [stitchedProject, bethsProject, waldourStudiosProject],
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
        <div className="projects__container">
          <h1 className="projects__title">PROJECTS /></h1>
          <ProjectFilter setFilter={category => this.setFilter(category)} />
          <div className="projects__items-container">
            <ul className="projects__item">
              <ProjectSection
                list={this.state.projects.filter(
                  project =>
                    project.category === this.state.filter ||
                    this.state.filter === "all"
                )}
              />
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

const ProjectFilter = props => {
  return (
    <div className="projects__filter">
      <p
        className="projects__filter__button"
        onClick={() => {
          props.setFilter("web");
        }}
      >
        web
      </p>
      <p
        className="projects__filter__button"
        onClick={() => {
          props.setFilter("pr");
        }}
      >
        pr
      </p>
    </div>
  );
};

export const Stitched = () => (
  <ProjectPage
    title={stitchedProject.title}
    images={stitchedProject.images}
    companyDescription={stitchedProject.companyDescription}
    info={stitchedProject.info}
    link={stitchedProject.link}
    displayLink={stitchedProject.displayLink}
    technologies={stitchedProject.technologies}
    keyFeatures={stitchedProject.keyFeatures}
  />
);

export const TheBeths = () => (
  <ProjectPage
    title={bethsProject.title}
    images={bethsProject.images}
    companyDescription={bethsProject.companyDescription}
    info={bethsProject.info}
    link={bethsProject.link}
    displayLink={bethsProject.displayLink}
    technologies={bethsProject.technologies}
    keyFeatures={bethsProject.keyFeatures}
  />
);

export const WaldourStudios = () => (
  <ProjectPage
    title={waldourStudiosProject.title}
    images={waldourStudiosProject.images}
    companyDescription={waldourStudiosProject.companyDescription}
    info={waldourStudiosProject.info}
    link={waldourStudiosProject.link}
    displayLink={waldourStudiosProject.displayLink}
    technologies={waldourStudiosProject.technologies}
    keyFeatures={waldourStudiosProject.keyFeatures}
  />
);
