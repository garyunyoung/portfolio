import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleNav() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <section className="header__wrapper">
            <NavLink className='header__title' to="/">
              {this.state.isOpen ? 'garyun' : this.props.title}
            </NavLink>
            <div className="hamburger" onClick={() => this.toggleNav()}>
              <div className="hamburger__line hamburger__line--1" />
              <div className="hamburger__line hamburger__line--2" />
              <div className="hamburger__line hamburger__line--3" />
            </div>
          </section>
        </header>
        <Nav open={this.state.isOpen} />
      </React.Fragment>
    );
  }
}


