import React from "react";
import profileIllustration from "./images/profile-illustration.svg";
import "./stylesheets/Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <div className="home__text">
          <span>
            Hi, I'm Garyun
            <br />A front end developer <br />
            who likes to ....... <br />
            <br />
            Currently in <br />
            London UK
          </span>
        </div>
        <img className="home__image" src={profileIllustration} />
        <a className="home__nav home__nav--projects" href="#projects">
          projects />
        </a>
      </div>
    </section>
  );
}
