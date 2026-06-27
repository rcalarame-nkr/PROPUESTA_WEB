import { useProposal } from '../../context/ProposalContext'
import SectionShell from './SectionShell'
import styles from './CoberturasAdicionales.module.css'

export default function CoberturasAdicionales() {
  const { data } = useProposal()
  return (
    <SectionShell id="adicionales" eyebrow="Extensiones" title="Coberturas Adicionales">
      <div className={styles.grid}>
        {data.coberturasAdicionales.map((item) => (
          <div key={item.titulo} className={styles.item}>
            <div className={styles.iconBox}>{item.icon}</div>
            <div className={styles.content}>
              <strong className={styles.itemTitle}>{item.titulo}</strong>
              <span className={styles.itemDesc}>{item.descripcion}</span>
              {item.sublimite && (
                <span className={styles.sublimit}>{item.sublimite}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
