import React from "react";

export function LinkExternal(props) {
  return (
    <a className={props.className}
      href={props.link}
      target='_blank'
      rel='noopener noreferrer'
    >{props.title}</a>
  )
}

export function LinkInternal(props) {
  return (
    <a className={props.className}
      href={props.link}
    >{props.title}</a>
  )
}