import React from "react";
import "./Header.scss";

export default function Header(props) {
  return (
    <h1 className="header">{props.title}</h1>
  );
}
