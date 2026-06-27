import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import styles from './ScrollTopButton.module.css'

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={[styles.btn, visible ? styles.visible : ''].join(' ')}
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      title="Volver al inicio"
    >
      <FiArrowUp size={20} />
    </button>
  )
}
