import { useState, ReactElement } from 'react'

import {
  FILTER_ID_WEB,
  FILTER_ID_PR
} from '../data/constants'
import {
  stitchedData,
  stitchedArData,
  theBethsData,
  waldourStudiosData,
  portfolioData,
  sploreData,
  sailCityJumpData,
  nightAtTheSavoyData
} from '../data/projects'
import ProjectTile from './ProjectTile'
import '../styles/ProjectsSection.scss'

interface Thumbnail {
  src: string
  alt: string
}
interface Shared {
  id: string
  path: string
  title: string
  technologies: string[]
}

interface Tile {
  category: 'web' | 'pr'
  excerpt: string
  thumbnail: Thumbnail
}

interface Project {
  shared: Shared
  tile: Tile
}
interface ProjectsProps {
  projects: Project[]
}

interface FilterButtonProps {
  title: string
  category: string
  selectedFilter: string
  setFilterAndProjects: (category: string) => any
}

const projectsData = {
  [`${FILTER_ID_WEB}`]: [
    stitchedData,
    stitchedArData,
    theBethsData,
    waldourStudiosData,
    portfolioData
  ],
  [`${FILTER_ID_PR}`]: [
    sploreData,
    sailCityJumpData,
    nightAtTheSavoyData
  ]
}

export default function ProjectsSection() {
  const [filter, setFilter] =
    useState<string>(FILTER_ID_WEB)
  const [projects, setProjects] = useState<any>(
    projectsData[FILTER_ID_WEB]
  )

  function setFilterAndProjects(category: string) {
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
        <ProjectTiles projects={projects} />
      </div>
    </section>
  )
}

function ProjectTiles({ projects }: ProjectsProps) {
  return (
    <ul className="projects__project-tiles">
      {projects.map((project: Project, index: number) => (
        <ProjectTile
          key={index}
          {...project.shared}
          {...project.tile}
        />
      ))}
    </ul>
  )
}

function Filter({
  selectedFilter,
  setFilterAndProjects
}: {
  selectedFilter: string
  setFilterAndProjects: (category: string) => any
}) {
  return (
    <div className="projects__filter">
      <h4 className="projects__filter-title">Filter by:</h4>
      <div className="projects__filter-buttons">
        <FilterButton
          title="Web"
          category={FILTER_ID_WEB}
          selectedFilter={selectedFilter}
          setFilterAndProjects={setFilterAndProjects}
        />

        <FilterButton
          title="PR"
          category={FILTER_ID_PR}
          selectedFilter={selectedFilter}
          setFilterAndProjects={setFilterAndProjects}
        />
      </div>
    </div>
  )
}

function FilterButton({
  title,
  category,
  selectedFilter,
  setFilterAndProjects
}: FilterButtonProps): ReactElement {
  return (
    <button
      className={`projects__filter-button ${
        selectedFilter === category ? 'is-selected' : ''
      }`}
      onClick={() => setFilterAndProjects(category)}
    >
      {title}
    </button>
  )
}
