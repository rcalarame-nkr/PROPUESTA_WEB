import { FiDownload, FiFileText } from 'react-icons/fi';
import BrandMark from '../BrandMark.jsx';
import MetricCard from '../MetricCard.jsx';
import { printProposal } from '../../services/printService.js';

export default function Cover({ proposal }) {
  return (
    <section id="cover" className="cover-section">
      <div className="cover-copy">
        <BrandMark />
        <span className="proposal-kicker">{proposal.meta.proposalType}</span>
        <h1>{proposal.meta.product}</h1>
        <p>{proposal.client.name}</p>
        <div className="cover-actions">
          <button type="button" className="btn btn-primary" onClick={printProposal}>
            <FiDownload aria-hidden="true" />
            Exportar PDF
          </button>
          <a className="btn btn-outline-light" href="#presentation">
            <FiFileText aria-hidden="true" />
            Ver propuesta
          </a>
        </div>
      </div>
      <div className="cover-panel">
        <MetricCard label="Periodo" value={proposal.meta.period} tone="dark" />
        <MetricCard label="Poliza" value={proposal.meta.policyNumber} tone="dark" />
        <MetricCard label="Suma asegurada" value="USD 3.000.000" tone="accent" />
        <MetricCard label="Aseguradora" value={proposal.insurer.name} tone="dark" />
      </div>
    </section>
  );
}
