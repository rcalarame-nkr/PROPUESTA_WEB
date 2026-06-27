import { useProposal } from '../../context/ProposalContext'
import SectionShell from './SectionShell'
import styles from './Aseguradora.module.css'

export default function Aseguradora() {
  const { data } = useProposal()
  return (
    <SectionShell id="aseguradora" eyebrow="Compañía" title="Aseguradora">
      <div className={styles.card}>
        <div className={styles.logoBox}>
          <span className={styles.logoText}>La Caja<br />Ahorros &amp;<br />Seguros</span>
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{data.aseguradora.nombre}</h3>
          <p className={styles.desc}>{data.aseguradora.descripcion}</p>
          <span className={styles.tag}>Aseguradora seleccionada · 2026–2027</span>
        </div>
      </div>
    </SectionShell>
  )
}
