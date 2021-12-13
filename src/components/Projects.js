import React from "react";
import {
  stitchedProjectData,
  stitchedArProjectData,
  bethsProjectData,
  waldourProjectData,
  portfolioProjectData,
  sploreProjectData,
  sailCityJumpProjectData,
  nightAtTheSavoyProjectData
} from "../data/projects";
import ProjectPage from "./ProjectPage";
import ProjectItems from "./ProjectItems";
import "../styles/Projects.scss";
export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        stitchedProjectData,
        stitchedArProjectData,
        bethsProjectData,
        waldourProjectData,
        portfolioProjectData,
        sploreProjectData,
        sailCityJumpProjectData,
        nightAtTheSavoyProjectData
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
            <h2 className="projects__title">Projects</h2>
            <ProjectFilter
              setFilter={category => this.setFilter(category)}
              selected={this.state.filter}
            />
          </div>
          <ul className="projects__project-items">
            <ProjectItems
              list={this.state.projects.filter(
                project =>
                  project.category === this.state.filter
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
          className={`projects__filter-button ${props.selected === "web"
            ? "is-selected"
            : ""
            }`}
          onClick={() => {
            props.setFilter("web");
          }}
        >
          Web
        </button>
        <button
          className={`projects__filter-button ${props.selected === "pr"
            ? "is-selected"
            : ""
            }`}
          onClick={() => {
            props.setFilter("pr");
          }}
        >
          PR
        </button>
      </div>
    </div>
  );
};


export const StitchedPage = () => (
  <ProjectPage {...stitchedProjectData} />
);

export const StitchedArPage = () => (
  <ProjectPage {...stitchedArProjectData} />
);

export const TheBethsPage = () => (
  <ProjectPage {...bethsProjectData} />
);

export const WaldourStudiosPage = () => (
  <ProjectPage {...waldourProjectData} />
);

export const PortfolioPage = () => (
  <ProjectPage {...portfolioProjectData} />
);

export const SplorePage = () => (
  <ProjectPage {...sploreProjectData} />
);

export const SailCityJumpPage = () => (
  <ProjectPage {...sailCityJumpProjectData} />
);

export const NightAtTheSavoyPage = () => (
  <ProjectPage {...nightAtTheSavoyProjectData} />
);
