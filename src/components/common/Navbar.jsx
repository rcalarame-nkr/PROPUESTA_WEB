/**
 * Navbar – fixed top bar with Norfolk Risk branding and PDF export button.
 */
import { useProposal } from '../../context/ProposalContext'
import { generatePDF } from '../../services/pdfService'
import { useState } from 'react'
import { FiDownload, FiMenu } from 'react-icons/fi'
import styles from './Navbar.module.css'

export default function Navbar({ onToggleSidebar }) {
  const { data } = useProposal()
  const [exporting, setExporting] = useState(false)

  const handleExport = async () => {
    setExporting(true)
    try {
      await generatePDF(data)
    } finally {
      setExporting(false)
    }
  }

  return (
    <nav className={styles.navbar}>
      {/* Left: hamburger + brand */}
      <div className={styles.left}>
        <button
          className={styles.hamburger}
          onClick={onToggleSidebar}
          aria-label="Abrir menú"
        >
          <FiMenu size={22} />
        </button>

        <a href="#portada" className={styles.brand}>
          <div className={styles.logoMark}>NR</div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Norfolk Risk</span>
            <span className={styles.brandTagline}>Insurance Brokers</span>
          </div>
        </a>
      </div>

      {/* Right: badge + export */}
      <div className={styles.right}>
        <span className={styles.badge}>D&amp;O · 2026–2027</span>
        <button
          className={styles.btnPdf}
          onClick={handleExport}
          disabled={exporting}
        >
          <FiDownload size={14} />
          {exporting ? 'Generando…' : 'Exportar PDF'}
        </button>
      </div>
    </nav>
  )
}
