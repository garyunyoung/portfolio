import { ReactElement } from 'react'
import '../../styles/Links.scss'

interface Props {
  className: string
  type: 'link' | 'button' | 'link-button'
  href: string
  text: string
}
export function LinkExternal({
  className,
  type,
  href,
  text
}: Props): ReactElement {
  return (
    <a
      className={`link--${type} ${className}`}
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
  type,
  href,
  text
}: Props): ReactElement {
  return (
    <a className={`link--${type} ${className}`} href={href}>
      {text}
    </a>
  )
}
