import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getProject, projects } from '../data/projects.js'
import { useSEO } from '../hooks/useSEO.js'
import CtaBand from '../components/common/CtaBand.jsx'
import Reveal from '../components/common/Reveal.jsx'
import NotFound from './NotFound.jsx'

function Block({ id, title, children }) {
  return (
    <Reveal as="section" className="case-block" aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      <div className="stack">{children}</div>
    </Reveal>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)

  useSEO({
    title: project ? `${project.name} (${project.type === 'concept' ? 'Concept Project' : 'Case Study'})` : 'Project not found',
    description: project?.summary,
    image: project?.cover.src,
    type: 'article',
    noindex: !project,
  })

  if (!project) return <NotFound />

  const isConcept = project.type === 'concept'
  const index = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(index + 1) % projects.length]
  const verified = project.outcome?.verified

  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <div className="page-hero__inner" style={{ maxWidth: 'none' }}>
            <Link to="/work" className="text-link" style={{ alignSelf: 'start', justifySelf: 'start' }}>
              <ArrowLeft aria-hidden="true" style={{ transform: 'none' }} /> All work
            </Link>
            <div className="case-hero__meta">
              <span className="eyebrow">{project.category}</span>
              {isConcept && <span className="badge">Concept Project</span>}
            </div>
            <h1 id="page-title" className="h1">
              {project.name}
            </h1>
            <p className="lead">{project.summary}</p>
          </div>
          <div className="case-cover">
            <img
              src={project.cover.src}
              alt={project.cover.alt}
              width="1600"
              height="1000"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }} aria-label="Project information">
        <div className="container">
          <dl className="case-info">
            <div>
              <dt>Project type</dt>
              <dd>{project.info.projectType}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{isConcept ? 'Concept Project (not a client engagement)' : 'Client project'}</dd>
            </div>
            <div>
              <dt>Services</dt>
              <dd>{project.services.join(', ')}</dd>
            </div>
            <div>
              <dt>Covers</dt>
              <dd>{project.info.deliverables}</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="section" style={{ paddingBlock: 'clamp(40px, 6vw, 72px)' }}>
        <div className="container">
          <Block id="challenge" title="Challenge">
            <p>{project.challenge}</p>
          </Block>
          <Block id="approach" title="Approach">
            <p>{project.approach}</p>
          </Block>
          <Block id="solution" title="Solution">
            <p>{project.solution}</p>
          </Block>
          <Block id="execution" title="Execution">
            <ul>
              {project.execution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Block>

          <Reveal as="section" className="case-block" aria-labelledby="gallery">
            <h2 id="gallery">Visual gallery</h2>
            <div className="stack">
              <div className="gallery">
                {project.gallery.map((image) => (
                  <figure key={image.src}>
                    <img src={image.src} alt={image.alt} width="1600" height="1000" loading="lazy" decoding="async" />
                  </figure>
                ))}
              </div>
              {isConcept && (
                <p className="field__hint">Illustrative concept visuals, not final production work.</p>
              )}
            </div>
          </Reveal>

          <Block id="outcome" title="Outcome">
            {verified?.length ? (
              <ul>
                {verified.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="outcome-note">
                {isConcept
                  ? 'This is a concept project, so there are no measured results to report. Outcomes are published here only for real client work, and only when they have been verified.'
                  : 'Verified outcomes for this project will be added once they are confirmed with the client.'}
              </p>
            )}
          </Block>
        </div>
      </div>

      <section className="section section--raised" style={{ paddingBlock: 'clamp(40px, 6vw, 64px)' }} aria-label="More work">
        <div className="container case-nav">
          <Link to="/work" className="text-link">
            <ArrowLeft aria-hidden="true" style={{ transform: 'none' }} /> Back to all work
          </Link>
          <Link to={`/work/${next.slug}`} className="text-link">
            Next: {next.name} <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CtaBand title="Have a brief of your own?" text="Tell us about it and we will talk through how we would approach it." />
    </>
  )
}
