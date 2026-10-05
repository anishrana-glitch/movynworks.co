import { processSteps } from '../../data/process.js'
import Reveal from '../common/Reveal.jsx'

/**
 * Five-stage timeline. `summary` is horizontal on desktop (homepage);
 * `detailed` stays vertical with a description and outputs (Process page).
 */
export default function ProcessTimeline({ variant = 'summary' }) {
  const detailed = variant === 'detailed'
  return (
    <ol className={`timeline timeline--${variant}`}>
      {processSteps.map((step, index) => (
        <Reveal as="li" key={step.number} index={index} className="timeline__item">
          <span className="timeline__dot" aria-hidden="true">
            {step.number}
          </span>
          <h3>
            <span className="visually-hidden">Step {Number(step.number)}: </span>
            {step.title}
          </h3>
          <div>
            <p>{detailed ? step.detail : step.summary}</p>
            {detailed && (
              <ul className="timeline__outputs" aria-label={`${step.title} outputs`}>
                {step.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </ol>
  )
}
