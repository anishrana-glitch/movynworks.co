import { allServices, divisions } from '../data/services.js'
import { useSEO } from '../hooks/useSEO.js'
import CtaBand from '../components/common/CtaBand.jsx'
import PageHero from '../components/common/PageHero.jsx'
import Reveal from '../components/common/Reveal.jsx'

export default function Services() {
  useSEO({
    title: 'Services',
    description:
      'Twenty services across four divisions: Movyn Tech, Movyn Creative, Movyn Marketing and Movyn Growth. Websites, video, photography, brand, ads, SEO and growth strategy.',
  })

  const numberOf = (title) => allServices.find((service) => service.title === title).number

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Twenty services. Four divisions. One team."
        lead="Technology, creative production, marketing and growth, available individually or planned together."
      />

      <nav className="jump-nav" aria-label="Jump to a division">
        <div className="container">
          <ul className="jump-nav__list">
            {divisions.map((division) => (
              <li key={division.id}>
                <a href={`#${division.id}`} className="jump-nav__link">
                  {division.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {divisions.map((division, divisionIndex) => {
        const Icon = division.icon
        return (
          <section
            key={division.id}
            id={division.id}
            className={`section division ${divisionIndex > 0 ? 'section--bordered' : ''}`.trim()}
            aria-labelledby={`${division.id}-title`}
          >
            <div className="container split">
              <div className="split__sticky">
                <Reveal className="split__head">
                  <span className="icon-box">
                    <Icon aria-hidden="true" />
                  </span>
                  <h2 id={`${division.id}-title`} className="h2">
                    {division.name}
                  </h2>
                  <p className="lead">{division.summary}</p>
                </Reveal>
              </div>
              <ul className="service-list">
                {division.services.map((service, index) => {
                  return (
                    <Reveal as="li" key={service.title} index={index % 4} className="service-row">
                      <span className="service-row__num">{String(numberOf(service.title)).padStart(2, '0')}</span>
                      <div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    </Reveal>
                  )
                })}
              </ul>
            </div>
          </section>
        )
      })}

      <CtaBand
        title="Not sure which service you need?"
        text="Describe what you are trying to achieve and we will suggest where to start."
        secondary={{ label: 'See how we work', to: '/process' }}
      />
    </>
  )
}
