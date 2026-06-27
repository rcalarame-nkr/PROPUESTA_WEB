import { useProposal } from '../../context/ProposalContext'
import SectionShell from './SectionShell'
import styles from './Prima.module.css'

export default function Prima() {
  const { data } = useProposal()
  return (
    <SectionShell id="prima" eyebrow="Costo" title="Prima Anual" alt>
      <div className={styles.highlight}>
        <div>
          <p className={styles.label}>Costo Anual</p>
          <p className={styles.amount}>
            <span className={styles.currency}>USD</span>3.830
          </p>
          <p className={styles.note}>{data.primaDetalle}</p>
        </div>
        <div className={styles.taxes}>
          <strong>Impuestos y recargos:</strong><br />
          + IVA (cuando corresponda)<br />
          + IIBB (cuando corresponda)<br /><br />
          <strong>Suma asegurada:</strong> USD 3.000.000
        </div>
      </div>
    </SectionShell>
  )
}
