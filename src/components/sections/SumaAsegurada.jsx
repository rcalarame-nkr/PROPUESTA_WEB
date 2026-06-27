import { useProposal } from '../../context/ProposalContext'
import SectionShell from './SectionShell'
import styles from './SumaAsegurada.module.css'

export default function SumaAsegurada() {
  const { data } = useProposal()
  return (
    <SectionShell id="suma" eyebrow="Límite de Responsabilidad" title="Suma Asegurada">
      <div className={styles.hero}>
        <p className={styles.heroLabel}>Límite único combinado · por evento y en el agregado anual</p>
        <p className={styles.heroAmount}>
          <span className={styles.currency}>USD</span>3.000.000
        </p>
        <p className={styles.heroDetail}>{data.sumaDetalle}</p>
      </div>
    </SectionShell>
  )
}
