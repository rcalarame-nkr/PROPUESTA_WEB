/**
 * useScrollSpy
 * Observes visible proposal sections via IntersectionObserver
 * and updates the active section ID in ProposalContext.
 *
 * @param {string[]} sectionIds - ordered list of section element IDs to observe
 */
import { useEffect, useRef } from 'react'
import { useProposal } from '../context/ProposalContext'

export function useScrollSpy(sectionIds) {
  const { setActiveSectionId } = useProposal()
  const observer = useRef(null)

  useEffect(() => {
    if (!sectionIds.length) return

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id)
          }
        })
      },
      {
        // Trigger when element crosses the top 20% of the viewport
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.current.observe(el)
    })

    return () => {
      observer.current?.disconnect()
    }
  }, [sectionIds, setActiveSectionId])
}
