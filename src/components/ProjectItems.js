import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Projects.scss";

export default function ProjectItems(props) {
  return (
    <ul className="projects__project-items">
      {props.projects.map((
        project, index) => (
        <ProjectItem
          key={index}
          {...project}
        />
      ))}
    </ul>
  );
}


function ProjectItem({ previewImage, category, title, path, technologies, excerpt }) {
  return (
    <li className="project-item">
      <div className="project-item__container">
        <div className="project-item__image-wrapper">
          <img
            className={`project-item__image project-item__image--${path}`}
            src={previewImage.src}
            alt={previewImage.alt}
          />
          <NavLink className="project-item__see-more project-item__see-more--desktop" to={`projects/${path}`}>
            See project details
          </NavLink>
        </div>
        <div className="project-item__content">
          <h3 className="project-item__title">{title}</h3>
          <p className="project-item__technologies-subtitle">
            {category === "web" ? "Key Technologies:" : "Key Skills:"}
          </p>
          <ul className="project-item__technologies">
            {technologies.map((technology, index) => {
              return <li key={index} className="project-item__technology">{technology}</li>;
            })}
          </ul>
          <p className="project-item__excerpt">{excerpt}</p>
          <NavLink className="project-item__see-more" to={`projects/${path}`}>
            See project details
          </NavLink>
        </div>
      </div>
    </li>
  );
}
