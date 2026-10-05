import Reveal from './Reveal.jsx'

/** Eyebrow + h2 + optional lead, used at the top of every home section. */
export default function SectionHead({ id, eyebrow, title, lead, split = false }) {
  return (
    <Reveal className={`section-head ${split ? 'section-head--split' : ''}`.trim()}>
      <div className="stack" style={{ gap: 20 }}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 id={id} className="h2">
          {title}
        </h2>
      </div>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  )
}
