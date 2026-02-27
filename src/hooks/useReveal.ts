import { useEffect, useRef } from 'react'

/**
 * Intersection Observer hook that adds a `visible` class
 * to elements when they scroll into view.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15): React.RefObject<T | null> {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold },
    )

    // Observe the container and all children with .reveal
    const revealElements = el.querySelectorAll('.reveal')
    revealElements.forEach((child) => observer.observe(child))
    if (el.classList.contains('reveal')) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
