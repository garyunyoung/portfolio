import React, { Component } from "react";
import ProjectSection from "./Project";
import "./Projects.scss";

export default function Projects() {
  return (
    <section className="projects">
      <h1 className="projects__title subheading">projects</h1>
      <ul className="projects__nav">
        <li className="projects__nav__item">web development</li>
        <li className="projects__nav__item">publicity / pr</li>
      </ul>
      <ProjectSection />
    </section>
  );
}
