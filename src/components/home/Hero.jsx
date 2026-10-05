import { Link } from 'react-router-dom'
import { divisions } from '../../data/services.js'
import { site } from '../../data/site.js'
import Button from '../common/Button.jsx'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <span className="eyebrow">{site.tagline}</span>
        <h1 id="hero-title" className="display hero__title">
          Helping businesses build a strong digital presence.
        </h1>
        <p className="lead hero__lead">
          Movyn Works brings technology, creative production, digital marketing and growth
          solutions together to help businesses build, market and grow.
        </p>
        <div className="btn-row">
          <Button to="/contact">Start a Project</Button>
          <Button to="/work" variant="secondary" arrow={false}>
            View Our Work
          </Button>
        </div>
      </div>

      <nav className="relative z-10 border-t border-white/5 bg-black/10 backdrop-blur-sm" aria-label="Service divisions">
        <div className="container">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
            {divisions.map((division, index) => (
              <li key={division.id}>
                <Link 
                  to={`/services#${division.id}`} 
                  className="group flex flex-col justify-between h-full p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 ease-out"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#D8A867]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#D8A867] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {division.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  )
}
