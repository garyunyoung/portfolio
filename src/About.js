import React from "react";
import profilePic from './images/profile-pic.jpg';
import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <img className="about__photo" src={profilePic}/>
    </section>
  );
}
