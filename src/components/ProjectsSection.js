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
import ProjectTile from "./ProjectTile";
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
        <ProjectTiles
          projects={projects}
        />
      </div>
    </section>
  );
}


function ProjectTiles({ projects }) {
  return (
    <ul className="projects__project-items">
      {projects.map((
        project, index) => (
        <ProjectTile
          key={index}
          title={project.title}
          modifier={project.modifier}
          technologies={project.technologies}
          {...project.tile}
        />
      ))}
    </ul>
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
  <ProjectPage
    title={stitchedProjectData.title}
    technologies={stitchedProjectData.technologies}
    {...stitchedProjectData.page}
  />
);

export const StitchedArPage = () => (
  <ProjectPage
    title={stitchedArProjectData.title}
    technologies={stitchedArProjectData.technologies}
    {...stitchedArProjectData.page}
  />
);

export const TheBethsPage = () => (
  <ProjectPage
    title={bethsProjectData.title}
    technologies={bethsProjectData.technologies}
    {...bethsProjectData.page}
  />);

export const WaldourStudiosPage = () => (
  <ProjectPage
    title={waldourProjectData.title}
    technologies={waldourProjectData.technologies}
    {...waldourProjectData.page}
  />
);

export const PortfolioPage = () => (
  <ProjectPage
    title={portfolioProjectData.title}
    technologies={portfolioProjectData.technologies}
    {...portfolioProjectData.page}
  />
);

export const SplorePage = () => (
  <ProjectPage
    title={sploreProjectData.title}
    technologies={sploreProjectData.technologies}
    {...sploreProjectData.page}
  />
);

export const SailCityJumpPage = () => (
  <ProjectPage
    title={sailCityJumpProjectData.title}
    technologies={sailCityJumpProjectData.technologies}
    {...sailCityJumpProjectData.page}
  />
);

export const NightAtTheSavoyPage = () => (
  <ProjectPage
    title={nightAtTheSavoyProjectData.title}
    technologies={nightAtTheSavoyProjectData.technologies}
    {...nightAtTheSavoyProjectData.page}
  />
);
