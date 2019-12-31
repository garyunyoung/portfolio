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
    <li className="project-item">
      <NavLink
        className="project-item__container"
        to={`projects/${props.path}`}
      >
        <div className="project-item__image-wrapper">
          <img
            className="project-item__image"
            src={props.img.src}
            alt={props.img.alt}
          />
        </div>
        <div className="project-item__content">
          <h3 className="project-item__title">{props.title}</h3>
          <p className="project-item__technologies-subtitle">
            Key Technologies
          </p>
          <ul className="project-item__technologies">
            {props.technologies.map(technology => {
              return <li className="project-item__technology">{technology}</li>;
            })}
          </ul>
        </div>
      </NavLink>
    </li>
  );
}
