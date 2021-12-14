import React from "react";
import { FILTER_ID_WEB } from "../data/constants";
import { NavLink } from "react-router-dom";
import "../styles/ProjectTile.scss";

export default function ProjectTile({
  id,
  title,
  technologies,
  path,
  category,
  excerpt,
  thumbnail
}) {

  return (
    <li className="project-tile" >
      <div className="project-tile__container">
        <div className="project-tile__image-wrapper">
          <img
            className={`project-tile__image project-tile__image--${id}`}
            src={thumbnail.src}
            alt={thumbnail.alt}
          />
          <NavLink className="project-tile__see-more project-tile__see-more--desktop" to={path}>
            See project details
          </NavLink>
        </div>
        <div className="project-tile__content">
          <h3 className="project-tile__title">{title}</h3>
          <p className="project-tile__technologies-subtitle">
            {`Key ${category === FILTER_ID_WEB ? "Technologies:" : "Skills:"}`}
          </p>
          <ul className="project-tile__technologies">
            {
              technologies.map((technology, index) => {
                return <li key={index} className="project-tile__technology">{technology}</li>
              })
            }
          </ul>
          <p className="project-tile__excerpt">{excerpt}</p>
          <NavLink className="project-tile__see-more" to={path}>
            See project details
          </NavLink>
        </div>
      </div>
    </li >
  );
}
