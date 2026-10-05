/*
 * DynamicIsland — adapted from SmoothUI's `dynamic-island` component
 * (https://github.com/educlopez/smoothui, MIT).
 *
 * The morphing pill, spring/bounce timing and blur-in content swap are kept
 * from the original. The original's demo content (weather, phone call, music
 * player, notification) and its built-in view switcher were removed: this
 * version takes its content from a `views` map instead.
 */
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useMemo, useState } from 'react'

const BOUNCE_VARIANTS = {
  'idle-open': 0.35,
  'open-idle': 0.3,
}
const DEFAULT_BOUNCE = 0.4

export default function DynamicIsland({
  view: controlledView,
  onViewChange,
  views,
  className = '',
  ...rest
}) {
  const [internalView, setInternalView] = useState('idle')
  const [variantKey, setVariantKey] = useState('idle-open')
  const shouldReduceMotion = useReducedMotion()

  const view = controlledView ?? internalView
  const bounce = BOUNCE_VARIANTS[variantKey] ?? DEFAULT_BOUNCE

  const content = useMemo(() => views[view] ?? views.idle, [views, view])

  // Exposed to the content through render props so it can switch views.
  const setView = (next) => {
    if (next === view) return
    setVariantKey(`${view}-${next}`)
    if (onViewChange) onViewChange(next)
    else setInternalView(next)
  }

  return (
    <div className={className} {...rest}>
      <motion.div
        className="mx-auto w-fit max-w-full overflow-hidden rounded-full bg-black"
        layout
        style={{
          borderRadius: 32,
          boxShadow: '0 0 0 1px rgba(242, 240, 234, 0.14), 0 18px 40px -12px rgba(0, 0, 0, 0.7)',
        }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { type: 'spring', bounce, duration: 0.35 }
        }
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={view}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { filter: 'blur(5px)', opacity: 0, scale: 0.92 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    filter: 'blur(0px)',
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.05 },
                  }
            }
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
            transition={
              shouldReduceMotion ? { duration: 0 } : { type: 'spring', bounce, duration: 0.35 }
            }
          >
            {typeof content === 'function' ? content({ view, setView }) : content}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
