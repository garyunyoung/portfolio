import React from "react";
import "./Nav.scss";

export default class Nav extends React.Component {
  render() {
    return (
      <section className="header">
        <h1 className="header__title">garyun young</h1>
        <div>
          <ul className="nav">
            <li className="nav__item">projects</li>
            <li className="nav__item">about</li>
            <li className="nav__item">cv</li>
          </ul>
        </div>
      </section>
    );
  }
}
