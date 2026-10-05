import { useEffect, useState } from 'react'

/**
 * True once the page has been scrolled further than `threshold` pixels.
 * With `sticky`, it stays true after that, even if the visitor scrolls back up.
 */
export function useScrollPast(threshold = 8, { sticky = false } = {}) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const beyond = window.scrollY > threshold
      setPast((current) => (sticky ? current || beyond : beyond))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold, sticky])

  return past
}
