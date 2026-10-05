import { Link } from 'react-router-dom'
import logo from '../../assets/brand/movyn-logo-reversed.webp'
import { footerNav } from '../../data/navigation.js'
import { divisions } from '../../data/services.js'
import { site } from '../../data/site.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" aria-label="Movyn Works, home">
              <img src={logo} alt="Movyn" width="900" height="151" loading="lazy" decoding="async" />
            </Link>
            <p>{site.description}</p>
          </div>

          <nav className="footer-col" aria-labelledby="footer-divisions">
            <h2 id="footer-divisions">Divisions</h2>
            <ul>
              {divisions.map((division) => (
                <li key={division.id}>
                  <Link to={`/services#${division.id}`}>{division.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-labelledby="footer-company">
            <h2 id="footer-company">Company</h2>
            <ul>
              {footerNav.company.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>


        </div>

        <div className="footer-bottom" style={{ paddingBottom: 88 }}>
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
