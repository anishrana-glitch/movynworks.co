// Field rules for the contact form. Each rule returns an error string or ''.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function normaliseWebsite(value) {
  const trimmed = value.trim()
  if (!trimmed) return ''
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
}

export const rules = {
  name(value) {
    const v = value.trim()
    if (!v) return 'Enter your name.'
    if (v.length < 2) return 'Your name must be at least 2 characters.'
    if (v.length > 100) return 'Your name must be 100 characters or fewer.'
    return ''
  },
  company(value) {
    return value.trim().length > 120 ? 'Company name must be 120 characters or fewer.' : ''
  },
  email(value) {
    const v = value.trim()
    if (!v) return 'Enter your email address.'
    if (v.length > 254 || !EMAIL.test(v)) return 'Enter a valid email address, for example name@company.com.'
    return ''
  },
  phone(value) {
    const v = value.trim()
    if (!v) return ''
    const digits = v.replace(/\D/g, '')
    if (!/^\+?[\d\s().-]+$/.test(v) || digits.length < 7 || digits.length > 15) {
      return 'Enter a valid phone number, including the country code if outside your region.'
    }
    return ''
  },
  website(value) {
    const v = value.trim()
    if (!v) return ''
    if (/\s/.test(v)) return 'Enter a valid website address, for example example.com.'
    try {
      const url = new URL(normaliseWebsite(v))
      if (!/^https?:$/.test(url.protocol) || !url.hostname.includes('.') || url.hostname.endsWith('.')) {
        return 'Enter a valid website address, for example example.com.'
      }
    } catch {
      return 'Enter a valid website address, for example example.com.'
    }
    return ''
  },
  service(value) {
    return value ? '' : 'Choose the service you are interested in.'
  },
  budget(value) {
    return value ? '' : 'Choose a budget range.'
  },
  details(value) {
    const v = value.trim()
    if (!v) return 'Tell us a little about your project.'
    if (v.length < 20) return `Add a little more detail (${20 - v.length} more characters).`
    if (v.length > 3000) return 'Project details must be 3000 characters or fewer.'
    return ''
  },
}

export function validateAll(values) {
  const errors = {}
  Object.keys(rules).forEach((field) => {
    const message = rules[field](values[field] ?? '')
    if (message) errors[field] = message
  })
  return errors
}
