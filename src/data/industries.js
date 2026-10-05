import {
  UtensilsCrossed,
  HeartPulse,
  GraduationCap,
  Building2,
  Rocket,
  ShoppingBag,
  Store,
  UserRound,
  Briefcase,
  ConciergeBell,
} from 'lucide-react'

// "How we can help" lines describe what Movyn can offer a sector. They are not
// claims of past work or sector expertise.
export const industries = [
  { name: 'Restaurants & Cafés', icon: UtensilsCrossed, help: 'Menu-led websites, food photography and local search visibility.' },
  { name: 'Healthcare', icon: HeartPulse, help: 'Clear, accessible websites and patient-friendly information design.' },
  { name: 'Education', icon: GraduationCap, help: 'Course and enrolment sites, explainer video and admissions marketing.' },
  { name: 'Real Estate', icon: Building2, help: 'Listing-focused sites, property photography and lead generation.' },
  { name: 'Startups', icon: Rocket, help: 'A launch-ready brand, website and first marketing channels.' },
  { name: 'E-commerce', icon: ShoppingBag, help: 'Storefronts, product imagery and paid and organic acquisition.' },
  { name: 'Retail', icon: Store, help: 'Online presence, product content and campaigns that support the shop floor.' },
  { name: 'Personal Brands', icon: UserRound, help: 'Portfolio sites, portraits, content and a consistent identity.' },
  { name: 'Professional Services', icon: Briefcase, help: 'Credible websites, thought-leadership content and enquiry funnels.' },
  { name: 'Hospitality', icon: ConciergeBell, help: 'Booking-ready sites, venue photography and seasonal campaigns.' },
]
