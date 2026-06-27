import { useProposal } from '../../context/ProposalContext'
import SectionShell from './SectionShell'
import styles from './Exclusiones.module.css'

export default function Exclusiones() {
  const { data } = useProposal()
  return (
    <SectionShell id="exclusiones" eyebrow="Limitaciones" title="Principales Exclusiones" alt>
      <div className={styles.list}>
        {data.exclusiones.map((ex) => (
          <div key={ex.titulo} className={styles.item}>
            <span className={styles.icon}>✕</span>
            <div>
              <strong className={styles.exTitle}>{ex.titulo}</strong>
              <p className={styles.exDesc}>{ex.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
