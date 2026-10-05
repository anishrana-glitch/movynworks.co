import { useReveal } from '../../hooks/useReveal.js'

/** Fades and lifts its children into view once. `index` staggers siblings. */
export default function Reveal({ as: Tag = 'div', index = 0, className = '', style, children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} style={{ '--i': index, ...style }} {...rest}>
      {children}
    </Tag>
  )
}
