import ClientEditor from '../ClientEditor.jsx';
import DataTable from '../DataTable.jsx';
import MetricCard from '../MetricCard.jsx';
import ProposalSection from '../ProposalSection.jsx';

export default function ProposalSections({ proposal }) {
  const coverageRows = proposal.coverage.mainCoverages.map((item) => ({
    Cobertura: item.label,
    Alcance: item.value,
  }));
  const deductibleRows = proposal.coverage.deductibles.map((item) => ({
    Cobertura: item.label,
    Deducible: item.value,
  }));
  const notificationRows = proposal.coverage.notificationPeriod.map((item) => ({
    Periodo: item.term,
    Costo: item.cost,
  }));

  return (
    <>
      <ProposalSection id="presentation" eyebrow="Resumen ejecutivo" title="Presentacion">
        <div className="lead-grid">
          <p>
            Propuesta de renovacion para la cobertura de Responsabilidad Civil de Directores
            y Gerentes de {proposal.client.name}. La informacion se organiza para consulta
            comercial, revision interna y emision del PDF de presentacion.
          </p>
          <div className="status-chip">Base {proposal.coverage.basis}</div>
        </div>
      </ProposalSection>

      <ProposalSection id="client-data" eyebrow="Tomador" title="Datos del cliente">
        <div className="info-grid">
          <MetricCard label="Razon social" value={proposal.client.name} />
          <MetricCard label="CUIT" value={proposal.client.cuit} />
          <MetricCard label="Asegurable" value={proposal.client.insuredGroup} />
        </div>
        <ClientEditor />
      </ProposalSection>

      <ProposalSection id="coverages" eyebrow="Alcance" title="Coberturas principales">
        <DataTable columns={['Cobertura', 'Alcance']} rows={coverageRows} />
        <div className="note-box">
          <strong>Base del reclamo:</strong> {proposal.coverage.basis}.{' '}
          <strong>Retroactividad:</strong> {proposal.coverage.retroactivity}
        </div>
      </ProposalSection>

      <ProposalSection id="insured-amount" eyebrow="Limite" title="Suma asegurada">
        <div className="amount-band">
          <span>Suma asegurable</span>
          <strong>{proposal.coverage.insuredAmount}</strong>
        </div>
        <p className="muted-copy">{proposal.coverage.scope}</p>
      </ProposalSection>

      <ProposalSection id="deductibles" eyebrow="Retenciones" title="Deducibles">
        <DataTable columns={['Cobertura', 'Deducible']} rows={deductibleRows} />
        <h3>Periodo adicional para notificaciones</h3>
        <DataTable columns={['Periodo', 'Costo']} rows={notificationRows} />
      </ProposalSection>

      <ProposalSection
        id="additional-coverages"
        eyebrow="Extensiones"
        title="Coberturas adicionales"
      >
        <ul className="check-list">
          {proposal.coverage.extensions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProposalSection>

      <ProposalSection id="exclusions" eyebrow="Condiciones" title="Principales exclusiones">
        <ul className="exclusion-list">
          {proposal.coverage.exclusions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProposalSection>

      <ProposalSection id="insurer" eyebrow="Mercado" title="Aseguradora">
        <div className="info-grid">
          <MetricCard label="Aseguradora" value={proposal.insurer.name} />
          <MetricCard label="Producto" value={proposal.meta.product} />
          <MetricCard label="Poliza actual" value={proposal.meta.policyNumber} />
        </div>
      </ProposalSection>

      <ProposalSection id="premium" eyebrow="Costo" title="Prima">
        <div className="amount-band compact">
          <span>Costo anual</span>
          <strong>{proposal.insurer.annualCost}</strong>
        </div>
      </ProposalSection>

      <ProposalSection id="payment-terms" eyebrow="Financiacion" title="Forma de pago">
        <div className="payment-box">
          <span>{proposal.insurer.paymentTerms}</span>
          <p>Forma de pago informada en la presentacion de renovacion.</p>
        </div>
      </ProposalSection>

      <ProposalSection id="observations" eyebrow="Notas" title="Observaciones">
        <ul className="check-list compact-list">
          {proposal.observations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProposalSection>

      <ProposalSection id="contact" eyebrow="Cierre" title="Contacto">
        <div className="contact-panel">
          <div>
            <strong>{proposal.broker.name}</strong>
            <span>{proposal.broker.tagline}</span>
          </div>
          <div>
            <span>{proposal.broker.email}</span>
            <span>{proposal.broker.phone}</span>
          </div>
        </div>
      </ProposalSection>
    </>
  );
}
