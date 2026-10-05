import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/** Primary / secondary button that renders a router link, anchor or button. */
export default function Button({
  to,
  href,
  variant = 'primary',
  size,
  arrow = true,
  className = '',
  children,
  ...rest
}) {
  const classes = ['btn', `btn--${variant}`, size ? `btn--${size}` : '', className].filter(Boolean).join(' ')
  const content = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden="true" />}
    </>
  )
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
