import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

export default function CtaBand({
  title = 'Have a project in mind?',
  text = 'Tell us what you are working on and we will come back with how we can help.',
  primary = { label: 'Start a Project', to: '/contact' },
  secondary = { label: 'Explore services', to: '/services' },
}) {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <Reveal className="cta-band">
          <div className="cta-band__inner">
            <h2 id="cta-title" className="h1">
              {title}
            </h2>
            <p className="lead">{text}</p>
            <div className="btn-row">
              <Button to={primary.to}>{primary.label}</Button>
              {secondary && (
                <Button to={secondary.to} variant="secondary" arrow={false}>
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
