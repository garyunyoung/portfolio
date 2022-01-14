import { ReactElement } from 'react'

interface Props {
  className: string
  link: string
  title: string
}

export function ButtonExternal(props: Props): ReactElement {
  return (
    <a
      className={props.className}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.title}
    </a>
  )
}

export function ButtonInternal(props: Props): ReactElement {
  return (
    <a className={props.className} href={props.link}>
      {props.title}
    </a>
  )
}
