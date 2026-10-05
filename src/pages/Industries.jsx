import { industries } from '../data/industries.js'
import { useSEO } from '../hooks/useSEO.js'
import CtaBand from '../components/common/CtaBand.jsx'
import PageHero from '../components/common/PageHero.jsx'
import Reveal from '../components/common/Reveal.jsx'

export default function Industries() {
  useSEO({
    title: 'Industries',
    description:
      'The kinds of businesses Movyn Works can support, from restaurants and healthcare to startups, e-commerce and professional services.',
  })

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built around how your sector works."
        lead="Every business has its own customers, rules and rhythm. These are the kinds of businesses we can support, and how."
      />

      <section className="section" aria-label="Industries we can support">
        <div className="container">
          <ul className="industry-list">
            {industries.map(({ name, icon: Icon, help }, index) => (
              <Reveal as="li" key={name} index={index % 2} className="card industry-item">
                <span className="icon-box">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h2 className="h3">{name}</h2>
                  <p>{help}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <p className="industry-note">
            These describe how we can help, not a record of past clients. We shape each engagement around the
            needs of the business and its audience.
          </p>
        </div>
      </section>

      <CtaBand
        title="Don't see your sector?"
        text="The fundamentals of building a presence apply well beyond this list. Tell us about your business."
      />
    </>
  )
}
