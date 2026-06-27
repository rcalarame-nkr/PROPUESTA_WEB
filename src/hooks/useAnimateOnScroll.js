/**
 * useAnimateOnScroll
 * Adds CSS class 'visible' to any element with class 'animate-in'
 * as it enters the viewport, triggering the CSS fadeUp animation
 * defined in global.css.
 *
 * Uses IntersectionObserver with threshold: 0.1 so the animation
 * fires as soon as ~10% of the element is visible.
 */
import { useEffect } from 'react'

export function useAnimateOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-in')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) // fire once per element
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
