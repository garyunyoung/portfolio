import React from "react";
import { NavLink } from "react-router-dom";
import "./Projects.scss";

export default function ProjectItems(props) {
  return (
    <React.Fragment>
      {props.list.map((project, index) => (
        <ProjectItem
          id={index}
          key={index}
          img={project.previewImage}
          info={project.info}
          category={project.category}
          title={project.title}
          path={project.path}
          technologies={project.technologies}
          excerpt={project.excerpt}
        />
      ))}
    </React.Fragment>
  );
}

function ProjectItem(props) {
  return (
    <li className="project-item">
      <div className="project-item__container">
        <div className="project-item__image-wrapper">
          <img
            className={`project-item__image project-item__image--${props.path}`}
            src={props.img.src}
            alt={props.img.alt}
          />
          <NavLink className="project-item__see-more project-item__see-more--desktop" to={`projects/${props.path}`}>
            See project details
          </NavLink>
        </div>
        <div className="project-item__content">
          <h3 className="project-item__title">{props.title}</h3>
          <p className="project-item__technologies-subtitle">
            {props.category === "web" ? "Key Technologies:" : "Key Skills:"}
          </p>
          <ul className="project-item__technologies">
            {props.technologies.map((technology, index) => {
              return <li key={index} className="project-item__technology">{technology}</li>;
            })}
          </ul>
          <p className="project-item__excerpt">{props.excerpt}</p>
          <NavLink className="project-item__see-more" to={`projects/${props.path}`}>
            See project details
          </NavLink>
        </div>
      </div>
    </li>
  );
}
