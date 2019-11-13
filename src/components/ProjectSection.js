import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/Projects.scss";

export default function ProjectSection(props) {
  return (
    <React.Fragment>
      {props.list.map(project => (
        <NavLink to={`projects/${project.path}`}>
          <ProjectItem
            img={project.img}
            info={project.info}
            title={project.title}
          />
        </NavLink>
      ))}
    </React.Fragment>
  );
}

function ProjectItem(props) {
  return (
    <section className="project__item">
      <h1 className="project__item-title">01 <br/><span>{props.title}</span></h1>
      <img className="project__item-image" src={props.img} />
    </section>
  );
}
