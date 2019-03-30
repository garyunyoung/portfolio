import React from "react";
import profilePic from "./images/profile-pic.jpg";
import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <section className="about__container">
        <img className="about__photo" src={profilePic} />
        <p className="about__text">
          Garyun is a New Zealand native who came of age in the Auckland music
          scene before moving to sunny London. She is far too obsessed with a
          band called The Beths, a dance called Lindy Hop, and that drool-worthy
          dish we call Carbonara.
          <br />
          <br />
          Say hi!
        </p>
        <i className="about__envelope far fa-envelope" />
      </section>
    </section>
  );
}
