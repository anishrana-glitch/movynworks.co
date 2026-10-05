import { Code, Clapperboard, Megaphone, TrendingUp } from 'lucide-react'

// Four divisions, twenty services. Descriptions explain what each service is;
// they make no claims about past results.
export const divisions = [
  {
    id: 'tech',
    name: 'Movyn Tech',
    icon: Code,
    summary: 'Websites, stores, applications and automation, built as reliable digital infrastructure.',
    services: [
      { title: 'Website Design & Development', description: 'Fast, accessible websites designed around how your business presents itself and how visitors decide.' },
      { title: 'E-commerce Development', description: 'Online stores with clear catalogues, simple checkout flows and the tooling to manage products.' },
      { title: 'Web Application Development', description: 'Custom web applications, portals and internal tools for processes that off-the-shelf software does not fit.' },
      { title: 'AI Solutions & Chatbots', description: 'Practical AI features and chatbots for support, enquiries and everyday knowledge work.' },
      { title: 'Business Automation', description: 'Connecting the tools you already use so repetitive tasks, hand-offs and reporting run on their own.' },
    ],
  },
  {
    id: 'creative',
    name: 'Movyn Creative',
    icon: Clapperboard,
    summary: 'Video, photography, design and brand work that gives a business a consistent, memorable look.',
    services: [
      { title: 'Video Editing', description: 'Editing, pacing, sound and finishing for brand, product and social video.' },
      { title: 'Promotional Reels Production', description: 'Short-form vertical video planned and produced for social platforms.' },
      { title: 'Professional Photography', description: 'Portraits, spaces and brand photography with a consistent visual style.' },
      { title: 'Product Photography & Video', description: 'Clean, detailed product imagery and motion for catalogues, listings and campaigns.' },
      { title: 'Corporate & Event Video', description: 'Coverage and edited films for company communications, launches and events.' },
      { title: 'Photo Editing & Retouching', description: 'Colour, cleanup and retouching so images look polished and consistent.' },
      { title: 'Graphic Design', description: 'Layouts and graphics for print and digital, from brochures to presentations.' },
      { title: 'Brand Identity', description: 'Logos, colour, typography and guidelines that make a brand easy to recognise and use.' },
      { title: 'Social Media Creative Design', description: 'Templates and post designs that keep a social presence cohesive.' },
    ],
  },
  {
    id: 'marketing',
    name: 'Movyn Marketing',
    icon: Megaphone,
    summary: 'Content, social, search and paid media that put the right message in front of the right people.',
    services: [
      { title: 'Social Media Management', description: 'Planning, publishing and community management across your social channels.' },
      { title: 'Content Strategy & Creation', description: 'A clear content plan and the written, visual and video content to support it.' },
      { title: 'Meta Ads', description: 'Paid campaigns on Facebook and Instagram, from audience and creative to optimisation.' },
      { title: 'Google Ads / PPC', description: 'Search and display campaigns built around intent, budget and measurable goals.' },
      { title: 'SEO & Local SEO', description: 'Technical, content and local search work so customers can find you when they look.' },
    ],
  },
  {
    id: 'growth',
    name: 'Movyn Growth',
    icon: TrendingUp,
    summary: 'Strategy that connects visibility to enquiries, so attention turns into opportunities.',
    services: [
      { title: 'Lead Generation & Digital Growth Strategy', description: 'A plan that links your website, content and campaigns to a repeatable flow of enquiries.' },
    ],
  },
]

// Flat numbered list (1–20), handy for the contact form and the services page.
export const allServices = divisions.flatMap((division) =>
  division.services.map((service) => ({ ...service, divisionId: division.id, divisionName: division.name })),
).map((service, index) => ({ ...service, number: index + 1 }))
