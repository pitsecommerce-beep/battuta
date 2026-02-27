import { useEffect, useState } from 'react'

/** Returns true once the user has scrolled past `threshold` pixels. */
export function useScrolledPast(threshold = 50): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = (): void => {
      setScrolled(window.scrollY > threshold)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}
