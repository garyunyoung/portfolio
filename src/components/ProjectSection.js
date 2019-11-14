import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/Projects.scss";

export default function ProjectSection(props) {
  return (
    <React.Fragment>
      {props.list.map(project => (
        <ProjectItem
          img={project.img}
          info={project.info}
          title={project.title}
          path={project.path}
        />
      ))}
    </React.Fragment>
  );
}

function ProjectItem(props) {
  return (
    <section className="project__item">
      <NavLink to={`projects/${props.path}`}>
        <img className="project__item-image" src={props.img} />
        <h1 className="project__item-title">
          <span>{props.title}</span>
        </h1>
      </NavLink>
    </section>
  );
}
