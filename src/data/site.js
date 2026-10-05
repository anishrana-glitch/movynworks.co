// Central site configuration. Nothing here is invented: contact details are
// intentionally absent until the business provides them.

export const site = {
  name: 'Movyn Works',
  shortName: 'Movyn',
  tagline: 'Technology • Creative • Marketing • Growth',
  description:
    'Movyn Works brings technology, creative production, digital marketing and growth solutions together to help businesses build, market and grow.',
  // Set VITE_SITE_URL (e.g. https://www.example.com) at build time so canonical
  // and Open Graph URLs are absolute. Falls back to the current origin.
  url: (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, ''),
  ogImage: '/og-image.png',
  // Contact form destination (e.g. a Formspree / Basin / custom endpoint).
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
  // Legal pages show a "needs review" notice until this is set to false.
  legalDraft: true,
}
