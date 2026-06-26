import BrandMark from '../components/BrandMark.jsx';

export default function PrintableProposal({ proposal }) {
  return (
    <div className="print-proposal" aria-hidden="true">
      <section className="print-page print-cover">
        <BrandMark />
        <p>{proposal.meta.proposalType}</p>
        <h1>{proposal.meta.product}</h1>
        <h2>{proposal.client.name}</h2>
        <dl>
          <div>
            <dt>Periodo</dt>
            <dd>{proposal.meta.period}</dd>
          </div>
          <div>
            <dt>Poliza</dt>
            <dd>{proposal.meta.policyNumber}</dd>
          </div>
          <div>
            <dt>Aseguradora</dt>
            <dd>{proposal.insurer.name}</dd>
          </div>
        </dl>
      </section>

      <section className="print-page">
        <PrintHeader proposal={proposal} />
        <h2>Datos del cliente</h2>
        <PrintDefinition label="Tomador" value={proposal.client.name} />
        <PrintDefinition label="CUIT" value={proposal.client.cuit} />
        <PrintDefinition label="Asegurable" value={proposal.client.insuredGroup} />

        <h2>Coberturas principales</h2>
        <table>
          <thead>
            <tr>
              <th>Cobertura</th>
              <th>Alcance</th>
            </tr>
          </thead>
          <tbody>
            {proposal.coverage.mainCoverages.map((item) => (
              <tr key={item.label}>
                <td>{item.label}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Suma asegurada y condiciones</h2>
        <PrintDefinition label="Suma asegurable" value={proposal.coverage.insuredAmount} />
        <PrintDefinition label="Base del reclamo" value={proposal.coverage.basis} />
        <PrintDefinition label="Retroactividad" value={proposal.coverage.retroactivity} />
        <PrintDefinition label="Ambito y jurisdiccion" value={proposal.coverage.scope} />
      </section>

      <section className="print-page">
        <PrintHeader proposal={proposal} />
        <h2>Deducibles</h2>
        <table>
          <thead>
            <tr>
              <th>Cobertura</th>
              <th>Deducible</th>
            </tr>
          </thead>
          <tbody>
            {proposal.coverage.deductibles.map((item) => (
              <tr key={item.label}>
                <td>{item.label}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Periodo adicional para notificaciones</h2>
        <table>
          <thead>
            <tr>
              <th>Periodo</th>
              <th>Costo</th>
            </tr>
          </thead>
          <tbody>
            {proposal.coverage.notificationPeriod.map((item) => (
              <tr key={item.term}>
                <td>{item.term}</td>
                <td>{item.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Extensiones de cobertura</h2>
        <ul>
          {proposal.coverage.extensions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="print-page">
        <PrintHeader proposal={proposal} />
        <h2>Principales exclusiones</h2>
        <ul>
          {proposal.coverage.exclusions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Aseguradora, prima y forma de pago</h2>
        <PrintDefinition label="Aseguradora" value={proposal.insurer.name} />
        <PrintDefinition label="Costo anual" value={proposal.insurer.annualCost} />
        <PrintDefinition label="Forma de pago" value={proposal.insurer.paymentTerms} />
        <h2>Observaciones</h2>
        <ul>
          {proposal.observations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <footer>
          {proposal.broker.name} | {proposal.broker.email} | {proposal.broker.phone}
        </footer>
      </section>
    </div>
  );
}

function PrintHeader({ proposal }) {
  return (
    <header className="print-header">
      <BrandMark compact />
      <span>{proposal.client.name}</span>
      <span>{proposal.meta.period}</span>
    </header>
  );
}

function PrintDefinition({ label, value }) {
  return (
    <div className="print-definition">
      <strong>{label}</strong>
      <span>{value}</span>
    </div>
  );
}
