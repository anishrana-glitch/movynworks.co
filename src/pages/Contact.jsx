import { useSEO } from '../hooks/useSEO.js'
import ContactForm from '../components/forms/ContactForm.jsx'
import PageHero from '../components/common/PageHero.jsx'

const steps = [
  { title: 'We read your message', text: 'Your details go to the Movyn team.' },
  { title: 'We follow up', text: 'We get back to you to talk through your goals and whether we are the right fit.' },
  { title: 'We scope the work', text: 'If it makes sense to continue, we outline a recommended scope and approach.' },
]

export default function Contact() {
  useSEO({
    title: 'Contact',
    description:
      'Start a project with Movyn Works. Tell us about your website, creative, marketing or growth project and we will get back to you.',
  })

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something that moves your business forward."
        lead="Tell us a little about your project. Fields marked with an asterisk are required."
      />
      <section className="section" aria-label="Contact form">
        <div className="container contact-layout">
          <ContactForm />
          <aside className="contact-aside" aria-labelledby="next-title">
            <h2 id="next-title" className="h3" style={{ marginBottom: 20 }}>
              What happens next
            </h2>
            <ol className="aside-steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="num">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>
    </>
  )
}
