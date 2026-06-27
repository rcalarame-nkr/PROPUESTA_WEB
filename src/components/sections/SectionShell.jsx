/**
 * SectionShell – reusable wrapper for every proposal section.
 * Handles alternating background, padding, and animation class.
 */
import styles from './SectionShell.module.css'

export default function SectionShell({ id, eyebrow, title, alt = false, children }) {
  return (
    <section
      id={id}
      className={[
        'proposal-section',
        'animate-in',
        styles.shell,
        alt ? styles.alt : '',
      ].join(' ')}
    >
      <div className={styles.header}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        <div className="title-divider" />
      </div>
      {children}
    </section>
  )
}
