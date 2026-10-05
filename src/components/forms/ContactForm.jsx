import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoaderCircle, Send } from 'lucide-react'
import { divisions } from '../../data/services.js'
import { site } from '../../data/site.js'
import Field from './Field.jsx'
import { normaliseWebsite, rules, validateAll } from './validation.js'

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  website: '',
  service: '',
  budget: '',
  details: '',
}

// Deliberately currency-neutral: exact figures are discussed after the first conversation.
const budgetRanges = [
  'Small project',
  'Mid-sized project',
  'Large project',
  'Ongoing monthly support',
  'Not sure yet',
]

const fieldLabels = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  website: 'Website',
  company: 'Company',
  service: 'Service',
  budget: 'Budget range',
  details: 'Project details',
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const [honeypot, setHoneypot] = useState('')
  const summaryRef = useRef(null)
  const statusRef = useRef(null)

  const submitting = status.state === 'submitting'

  const validateField = (field, value) => {
    const message = rules[field](value)
    setErrors((current) => {
      const next = { ...current }
      if (message) next[field] = message
      else delete next[field]
      return next
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (touched[name]) validateField(name, value)
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
    validateField(name, value)
  }

  const focusField = (event, field) => {
    event.preventDefault()
    document.getElementById(field)?.focus()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitting) return

    const found = validateAll(values)
    setErrors(found)
    setTouched(Object.fromEntries(Object.keys(values).map((field) => [field, true])))

    if (Object.keys(found).length) {
      setStatus({ state: 'invalid', message: '' })
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }

    // Bots fill hidden fields; pretend it worked and send nothing.
    if (honeypot) {
      setStatus({ state: 'success', message: '' })
      return
    }

    if (!site.formEndpoint) {
      setStatus({
        state: 'error',
        message: import.meta.env.DEV
          ? 'The form is valid, but no destination is configured yet. Set VITE_FORM_ENDPOINT to the URL that should receive submissions.'
          : 'Sorry, we could not send your message right now. Please try again later.',
      })
      requestAnimationFrame(() => statusRef.current?.focus())
      return
    }

    setStatus({ state: 'submitting', message: '' })
    try {
      const response = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...values,
          name: values.name.trim(),
          email: values.email.trim(),
          website: normaliseWebsite(values.website),
          details: values.details.trim(),
        }),
      })
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
      setValues(initialValues)
      setErrors({})
      setTouched({})
      setStatus({ state: 'success', message: '' })
      requestAnimationFrame(() => statusRef.current?.focus())
    } catch {
      setStatus({
        state: 'error',
        message: 'Sorry, something went wrong and your message was not sent. Please try again.',
      })
      requestAnimationFrame(() => statusRef.current?.focus())
    }
  }

  if (status.state === 'success') {
    return (
      <div className="form__status form__status--success" role="status" tabIndex={-1} ref={statusRef}>
        <h2>Thank you, your message has been sent.</h2>
        <p>We will review the details and get back to you.</p>
      </div>
    )
  }

  const errorEntries = Object.entries(errors)

  return (
    <form className="form" onSubmit={handleSubmit} noValidate aria-label="Start a project">
      {status.state === 'invalid' && errorEntries.length > 0 && (
        <div className="form__summary" role="alert" tabIndex={-1} ref={summaryRef}>
          <h2>Please fix the following {errorEntries.length === 1 ? 'field' : 'fields'}:</h2>
          <ul>
            {errorEntries.map(([field, message]) => (
              <li key={field}>
                <a href={`#${field}`} onClick={(event) => focusField(event, field)}>
                  {fieldLabels[field]}
                </a>
                : {message}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="form__grid">
        <Field id="name" label="Name" required autoComplete="name" value={values.name} onChange={handleChange} onBlur={handleBlur} error={errors.name} />
        <Field id="company" label="Company" optional autoComplete="organization" value={values.company} onChange={handleChange} onBlur={handleBlur} error={errors.company} />
        <Field id="email" label="Email" required type="email" autoComplete="email" inputMode="email" value={values.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} />
        <Field id="phone" label="Phone" optional type="tel" autoComplete="tel" inputMode="tel" value={values.phone} onChange={handleChange} onBlur={handleBlur} error={errors.phone} />
        <Field id="website" label="Website" optional type="text" autoComplete="url" inputMode="url" placeholder="example.com" value={values.website} onChange={handleChange} onBlur={handleBlur} error={errors.website} />

        <Field as="select" id="service" label="Service" required value={values.service} onChange={handleChange} onBlur={handleBlur} error={errors.service}>
          <option value="">Select a service</option>
          {divisions.map((division) => (
            <optgroup key={division.id} label={division.name}>
              {division.services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </optgroup>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </Field>

        <Field
          as="select"
          id="budget"
          label="Budget range"
          required
          hint="Pick the closest fit. We will talk through scope and cost with you."
          value={values.budget}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.budget}
          full
        >
          <option value="">Select a budget range</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </Field>

        <Field
          as="textarea"
          id="details"
          label="Project details"
          required
          full
          rows={6}
          hint="What are you trying to achieve? Include timelines or links if you have them."
          value={values.details}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.details}
        />
      </div>

      {/* Honeypot field: hidden from people and assistive tech */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="company-url">Leave this field empty</label>
        <input id="company-url" name="company-url" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />
      </div>

      {status.state === 'error' && (
        <div className="form__status" role="alert" tabIndex={-1} ref={statusRef}>
          {status.message}
        </div>
      )}

      <div className="form__footer">
        <button type="submit" className="btn btn--primary" disabled={submitting} aria-busy={submitting}>
          {submitting ? (
            <>
              Sending
              <LoaderCircle aria-hidden="true" style={{ animation: 'spin 1s linear infinite' }} />
            </>
          ) : (
            <>
              Send message
              <Send aria-hidden="true" />
            </>
          )}
        </button>

      </div>
    </form>
  )
}
