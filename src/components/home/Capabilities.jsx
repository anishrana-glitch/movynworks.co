import { capabilities } from '../../data/capabilities.js'
import Reveal from '../common/Reveal.jsx'
import SectionHead from '../common/SectionHead.jsx'

export default function Capabilities() {
  return (
    <section className="section" aria-labelledby="capabilities-title">
      <div className="container">
        <SectionHead
          id="capabilities-title"
          eyebrow="Capabilities"
          title="Four capabilities, one team."
          lead="Building a presence, making content, reaching people and turning interest into enquiries are usually handled separately. At Movyn they are planned together."
        />
        <ul className="capabilities">
          {capabilities.map(({ id, label, statement, icon: Icon }, index) => (
            <Reveal as="li" key={id} index={index} className="capability">
              <div className="capability__top">
                <span>{label}</span>
                <Icon aria-hidden="true" />
              </div>
              <h3>{statement}</h3>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
