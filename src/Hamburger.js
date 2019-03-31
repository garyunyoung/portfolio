import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import "./Hamburger.scss";

export default class Hamburger extends React.Component {
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
          <div className="hamburger" onClick={() => this.toggleNav()}>
            <div className="hamburger__line hamburger__line--1" />
            <div className="hamburger__line hamburger__line--2" />
            <div className="hamburger__line hamburger__line--3" />
          </div>
        <Nav open={this.state.isOpen} />
      </React.Fragment>
    );
  }
}

// function Title(props) {
//   return (
//     <NavLink className="header__title" to="/">
//       {this.state.isOpen ? "garyun" : this.props.title}
//     </NavLink>
//   );
// }
