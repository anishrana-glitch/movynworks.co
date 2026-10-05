import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'

// The homepage ships in the main bundle for the fastest first paint;
// every other route is loaded on demand.
const Services = lazy(() => import('./pages/Services.jsx'))
const Industries = lazy(() => import('./pages/Industries.jsx'))
const Work = lazy(() => import('./pages/Work.jsx'))
const CaseStudy = lazy(() => import('./pages/CaseStudy.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Process = lazy(() => import('./pages/Process.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))


const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="industries" element={<Industries />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="about" element={<About />} />
        <Route path="process" element={<Process />} />
        <Route path="contact" element={<Contact />} />


        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
