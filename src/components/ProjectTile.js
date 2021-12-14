import React from "react";
import { FILTER_ID_WEB } from "../data/constants";
import { NavLink } from "react-router-dom";
import "../styles/Projects.scss";

export default function ProjectTile({
  title,
  modifier,
  technologies,
  path,
  category,
  excerpt,
  thumbnail
}) {
  return (
    <li className="project-item" >
      <div className="project-item__container">
        <div className="project-item__image-wrapper">
          <img
            className={`project-item__image project-item__image--${modifier}`}
            src={thumbnail.src}
            alt={thumbnail.alt}
          />
          <NavLink className="project-item__see-more project-item__see-more--desktop" to={path}>
            See project details
          </NavLink>
        </div>
        <div className="project-item__content">
          <h3 className="project-item__title">{title}</h3>
          <p className="project-item__technologies-subtitle">
            {`Key ${category === FILTER_ID_WEB ? "Technologies:" : "Skills:"}`}
          </p>
          <ul className="project-item__technologies">
            {
              technologies.map((technology, index) => {
                return <li key={index} className="project-item__technology">{technology}</li>
              })
            }
          </ul>
          <p className="project-item__excerpt">{excerpt}</p>
          <NavLink className="project-item__see-more" to={path}>
            See project details
          </NavLink>
        </div>
      </div>
    </li >
  );
}
