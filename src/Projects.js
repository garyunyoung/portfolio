import React from "react";
import {
  stitchedProject,
  stitchedARProject,
  bethsProject,
  waldourProject,
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
        stitchedARProject,
        bethsProject,
        // waldourProject,
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
            <h2 className="projects__title">Projects</h2>
            <ProjectFilter
              setFilter={category => this.setFilter(category)}
              selected={this.state.filter}
            />
          </div>
          <ul className="projects__project-items">
            <ProjectSection
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

export const Stitched = () => (
  <React.Fragment>
    <NavBar link="/#projects" title="< BACK" />
    <ProjectPage
      title={stitchedProject.title}
      images={stitchedProject.images}
      imageSets={stitchedProject.imageSets}
      mobileImages={stitchedProject.mobileImages}
      companyDescription={stitchedProject.companyDescription}
      info={stitchedProject.info}
      link={stitchedProject.link}
      technologies={stitchedProject.technologies}
      keyFeatures={stitchedProject.keyFeatures}
      jobType={stitchedProject.jobType}
      jobYear={stitchedProject.jobYear}
    />
  </React.Fragment>
);

export const StitchedAR = () => (
  <React.Fragment>
    <NavBar link="/#projects" title="< BACK" />
    <ProjectPage
      title={stitchedARProject.title}
      modifier={stitchedARProject.modifier}
      images={stitchedARProject.images}
      mobileImages={stitchedARProject.mobileImages}
      companyDescription={stitchedARProject.companyDescription}
      info={stitchedARProject.info}
      link={stitchedARProject.link}
      technologies={stitchedARProject.technologies}
      keyFeatures={stitchedARProject.keyFeatures}
      jobType={stitchedARProject.jobType}
      jobYear={stitchedARProject.jobYear}
    />
  </React.Fragment>
);

export const TheBeths = () => (
  <React.Fragment>
    <NavBar link="/#projects" title="< BACK" />
    <ProjectPage
      title={bethsProject.title}
      mobileImages={bethsProject.mobileImages}
      images={bethsProject.images}
      companyDescription={bethsProject.companyDescription}
      info={bethsProject.info}
      link={bethsProject.link}
      technologies={bethsProject.technologies}
      keyFeatures={bethsProject.keyFeatures}
      jobType={bethsProject.jobType}
      jobYear={bethsProject.jobYear}
    />
  </React.Fragment>
);

export const WaldourStudios = () => (
  <React.Fragment>
    <NavBar link="/#projects" title="< BACK" />
    <ProjectPage
      title={waldourProject.title}
      images={waldourProject.images}
      companyDescription={waldourProject.companyDescription}
      info={waldourProject.info}
      link={waldourProject.link}
      technologies={waldourProject.technologies}
      keyFeatures={waldourProject.keyFeatures}
      jobType={waldourProject.jobType}
      jobYear={waldourProject.jobYear}
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
      technologies={sploreProject.technologies}
      keyFeatures={sploreProject.keyFeatures}
      jobType={sploreProject.jobType}
      jobYear={sploreProject.jobYear}
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
      technologies={sailCityJumpProject.technologies}
      keyFeatures={sailCityJumpProject.keyFeatures}
      jobType={sailCityJumpProject.jobType}
      jobYear={sailCityJumpProject.jobYear}
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
      technologies={nightAtTheSavoyProject.technologies}
      keyFeatures={nightAtTheSavoyProject.keyFeatures}
      jobType={nightAtTheSavoyProject.jobType}
      jobYear={nightAtTheSavoyProject.jobYear}
    />
  </React.Fragment>
);
