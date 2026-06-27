import { useProposal } from '../../context/ProposalContext'
import SectionShell from './SectionShell'
import styles from './Coberturas.module.css'

export default function Coberturas() {
  const { data } = useProposal()
  return (
    <SectionShell id="coberturas" eyebrow="Estructura" title="Coberturas de la Póliza" alt>
      <div className={styles.grid}>
        {data.coberturas.map((c) => (
          <div key={c.letra} className={[styles.card, styles[c.tipo]].join(' ')}>
            <div className={styles.letter}>{c.letra}</div>
            <h4 className={styles.cardTitle}>{c.titulo}</h4>
            <p className={styles.cardDesc}>{c.descripcion}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
