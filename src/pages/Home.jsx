import { useSEO } from '../hooks/useSEO.js'
import { site } from '../data/site.js'
import Hero from '../components/home/Hero.jsx'
import Capabilities from '../components/home/Capabilities.jsx'
import ServicesOverview from '../components/home/ServicesOverview.jsx'
import AboutPreview from '../components/home/AboutPreview.jsx'
import IndustriesGrid from '../components/home/IndustriesGrid.jsx'
import SelectedWork from '../components/home/SelectedWork.jsx'
import ProcessSection from '../components/home/ProcessSection.jsx'
import CtaBand from '../components/common/CtaBand.jsx'

export default function Home() {
  useSEO({
    title: 'Movyn Works | Technology, Creative, Marketing and Growth',
    description: site.description,
    home: true,
  })

  return (
    <>
      <Hero />
      <Capabilities />
      <ServicesOverview />
      <AboutPreview />
      <IndustriesGrid />
      <SelectedWork />
      <ProcessSection />
      <CtaBand />
    </>
  )
}
