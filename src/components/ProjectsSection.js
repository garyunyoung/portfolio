import React, { useState } from "react";
import { FILTER_ID_WEB, FILTER_ID_PR } from "../data/constants";
import {
  stitchedData,
  stitchedArData,
  theBethsData,
  waldourStudiosData,
  portfolioData,
  sploreData,
  sailCityJumpData,
  nightAtTheSavoyData
} from "../data/projects";
import ProjectTile from "./ProjectTile";
import "../styles/Projects.scss";

const projectsData = {}

projectsData[FILTER_ID_WEB] = [
  stitchedData,
  stitchedArData,
  theBethsData,
  waldourStudiosData,
  portfolioData
]

projectsData[FILTER_ID_PR] = [
  sploreData,
  sailCityJumpData,
  nightAtTheSavoyData
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
    <ul className="projects__project-tiles">
      {projects.map((
        project, index) => (
        <ProjectTile
          key={index}
          title={project.title}
          modifier={project.modifier}
          technologies={project.technologies}
          path={project.path}
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

