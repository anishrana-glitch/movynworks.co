import { CircleAlert } from 'lucide-react'

/**
 * Accessible form field: visible label, hint and error wired up with
 * aria-describedby, and aria-invalid when there is an error.
 */
export default function Field({
  as: Control = 'input',
  id,
  label,
  required = false,
  optional = false,
  hint,
  error,
  full = false,
  children,
  ...controlProps
}) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={`field ${full ? 'field--full' : ''}`.trim()}>
      <label className="field__label" htmlFor={id}>
        {label}
        {required && (
          <span className="required" aria-hidden="true">
            *
          </span>
        )}
        {optional && <span className="optional">(optional)</span>}
      </label>
      <Control
        id={id}
        name={id}
        className="field__control"
        aria-required={required || undefined}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy}
        {...controlProps}
      >
        {children}
      </Control>
      {hint && (
        <p id={hintId} className="field__hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="field__error">
          <CircleAlert aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}
