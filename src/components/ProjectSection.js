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
    <li className="project__item">
      <NavLink to={`projects/${props.path}`}>
        <span className="project__item-image-overlay"></span>
        <span className="project__item-image-wrapper">
          <img className="project__item-image" src={props.img} />
        </span>
        <span className="project__item-title-container">
          <span className="project__item-title">
            <span>{props.title}</span>
          </span>
        </span>
      </NavLink>
    </li>
  );
}