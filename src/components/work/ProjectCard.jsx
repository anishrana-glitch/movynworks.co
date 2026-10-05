import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../common/Reveal.jsx'

/** Portfolio card. Concept projects are always labelled as such. */
export default function ProjectCard({ project, index = 0 }) {
  const { slug, name, category, services, summary, cover, type } = project
  return (
    <Reveal as="article" index={index % 2} className="card project-card" aria-labelledby={`project-${slug}`}>
      <div className="project-card__media">
        <img
          src={cover.src}
          alt={cover.alt}
          width="1600"
          height="1000"
          loading="lazy"
          decoding="async"
        />
        {type === 'concept' && <span className="badge">Concept Project</span>}
      </div>
      <div className="project-card__body">
        <span className="project-card__category">{category}</span>
        <h3 id={`project-${slug}`} className="h3">
          {name}
        </h3>
        <ul className="tag-list" aria-label="Services">
          {services.map((service) => (
            <li key={service} className="tag">
              {service}
            </li>
          ))}
        </ul>
        <p>{summary}</p>
        <Link to={`/work/${slug}`} className="text-link">
          View Case Study <ArrowRight aria-hidden="true" />
          <span className="visually-hidden"> for {name}</span>
        </Link>
      </div>
    </Reveal>
  )
}
