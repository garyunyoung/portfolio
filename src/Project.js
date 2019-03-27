import React from "react";
import splore from "./images/splore-2018.jpg";
import nats from "./images/night-at-the-savoy.jpg";
import scj from "./images/sail-city-jump.jpg";
import "./Project.scss";

export default function ProjectSection() {
  return (
    <React.Fragment>
      <Project img={splore} title='Splore'/>
      <Project img={nats} title='Night at the Savoy'/>
      <Project img={scj} title='Sail City Jump'/>
    </React.Fragment>
  );
}

function Project(props) {
  return (
    <section className="project">
      <img className="project__image" src={props.img} />
      <h1 className='project__title'>{props.title}</h1>
    </section>
  );
}
