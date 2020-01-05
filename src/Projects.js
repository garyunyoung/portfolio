import React from "react";
import {
  stitchedProject,
  bethsProject,
  waldourStudiosProject,
  sploreProject,
  sailCityJumpProject,
  nightAtTheSavoyProject
} from "./ProjectData";
import NavBar from "./components/NavBar";
import ProjectPage from "./ProjectPage";
import ProjectSection from "./components/ProjectSection";
import "./stylesheets/Projects.scss";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        stitchedProject,
        bethsProject,
        waldourStudiosProject,
        sploreProject,
        sailCityJumpProject,
        nightAtTheSavoyProject
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
      <section id="projects" className="projects">
        <div className="projects__content">
          <div className="projects__filter-container">
            <h2 className="projects__title">PROJECTS</h2>
            <ProjectFilter
              setFilter={category => this.setFilter(category)}
              selected={this.state.filter}
            />
          </div>
          <ul className="projects__project-items">
            <ProjectSection
              list={this.state.projects.filter(
                project =>
                  project.category === this.state.filter ||
                  this.state.filter === "all"
              )}
            />
          </ul>
        </div>
      </section>
    );
  }
}

const ProjectFilter = props => {
  return (
    <div className="projects__filter">
      <h4 className="projects__filter-title">Filter by:</h4>
      <div className="projects__filter-buttons">
        <button
          className={`projects__filter-button ${
            props.selected === "web"
              ? "projects__filter-button--is-selected"
              : ""
          }`}
          onClick={() => {
            props.setFilter("web");
          }}
        >
          web
        </button>
        <button
          className={`projects__filter-button ${
            props.selected === "pr"
              ? "projects__filter-button--is-selected"
              : ""
          }`}
          onClick={() => {
            props.setFilter("pr");
          }}
        >
          pr
        </button>
      </div>
    </div>
  );
};

export const Stitched = () => (
  <React.Fragment>
    <NavBar link="/#projects" title="< BACK" />
    <ProjectPage
      title={stitchedProject.title}
      images={stitchedProject.images}
      companyDescription={stitchedProject.companyDescription}
      info={stitchedProject.info}
      link={stitchedProject.link}
      displayLink={stitchedProject.displayLink}
      technologies={stitchedProject.technologies}
      keyFeatures={stitchedProject.keyFeatures}
      jobType={stitchedProject.jobType}
    />
  </React.Fragment>
);

export const TheBeths = () => (
  <React.Fragment>
    <NavBar link="/#projects" title="< BACK" />
    <ProjectPage
      title={bethsProject.title}
      images={bethsProject.images}
      companyDescription={bethsProject.companyDescription}
      info={bethsProject.info}
      link={bethsProject.link}
      displayLink={bethsProject.displayLink}
      technologies={bethsProject.technologies}
      keyFeatures={bethsProject.keyFeatures}
      jobType={bethsProject.jobType}
    />
  </React.Fragment>
);

export const WaldourStudios = () => (
  <React.Fragment>
    <NavBar link="/#projects" title="< BACK" />
    <ProjectPage
      title={waldourStudiosProject.title}
      images={waldourStudiosProject.images}
      companyDescription={waldourStudiosProject.companyDescription}
      info={waldourStudiosProject.info}
      link={waldourStudiosProject.link}
      displayLink={waldourStudiosProject.displayLink}
      technologies={waldourStudiosProject.technologies}
      keyFeatures={waldourStudiosProject.keyFeatures}
      jobType={waldourStudiosProject.jobType}
    />
  </React.Fragment>
);

export const Splore = () => (
  <React.Fragment>
    <NavBar link="/#projects" title="< BACK" />
    <ProjectPage
      title={sploreProject.title}
      images={sploreProject.images}
      companyDescription={sploreProject.companyDescription}
      info={sploreProject.info}
      link={sploreProject.link}
      displayLink={sploreProject.displayLink}
      technologies={sploreProject.technologies}
      keyFeatures={sploreProject.keyFeatures}
      jobType={sploreProject.jobType}
    />
  </React.Fragment>
);

export const SailCityJump = () => (
  <React.Fragment>
    <NavBar link="/#projects" title="< BACK" />
    <ProjectPage
      title={sailCityJumpProject.title}
      images={sailCityJumpProject.images}
      companyDescription={sailCityJumpProject.companyDescription}
      info={sailCityJumpProject.info}
      link={sailCityJumpProject.link}
      displayLink={sailCityJumpProject.displayLink}
      technologies={sailCityJumpProject.technologies}
      keyFeatures={sailCityJumpProject.keyFeatures}
      jobType={sailCityJumpProject.jobType}
    />
  </React.Fragment>
);

export const NightAtTheSavoy = () => (
  <React.Fragment>
    <NavBar link="/#projects" title="< BACK" />
    <ProjectPage
      title={nightAtTheSavoyProject.title}
      images={nightAtTheSavoyProject.images}
      companyDescription={nightAtTheSavoyProject.companyDescription}
      info={nightAtTheSavoyProject.info}
      link={nightAtTheSavoyProject.link}
      displayLink={nightAtTheSavoyProject.displayLink}
      technologies={nightAtTheSavoyProject.technologies}
      keyFeatures={nightAtTheSavoyProject.keyFeatures}
      jobType={nightAtTheSavoyProject.jobType}
    />
  </React.Fragment>
);
