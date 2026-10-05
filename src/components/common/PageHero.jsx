/** Header block for internal pages. Renders the page's single h1. */
export default function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="container">
        <div className="page-hero__inner">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 id="page-title" className="h1">
            {title}
          </h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
