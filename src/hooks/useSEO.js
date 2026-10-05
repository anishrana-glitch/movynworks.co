import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site.js'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets title, description, canonical URL, Open Graph and Twitter tags for the
 * current route. Pass `home: true` to use the title as-is (no brand suffix).
 */
export function useSEO({ title, description, image, type = 'website', home = false, noindex = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const origin = site.url || window.location.origin
    const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
    const url = `${origin}${path}`
    const fullTitle = home ? title : `${title} | ${site.name}`
    const desc = description || site.description
    const img = new URL(image || site.ogImage, origin).toString()

    document.title = fullTitle
    setMeta('name', 'description', desc)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setLink('canonical', url)

    setMeta('property', 'og:site_name', site.name)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)
    setMeta('name', 'twitter:image', img)
  }, [title, description, image, type, home, noindex, pathname])
}
