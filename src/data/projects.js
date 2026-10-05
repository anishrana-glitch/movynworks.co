import asterCover from '../assets/work/aster-atelier-cover.svg'
import asterG1 from '../assets/work/aster-atelier-gallery-1.svg'
import asterG2 from '../assets/work/aster-atelier-gallery-2.svg'
import asterG3 from '../assets/work/aster-atelier-gallery-3.svg'
import harborCover from '../assets/work/harbor-pine-cover.svg'
import harborG1 from '../assets/work/harbor-pine-gallery-1.svg'
import harborG2 from '../assets/work/harbor-pine-gallery-2.svg'
import harborG3 from '../assets/work/harbor-pine-gallery-3.svg'
import meridianCover from '../assets/work/meridian-cover.svg'
import meridianG1 from '../assets/work/meridian-gallery-1.svg'
import meridianG2 from '../assets/work/meridian-gallery-2.svg'
import meridianG3 from '../assets/work/meridian-gallery-3.svg'
import northlineCover from '../assets/work/northline-cover.svg'
import northlineG1 from '../assets/work/northline-gallery-1.svg'
import northlineG2 from '../assets/work/northline-gallery-2.svg'
import northlineG3 from '../assets/work/northline-gallery-3.svg'

/*
 * Portfolio data.
 *
 * Every project below is a CONCEPT PROJECT: a self-initiated exercise for a
 * fictional brand. None is client work, so none carries results. When real
 * client projects are added, set `type: 'client'`, fill `outcome.verified`
 * with confirmed results only, and the UI will label them accordingly.
 */
