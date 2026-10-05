import { industries } from '../../data/industries.js'
import Button from '../common/Button.jsx'
import Reveal from '../common/Reveal.jsx'
import SectionHead from '../common/SectionHead.jsx'

export default function IndustriesGrid() {
  return (
    <section className="section section--raised" aria-labelledby="industries-title">
      <div className="container">
        <SectionHead
          id="industries-title"
          eyebrow="Industries"
          title="Built around how your sector works."
          lead="Every business has its own customers and its own constraints. Here are the kinds of businesses we can support."
          split
        />
        <ul className="industry-grid">
          {industries.map(({ name, icon: Icon }, index) => (
            <Reveal as="li" key={name} index={index % 5} className="industry-tile">
              <Icon aria-hidden="true" />
              {name}
            </Reveal>
          ))}
        </ul>
        <p className="industry-note">We shape each engagement around the needs of the business and its audience.</p>
        <div className="section-foot">
          <Button to="/industries" variant="secondary">
            How we can help
          </Button>
        </div>
      </div>
    </section>
  )
}
