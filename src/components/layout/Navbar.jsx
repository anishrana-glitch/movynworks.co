import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import logo from '../../assets/brand/movyn-logo-reversed.webp'
import { navCta, primaryNav } from '../../data/navigation.js'
import { useScrollPast } from '../../hooks/useScrollPast.js'
import Button from '../common/Button.jsx'

const DESKTOP_QUERY = '(min-width: 1100px)'

export default function Navbar() {
  // The menu is open only on the page where it was opened, so navigating closes it
  const [openAt, setOpenAt] = useState(null)
  const scrolled = useScrollPast(8)
  const { pathname } = useLocation()
  const open = openAt === pathname
  const rootRef = useRef(null)
  const toggleRef = useRef(null)

  const close = useCallback(() => setOpenAt(null), [])

  // Close when the layout switches to the desktop nav
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY)
    const onChange = (e) => e.matches && close()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [close])

  // Scroll lock, Escape and a simple focus trap while the menu is open
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') {
        close()
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || !rootRef.current) return
      const focusable = [
        ...rootRef.current.querySelectorAll('a[href], button:not([disabled])'),
      ].filter((el) => el.offsetParent !== null || el === document.activeElement)
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  return (
    <div ref={rootRef}>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`.trim()}>
        <div className="container site-header__bar">
          <Link to="/" className="brand" aria-label="Movyn Works, home">
            <img src={logo} alt="Movyn" width="900" height="151" decoding="async" />
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            <ul className="nav-list">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className="nav-link">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-cta">
            <Button to={navCta.to} size="sm">
              {navCta.label}
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpenAt(open ? null : pathname)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Sibling of the header: the header's backdrop-filter would otherwise trap this fixed panel */}
      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`.trim()}>
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="mobile-menu__link">
                  {item.label}
                  <ArrowRight aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Button to={navCta.to}>{navCta.label}</Button>
      </div>
    </div>
  )
}
