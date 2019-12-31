import React from "react";
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
      <section id="projects" className="projects">
        <div className="projects__content">
          <h2 className="projects__title">PROJECTS</h2>
          <ProjectFilter setFilter={category => this.setFilter(category)} />
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
    />
  </React.Fragment>
);
