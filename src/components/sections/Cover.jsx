import { useProposal } from '../../context/ProposalContext'
import styles from './Cover.module.css'

export default function Cover() {
  const { data } = useProposal()
  return (
    <section id="portada" className={['proposal-section', styles.cover].join(' ')}>
      {/* Top row */}
      <div className={styles.topRow}>
        <span className={styles.badge}>Propuesta de Renovación</span>
        <div className={styles.polizaBox}>
          <p className={styles.polizaLabel}>N° de Póliza</p>
          <p className={styles.polizaNum}>{data.poliza}</p>
        </div>
      </div>

      {/* Main content */}
      <div>
        <h1 className={styles.title}>
          Responsabilidad Civil<br />
          <span className={styles.titleAccent}>Directores y Gerentes</span>
        </h1>
        <p className={styles.subtitle}>Directors &amp; Officers Liability · D&amp;O</p>

        <div className={styles.metaGrid}>
          <MetaItem label="Tomador"         value={data.tomador}      sub={`CUIT ${data.cuit}`} />
          <MetaItem label="Vigencia"         value={data.vigencia}     sub="Renovación anual" />
          <MetaItem label="Base del reclamo" value={data.baseReclamo}  sub="Retroactividad ilimitada" />
          <MetaItem label="Broker"           value="Norfolk Risk"      sub="Insurance Brokers" />
        </div>
      </div>
    </section>
  )
}

function MetaItem({ label, value, sub }) {
  return (
    <div className={styles.metaItem}>
      <p className={styles.metaLabel}>{label}</p>
      <p className={styles.metaValue}>{value}</p>
      {sub && <p className={styles.metaSub}>{sub}</p>}
    </div>
  )
}
