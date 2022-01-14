import { ReactElement } from 'react'

interface Props {
  className: string
  href: string
  text: string
}
export function LinkExternal({
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

export function LinkInternal({
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
