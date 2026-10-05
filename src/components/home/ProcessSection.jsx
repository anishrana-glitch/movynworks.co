import Button from '../common/Button.jsx'
import SectionHead from '../common/SectionHead.jsx'
import ProcessTimeline from './ProcessTimeline.jsx'

export default function ProcessSection() {
  return (
    <section className="section section--raised" aria-labelledby="process-title">
      <div className="container">
        <SectionHead
          id="process-title"
          eyebrow="Process"
          title="Five stages, from first conversation to ongoing growth."
          split
        />
        <ProcessTimeline />
        <div className="section-foot">
          <Button to="/process" variant="secondary">
            See the full process
          </Button>
        </div>
      </div>
    </section>
  )
}
