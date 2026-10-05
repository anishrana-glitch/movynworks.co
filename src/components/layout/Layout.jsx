import { Suspense, lazy, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useScrollPast } from '../../hooks/useScrollPast.js'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

// Pulls in the motion library, so it is only fetched once it is needed
const FloatingIsland = lazy(() => import('./FloatingIsland.jsx'))

/** Scrolls to the top on navigation, or to the #hash target once it exists. */
function useScrollManager(mainRef) {
  const { pathname, hash } = useLocation()
  const first = useRef(true)

  useEffect(() => {
    let frame
    if (hash) {
      let tries = 0
      const seek = () => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)))
        if (el) el.scrollIntoView()
        else if (tries++ < 40) frame = requestAnimationFrame(seek)
      }
      seek()
    } else {
      window.scrollTo(0, 0)
    }
    // Keyboard and screen-reader users land at the start of the new page
    if (!first.current) mainRef.current?.focus({ preventScroll: true })
    first.current = false
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, mainRef])
}

export default function Layout() {
  const mainRef = useRef(null)
  // Sticky: once the visitor has scrolled past the hero, the island stays mounted
  const showIsland = useScrollPast(480, { sticky: true })

  useScrollManager(mainRef)

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" ref={mainRef} tabIndex={-1} style={{ outline: 'none' }}>
        <Suspense fallback={<div className="route-fallback" aria-hidden="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {showIsland && (
        <Suspense fallback={null}>
          <FloatingIsland />
        </Suspense>
      )}
    </>
  )
}
