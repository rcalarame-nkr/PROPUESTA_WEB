import { useMemo, useState } from 'react';
import { FiChevronUp, FiDownload, FiMenu, FiPrinter, FiX } from 'react-icons/fi';
import BrandMark from '../components/BrandMark.jsx';
import { useScrollSpy } from '../hooks/useScrollSpy.js';
import { printProposal } from '../services/printService.js';
import { proposalSections } from '../utils/proposalData.js';

export default function DashboardLayout({ children, proposal }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sectionIds = useMemo(() => proposalSections.map((section) => section.id), []);
  const activeId = useScrollSpy(sectionIds);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.innerWidth < 992) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className={`app-shell ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      <header className="topbar">
        <button
          type="button"
          className="icon-button"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label={sidebarOpen ? 'Ocultar menu' : 'Mostrar menu'}
        >
          {sidebarOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <BrandMark />
        <div className="topbar-actions">
          <button type="button" className="btn btn-outline-secondary" onClick={printProposal}>
            <FiPrinter aria-hidden="true" />
            Imprimir
          </button>
          <button type="button" className="btn btn-primary" onClick={printProposal}>
            <FiDownload aria-hidden="true" />
            PDF
          </button>
        </div>
      </header>

      <aside className="sidebar">
        <nav aria-label="Secciones de la propuesta">
          {proposalSections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={activeId === section.id ? 'active' : ''}
              onClick={() => scrollTo(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="content-area">
        <div className="breadcrumbs">
          <span>Propuestas</span>
          <span>D&O</span>
          <strong>{proposal.client.name}</strong>
        </div>
        {children}
        <footer className="footer">
          <span>{proposal.broker.name}</span>
          <span>{proposal.meta.product}</span>
          <span>{proposal.meta.period}</span>
        </footer>
      </main>

      <button
        type="button"
        className="scroll-top"
        onClick={() => scrollTo('cover')}
        aria-label="Volver arriba"
      >
        <FiChevronUp aria-hidden="true" />
      </button>
    </div>
  );
}
