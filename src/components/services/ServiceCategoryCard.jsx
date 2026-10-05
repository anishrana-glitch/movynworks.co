import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../common/Reveal.jsx'

/** One of the four service divisions, as shown on the homepage. */
export default function ServiceCategoryCard({ division, index = 0 }) {
  const { id, name, icon: Icon, summary, services } = division
  return (
    <Reveal as="article" index={index} className={`card cat-card cat-card--${id}`} aria-labelledby={`cat-${id}`}>
      <div className="cat-card__intro">
        <div className="cat-card__title">
          <span className="icon-box">
            <Icon aria-hidden="true" />
          </span>
          <h3 id={`cat-${id}`} className="h3">
            {name}
          </h3>
        </div>
        <p>{summary}</p>
      </div>
      <div className="cat-card__body">
        <ul className="cat-card__list">
          {services.map((service) => (
            <li key={service.title}>{service.title}</li>
          ))}
        </ul>
        <Link to={`/services#${id}`} className="text-link" aria-label={`Explore ${name}`}>
          Explore <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </Reveal>
  )
}
