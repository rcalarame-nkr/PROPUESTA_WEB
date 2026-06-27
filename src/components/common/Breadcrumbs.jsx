/**
 * Breadcrumbs
 * Sticky sub-header that shows the current section label,
 * updated in real-time by the scroll-spy via ProposalContext.
 */
import { useProposal }      from '../../context/ProposalContext'
import { SECTION_LABELS }   from '../../utils/constants'
import styles               from './Breadcrumbs.module.css'

export default function Breadcrumbs() {
  const { activeSectionId } = useProposal()
  const currentLabel = SECTION_LABELS[activeSectionId] ?? activeSectionId

  return (
    <nav className={styles.breadcrumbs} aria-label="Ubicación actual">
      <span className={styles.crumb}>Norfolk Risk</span>
      <span className={styles.sep}>›</span>
      <span className={styles.crumb}>Propuestas D&amp;O</span>
      <span className={styles.sep}>›</span>
      <span className={styles.current} aria-current="page">{currentLabel}</span>
    </nav>
  )
}
