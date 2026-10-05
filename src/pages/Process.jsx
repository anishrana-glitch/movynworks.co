import { useSEO } from '../hooks/useSEO.js'
import CtaBand from '../components/common/CtaBand.jsx'
import PageHero from '../components/common/PageHero.jsx'
import ProcessTimeline from '../components/home/ProcessTimeline.jsx'

export default function Process() {
  useSEO({
    title: 'Process',
    description:
      'How Movyn Works works: five stages from discovery and strategy through creation and launch to ongoing growth.',
  })

  return (
    <>
      <PageHero
        eyebrow="Process"
        title="From first conversation to ongoing growth."
        lead="Five stages that keep technology, creative and marketing work moving together."
      />
      <section className="section" aria-label="The five stages">
        <div className="container">
          <ProcessTimeline variant="detailed" />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
