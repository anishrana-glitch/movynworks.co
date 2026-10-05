import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Briefcase, Layers, X } from 'lucide-react'
import DynamicIsland from '../ui/dynamic-island.jsx'

/**
 * Quick-action pill that morphs open on demand. Loaded lazily (it pulls in the
 * motion library) and only mounted after the visitor has scrolled past the hero.
 */
export default function FloatingIsland() {
  // Open only on the page where it was opened, so navigating closes it
  const [openAt, setOpenAt] = useState(null)
  const rootRef = useRef(null)
  const restoreFocus = useRef(false)
  const { pathname } = useLocation()
  const view = openAt === pathname ? 'open' : 'idle'
  const setView = useCallback((next) => setOpenAt(next === 'open' ? pathname : null), [pathname])

  const close = useCallback((returnFocus = false) => {
    restoreFocus.current = returnFocus
    setOpenAt(null)
  }, [])

  // Move focus with the morph: first action on open, trigger on keyboard close
  useEffect(() => {
    const id = window.setTimeout(() => {
      const root = rootRef.current
      if (!root) return
      if (view === 'open') root.querySelector('.island-action')?.focus()
      else if (restoreFocus.current) root.querySelector('.island-idle')?.focus()
      restoreFocus.current = false
    }, 80)
    return () => window.clearTimeout(id)
  }, [view])

  // Escape and outside click close it
  useEffect(() => {
    if (view !== 'open') return
    const onKey = (e) => e.key === 'Escape' && close(true)
    const onPointer = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) close(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [view, close])

  // The contact page already is the call to action
  if (pathname === '/contact') return null

  const views = {
    idle: ({ setView: go }) => (
      <button type="button" className="island-idle" aria-expanded="false" onClick={() => go('open')}>
        <span className="island-dot" aria-hidden="true" />
        Quick actions
      </button>
    ),
    open: () => (
      <div className="island-open" role="group" aria-label="Quick actions">
        <Link to="/contact" className="island-action island-action--primary">
          Start a Project
        </Link>
        <Link to="/work" className="island-action island-action--text">
          <Briefcase aria-hidden="true" />
          <span>Work</span>
        </Link>
        <Link to="/services" className="island-action island-action--text">
          <Layers aria-hidden="true" />
          <span>Services</span>
        </Link>
        <button
          type="button"
          className="island-action"
          aria-label="Close quick actions"
          onClick={() => close(true)}
        >
          <X aria-hidden="true" />
        </button>
      </div>
    ),
  }

  return (
    <div className="island-wrap">
      <div ref={rootRef}>
        <DynamicIsland view={view} onViewChange={setView} views={views} />
      </div>
    </div>
  )
}
