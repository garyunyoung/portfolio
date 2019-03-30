import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home">
      <section className="home__top">
        <h1 className="home__hello">
          he
          <br />
          llo
        </h1>
        <h1 className="home__garyun">i'm garyun</h1>
      </section>
      <section className="home__mid">
        <h1 className="home__front">
          front end <br />
          developer
        </h1>
        <h1 className="home__london">london,uk</h1>
      </section>
      <section className="home__bottom">
        <h1 className="home__projects">projects</h1>
        <h1 className="home__about">about</h1>
        <h1 className="home__cv">cv</h1>
      </section>
    </section>
  );
}
