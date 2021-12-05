import React from "react";

export function ButtonExternal(props) {
  return (
    <a className={props.className}
      href={props.link}
      target='_blank'
      rel='noopener noreferrer'
    >{props.linkName}</a>
  )
}

export function ButtonInternal(props) {
  return (
    <a className={props.className}
      href={props.link}
    >{props.linkName}</a>
  )
}