export const projects = [
  {
    slug: 'aster-atelier',
    type: 'concept',
    name: 'Aster Atelier',
    category: 'E-commerce',
    services: ['E-commerce Development', 'Product Photography & Video', 'Photo Editing & Retouching'],
    summary: 'A concept online storefront for a fictional boutique label, built around calm, product-first browsing.',
    cover: { src: asterCover, alt: 'Concept storefront layout showing a grid of six product cards with placeholder imagery.' },
    gallery: [
      { src: asterG1, alt: 'Abstract concept layout of a web page: browser frame with a hero image, headline lines and three feature cards.' },
      { src: asterG2, alt: 'Abstract concept layout of an application: a phone screen with a calendar grid beside a desktop form.' },
      { src: asterG3, alt: 'Abstract concept brand board: a geometric mark, colour swatches and a text specimen.' },
    ],
    info: { projectType: 'Concept e-commerce storefront', deliverables: 'Storefront UI, product page and checkout concept' },
    challenge: 'Small fashion and lifestyle labels often struggle to make an online shop feel as considered as their products. The brief we set ourselves: a store that lets the product lead, keeps decisions simple and does not feel like a template.',
    approach: 'The concept starts from the shopper: how they browse, compare and commit. Navigation stays shallow, product imagery gets most of the screen and checkout is treated as a short, calm sequence rather than a form wall.',
    solution: 'A storefront system with a quiet collection grid, product pages that put photography first and a single-column checkout. A restrained palette keeps attention on the products.',
    execution: [
      'Mobile-first collection and product page layouts',
      'Photography direction and retouching guidelines for consistent product imagery',
      'A checkout reduced to the fewest steps that still feel trustworthy',
    ],
  },
  {
    slug: 'harbor-and-pine',
    type: 'concept',
    name: 'Harbor & Pine',
    category: 'Website Design',
    services: ['Website Design & Development', 'Professional Photography', 'SEO & Local SEO'],
    summary: 'A concept website for a fictional coastal stay, designed to turn a scenic first impression into an enquiry.',
    cover: { src: harborCover, alt: 'Concept website layout with a landscape hero image, headline and three feature cards.' },
    gallery: [
      { src: harborG1, alt: 'Abstract concept layout of an application: a phone screen with a calendar grid beside a desktop form.' },
      { src: harborG2, alt: 'Abstract concept layout of a product grid: six cards with simple shapes as placeholder products.' },
      { src: harborG3, alt: 'Abstract concept brand board: a geometric mark, colour swatches and a text specimen.' },
    ],
    info: { projectType: 'Concept hospitality website', deliverables: 'Website design, page templates and local search structure' },
    challenge: 'Hospitality websites win or lose in seconds. The brief: let imagery set the mood, then make the next step obvious, without burying practical details such as rooms, location and how to enquire.',
    approach: 'We planned the site around the questions a guest asks in order: where is it, what is it like, can I stay, how do I ask. Each page answers one of those and points to the next.',
    solution: 'A photography-led homepage, clear room and location pages and a persistent enquiry action. Page structure and headings follow how people search for local stays.',
    execution: [
      'Page templates for home, rooms, location and enquiry',
      'Image direction so photography feels consistent across pages',
      'Semantic structure and metadata planned for local search from the start',
    ],
  },
  {
    slug: 'meridian',
    type: 'concept',
    name: 'Meridian',
    category: 'Brand Identity',
    services: ['Brand Identity', 'Graphic Design', 'Social Media Creative Design'],
    summary: 'A concept identity system for a fictional advisory firm: mark, palette, type and usage rules.',
    cover: { src: meridianCover, alt: 'Concept brand board showing a geometric logo mark, a five-colour palette and a typography specimen.' },
    gallery: [
      { src: meridianG1, alt: 'Abstract concept layout of a web page: browser frame with a hero image, headline lines and three feature cards.' },
      { src: meridianG2, alt: 'Abstract concept layout of an application: a phone screen with a calendar grid beside a desktop form.' },
      { src: meridianG3, alt: 'Abstract concept layout of a product grid: six cards with simple shapes as placeholder products.' },
    ],
    info: { projectType: 'Concept brand identity', deliverables: 'Logo mark, colour system, typography and social templates' },
    challenge: 'Advisory and professional firms need to look established without looking generic. The brief: an identity that feels precise and trustworthy, and stays easy to apply across documents, web and social.',
    approach: 'We began with a single idea (direction and reference points) and tested it in the hardest places first: small sizes, one colour, dark and light backgrounds.',
    solution: 'A geometric mark, a restrained palette with one warm accent, a clear type pairing and a small set of rules for using them together.',
    execution: [
      'Mark exploration with size and single-colour tests',
      'A palette and type system documented for consistent use',
      'Social templates showing the system in everyday use',
    ],
  },
  {
    slug: 'northline',
    type: 'concept',
    name: 'Northline',
    category: 'Web Application',
    services: ['Web Application Development', 'Business Automation'],
    summary: 'A concept booking application for a fictional appointment-based business, with a calendar and clear intake form.',
    cover: { src: northlineCover, alt: 'Concept web application showing a mobile calendar view next to a desktop booking form.' },
    gallery: [
      { src: northlineG1, alt: 'Abstract concept layout of a web page: browser frame with a hero image, headline lines and three feature cards.' },
      { src: northlineG2, alt: 'Abstract concept layout of a product grid: six cards with simple shapes as placeholder products.' },
      { src: northlineG3, alt: 'Abstract concept brand board: a geometric mark, colour swatches and a text specimen.' },
    ],
    info: { projectType: 'Concept web application', deliverables: 'Booking flow, calendar interface and intake form' },
    challenge: 'Appointment-based businesses often juggle messages, calls and spreadsheets to manage bookings. The brief: a simple booking flow that is easy for customers and reduces manual follow-up for the business.',
    approach: 'We mapped the booking journey end to end, from choosing a day to confirmation, and removed every field and step that was not strictly needed.',
    solution: 'A calendar-first booking flow with a short intake form and a clear confirmation, designed so confirmations and reminders can be automated behind the scenes.',
    execution: [
      'A calendar and availability interface for phone and desktop',
      'An intake form with validation and clear error messages',
      'A confirmation and reminder flow outlined for automation',
    ],
  },
]

export const getProject = (slug) => projects.find((project) => project.slug === slug)
export const projectCategories = ['All', ...new Set(projects.map((project) => project.category))]
