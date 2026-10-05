import { useSEO } from '../hooks/useSEO.js'
import Button from '../components/common/Button.jsx'

export default function NotFound() {
  useSEO({ title: 'Page not found', description: 'The page you were looking for could not be found.', noindex: true })

  return (
    <section className="not-found" aria-labelledby="page-title">
      <div className="container stack">
        <span className="not-found__code" aria-hidden="true">
          404
        </span>
        <h1 id="page-title" className="h1">
          Page not found
        </h1>
        <p className="lead">The page you are looking for does not exist or has moved.</p>
        <div className="btn-row">
          <Button to="/">Back to home</Button>
          <Button to="/contact" variant="secondary" arrow={false}>
            Contact us
          </Button>
        </div>
      </div>
    </section>
  )
}
