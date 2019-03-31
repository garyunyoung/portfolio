import React from "react";
import { NavLink } from "react-router-dom";
import "./ProjectSection.scss";


export default function ProjectSection(props) {
  return (
    <React.Fragment>
      {props.list.map(project => (
        <NavLink to={`projects/${project.title}`}><ProjectItem img={project.img} info={project.info} /></NavLink>
      ))}
    </React.Fragment>
  );
}

function ProjectItem(props) {
  return (
    <section className="project__item">
      <img className="project__item__image" src={props.img} />
      <h1 className="project__item__info">{props.info}</h1>
    </section>
  );
}
