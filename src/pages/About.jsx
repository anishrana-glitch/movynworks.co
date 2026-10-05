import { divisions } from '../data/services.js'
import { useSEO } from '../hooks/useSEO.js'
import CtaBand from '../components/common/CtaBand.jsx'
import PageHero from '../components/common/PageHero.jsx'
import Reveal from '../components/common/Reveal.jsx'

const principles = [
  {
    title: 'Clarity over noise',
    text: 'We say things plainly and design things to be easy to use. If something does not help the audience or the business, it does not ship.',
  },
  {
    title: 'Craft over volume',
    text: 'Fewer things, made carefully. Detail, consistency and performance matter more to us than the length of a deliverables list.',
  },
  {
    title: 'Honesty about results',
    text: 'We publish only outcomes we can verify, label concept work as concept work and do not dress up what we have not done.',
  },
  {
    title: 'Built to last',
    text: 'Accessible, fast and maintainable by default, so what we make keeps working for the people who own it.',
  },
]

function Row({ id, label, children }) {
  return (
    <section className="section section--bordered" aria-labelledby={id}>
      <div className="container split">
        <Reveal className="split__head split__sticky">
          <h2 id={id} className="h2">
            {label}
          </h2>
        </Reveal>
        <Reveal className="stack">{children}</Reveal>
      </div>
    </section>
  )
}

export default function About() {
  useSEO({
    title: 'About',
    description:
      'Movyn Works is a full-service technology, creative, marketing and business growth company. Learn what we do, why we exist and how our teams work together.',
  })

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Technology, creativity and growth under one roof."
        lead="Movyn Works is a full-service technology, creative, marketing and business growth company."
      />

      <Row id="what" label="What Movyn is">
        <p>
          We help businesses build their digital presence, create impactful content, reach their audience and
          grow. That work is organised into four divisions: Movyn Tech, Movyn Creative, Movyn Marketing and
          Movyn Growth.
        </p>
        <p>
          The divisions are separate disciplines, but they share a team, a process and a plan, so a client can
          start in one place and bring in the others as they need them.
        </p>
      </Row>

      <Row id="why" label="Why it exists">
        <p>
          A business usually needs a website, content, advertising and a way to turn attention into enquiries.
          Too often each of those is a different supplier with a different brief, and the pieces never quite fit
          together.
        </p>
        <p>
          Movyn exists to bring those disciplines into one team, so the work is consistent and everyone is
          pulling in the same direction.
        </p>
      </Row>

      <Row id="does" label="What it does">
        <ul className="division-list">
          {divisions.map((division) => (
            <li key={division.id}>
              <strong>{division.name}</strong>
              <span>{division.summary}</span>
            </li>
          ))}
        </ul>
      </Row>

      <Row id="together" label="How teams work together">
        <p>
          Each project starts from a shared plan. Developers, designers, producers and marketers work from the
          same brief, review one another&rsquo;s work and share the same goals.
        </p>
        <p>
          A website is built knowing what content it will carry. A campaign is planned knowing where visitors
          will land. That is what working under one roof is for.
        </p>
      </Row>

      <section className="section section--bordered section--raised" aria-labelledby="philosophy">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Philosophy</span>
            <h2 id="philosophy" className="h2">
              How we think about the work.
            </h2>
          </Reveal>
          <ul className="principles">
            {principles.map((principle, index) => (
              <Reveal as="li" key={principle.title} index={index % 2} className="card principle">
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Row id="vision" label="Long-term vision">
        <p>
          We want to be the team a business can grow with: one that can start with a website or a video and, over
          time, take on more of the work of building, marketing and growing.
        </p>
        <p>
          The aim is for a business never to have to start again from scratch with someone new, because the people
          who know it best are already part of the work.
        </p>
      </Row>

      <CtaBand />
    </>
  )
}
