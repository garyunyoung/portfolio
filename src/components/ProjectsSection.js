import React, { useState } from "react";
import { FILTER_ID_WEB, FILTER_ID_PR } from "../data/constants";
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
import ProjectItems from "./ProjectItems";
import ProjectPage from "./ProjectPage";
import "../styles/Projects.scss";

const projectsData = {}

projectsData[FILTER_ID_WEB] = [
  stitchedProjectData,
  stitchedArProjectData,
  bethsProjectData,
  waldourProjectData,
  portfolioProjectData
]

projectsData[FILTER_ID_PR] = [
  sploreProjectData,
  sailCityJumpProjectData,
  nightAtTheSavoyProjectData
]

export default function ProjectsSection() {
  const [filter, setFilter] = useState(FILTER_ID_WEB)
  const [projects, setProjects] = useState(projectsData[FILTER_ID_WEB])

  function setFilterAndProjects(category) {
    setFilter(category)
    setProjects(projectsData[category])
  }

  return (
    <section id="projects" className="projects">
      <div className="projects__content">
        <div className="projects__filter-container">
          <h2 className="projects__title">Projects</h2>
          <Filter
            selectedFilter={filter}
            setFilterAndProjects={setFilterAndProjects}
          />
        </div>
        <ProjectItems
          projects={projects}
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
          category={FILTER_ID_WEB}
          {...props}
        />

        <FilterButton
          title="PR"
          category={FILTER_ID_PR}
          {...props}
        />
      </div>
    </div>
  );
};

function FilterButton({ title, category, selectedFilter, setFilterAndProjects }) {
  return (
    <button
      className={`projects__filter-button ${selectedFilter === category
        ? "is-selected"
        : ""
        }`}
      onClick={() => setFilterAndProjects(category)}
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
