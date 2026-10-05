import Button from '../common/Button.jsx'
import Reveal from '../common/Reveal.jsx'

const pillars = [
  {
    title: 'One team, one plan',
    text: 'Specialists in technology, creative and marketing work from a shared plan instead of separate briefs.',
  },
  {
    title: 'Built to work together',
    text: 'Websites, content and campaigns are designed as parts of one system, so each makes the others stronger.',
  },
  {
    title: 'Plain about what we do',
    text: 'We describe our work honestly and only publish results that we can verify.',
  },
]

export default function AboutPreview() {
  return (
    <section className="section" aria-labelledby="about-title">
      <div className="container about-preview">
        <Reveal className="about-preview__copy">
          <span className="eyebrow">About Movyn</span>
          <h2 id="about-title" className="h2">
            Technology, creativity and growth under one roof.
          </h2>
          <p className="lead">
            Movyn Works is a full-service technology, creative, marketing and business growth
            company. We help businesses build their digital presence, create impactful content, reach
            their audience and grow.
          </p>
          <div>
            <Button to="/about" variant="secondary">
              About Movyn
            </Button>
          </div>
        </Reveal>

        <ul className="pillars">
          {pillars.map((pillar, index) => (
            <Reveal as="li" key={pillar.title} index={index} className="pillar">
              <span className="pillar__num">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
