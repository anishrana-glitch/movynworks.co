import { divisions } from '../../data/services.js'
import SectionHead from '../common/SectionHead.jsx'
import ServiceCategoryCard from '../services/ServiceCategoryCard.jsx'

const byId = Object.fromEntries(divisions.map((division) => [division.id, division]))
// Balanced columns on tablet and desktop; on mobile CSS restores the original order.
const columns = [
  ['tech', 'marketing'],
  ['creative', 'growth'],
]

export default function ServicesOverview() {
  return (
    <section id="services" className="section section--raised" aria-labelledby="services-title">
      <div className="container">
        <SectionHead
          id="services-title"
          eyebrow="Services"
          title="Twenty services across four divisions."
          lead="Work with one division or bring them together. Each service is delivered by a team that knows how it fits with the rest."
          split
        />
        <div className="cat-grid">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="cat-col">
              {column.map((id) => (
                <ServiceCategoryCard key={id} division={byId[id]} index={columnIndex} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
