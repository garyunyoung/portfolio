import { ReactElement } from 'react'
import '../../styles/Links.scss'

interface Props {
  className: string
  style: 'link' | 'button' | 'link-button'
  href: string
  text: string
}
export function LinkExternal({
  className,
  style,
  href,
  text
}: Props): ReactElement {
  return (
    <a
      className={`link-style--${style} ${className}`}
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
  style,
  href,
  text
}: Props): ReactElement {
  return (
    <a
      className={`link-style--${style} ${className}`}
      href={href}
    >
      {text}
    </a>
  )
}
