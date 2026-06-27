/**
 * MainLayout
 * Dashboard shell: fixed Navbar, collapsible Sidebar, Breadcrumbs, content area.
 */
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'
import Breadcrumbs from '../components/common/Breadcrumbs'
import ScrollTopButton from '../components/common/ScrollTopButton'
import styles from './MainLayout.module.css'

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)')
    const handler = (e) => setIsMobile(e.matches)
    setIsMobile(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggleSidebar = () => setSidebarOpen((v) => !v)
  const closeSidebar  = () => setSidebarOpen(false)

  return (
    <div className={styles.shell}>
      <Navbar onToggleSidebar={toggleSidebar} />

      <Sidebar
        isOpen={sidebarOpen || !isMobile}
        isMobile={isMobile}
        onClose={closeSidebar}
      />

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div className={styles.overlay} onClick={closeSidebar} />
      )}

      <div
        className={styles.mainContent}
        style={{ marginLeft: isMobile ? 0 : 'var(--sidebar-w)' }}
      >
        <Breadcrumbs />
        <Outlet />
      </div>

      <ScrollTopButton />
    </div>
  )
}
