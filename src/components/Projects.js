import React, { useState } from "react";
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

export default function Project() {
  const [projects, _setProjects] = useState([
    stitchedProjectData,
    stitchedArProjectData,
    bethsProjectData,
    waldourProjectData,
    portfolioProjectData,
    sploreProjectData,
    sailCityJumpProjectData,
    nightAtTheSavoyProjectData
  ])

  const [filter, setFilter] = useState('web')

  return (
    <section id="projects" className="projects">
      <div className="projects__content">
        <div className="projects__filter-container">
          <h2 className="projects__title">Projects</h2>
          <Filter
            setFilter={setFilter}
            selectedFilter={filter}
          />
        </div>
        <ProjectItems
          projects={projects.filter(
            project =>
              project.category === filter
          )}
        />
      </div>
    </section>
  );
}

function Filter(props) {
  return (
    <div className="projects__filter">
      <h4 className="projects__filter-title">Filter by:</h4>
      <div className="projects__filter-buttons">
        <FilterButton
          title="Web"
          category='web'
          {...props}
        />

        <FilterButton
          title="PR"
          category='pr'
          {...props}
        />
      </div>
    </div>
  );
};

function FilterButton({ title, category, selectedFilter, setFilter }) {
  return (
    <button
      className={`projects__filter-button ${selectedFilter === category
        ? "is-selected"
        : ""
        }`}
      onClick={() => setFilter(category)}
    >
      {title}
    </button>
  )
}


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
