import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/Projects.scss";

export default function ProjectSection(props) {
  return (
    <React.Fragment>
      {props.list.map(project => (
        <ProjectItem
          img={project.previewImage}
          info={project.info}
          title={project.title}
          path={project.path}
          technologies={project.technologies}
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
          <img
            className="project__item-image"
            src={props.img.src}
            alt={props.img.alt}
          />
        </span>
        <span className="project__item-title-container">
          <span className="project__item-title">
            {props.title}
            <ul className="project__item-technologies">
              {props.technologies.map(technology => {
                return (
                  <li className="project__item-technology">{technology}</li>
                );
              })}
            </ul>
          </span>
        </span>
      </NavLink>
    </li>
  );
}
