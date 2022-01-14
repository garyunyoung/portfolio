import { ReactElement } from 'react'

interface Props {
  className: string
  href: string
  text: string
}

export function ButtonExternal({
  className,
  href,
  text
}: Props): ReactElement {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}

export function ButtonInternal({
  className,
  href,
  text
}: Props): ReactElement {
  return (
    <a className={className} href={href}>
      {text}
    </a>
  )
}
