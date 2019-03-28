import React from "react";
import "./ProjectSection.scss";


export default function ProjectSection(props) {
  return (
    <React.Fragment>
      {props.list.map(project => (
        <ProjectItem img={project.img} title={project.title} />
      ))}
    </React.Fragment>
  );
}

function ProjectItem(props) {
  return (
    <section className="project">
      <img className="project__image" src={props.img} />
      <h1 className="project__title">{props.title}</h1>
    </section>
  );
}
