import { Info } from 'lucide-react'
import { projects } from '../../data/projects.js'
import Button from '../common/Button.jsx'
import SectionHead from '../common/SectionHead.jsx'
import ProjectCard from '../work/ProjectCard.jsx'

export default function SelectedWork() {
  return (
    <section className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHead
          id="work-title"
          eyebrow="Selected Work"
          title="How we approach a brief."
          lead="A look at how we think about design, build and brand."
          split
        />
        <p className="work-note">
          <Info aria-hidden="true" />
          <span>
            The projects below are <strong>concept projects</strong>: self-initiated work for fictional
            brands, shown to illustrate our approach. They are not client engagements and carry no
            results.
          </span>
        </p>
        <div className="work-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="section-foot">
          <Button to="/work" variant="secondary">
            View all work
          </Button>
        </div>
      </div>
    </section>
  )
}
