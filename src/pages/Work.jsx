import { useState } from 'react'
import { Info } from 'lucide-react'
import { projectCategories, projects } from '../data/projects.js'
import { useSEO } from '../hooks/useSEO.js'
import CtaBand from '../components/common/CtaBand.jsx'
import PageHero from '../components/common/PageHero.jsx'
import ProjectCard from '../components/work/ProjectCard.jsx'

export default function Work() {
  useSEO({
    title: 'Work',
    description:
      'Selected concept projects from Movyn Works showing our approach to websites, e-commerce, brand identity and web applications.',
  })

  const [category, setCategory] = useState('All')
  const visible = category === 'All' ? projects : projects.filter((project) => project.category === category)

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="How we approach a brief."
        lead="A portfolio system built to show design, build and brand work. Projects are labelled honestly, and only verified outcomes are ever published for real clients."
      />

      <section className="section" aria-label="Projects">
        <div className="container">
          <p className="work-note">
            <Info aria-hidden="true" />
            <span>
              Every project below is a <strong>concept project</strong>: self-initiated work for a fictional
              brand. None are client engagements, and none carry results.
            </span>
          </p>

          <div className="filter" role="group" aria-label="Filter projects by category">
            {projectCategories.map((name) => (
              <button
                key={name}
                type="button"
                className="filter__btn"
                aria-pressed={category === name}
                onClick={() => setCategory(name)}
              >
                {name}
              </button>
            ))}
          </div>

          <p className="visually-hidden" role="status">
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          </p>
          <div className="work-grid">
            {visible.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Want to see your project here?" text="Tell us about it and we will talk through how we would approach it." />
    </>
  )
}
