import { useProposal } from '../../context/ProposalContext'
import SectionShell from './SectionShell'
import styles from './Deducibles.module.css'

export default function Deducibles() {
  const { data } = useProposal()
  return (
    <SectionShell id="deducibles" eyebrow="Franquicias" title="Deducibles por Cobertura" alt>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Cobertura</th>
              <th>Descripción</th>
              <th>Deducible</th>
            </tr>
          </thead>
          <tbody>
            {data.deducibles.map((d) => (
              <tr key={d.cobertura}>
                <td className={styles.tdCoverage}>{d.cobertura}</td>
                <td>{d.descripcion}</td>
                <td className={d.sinDeducible ? styles.tdZero : styles.tdAmount}>{d.monto}{d.sinDeducible && ' — Sin Deducible'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.subEyebrow}>Período Adicional para Notificaciones</p>
      <div className={styles.periodGrid}>
        {data.periodosAdicionales.map((p) => (
          <div key={p.years} className={styles.periodCard}>
            <p className={styles.years}>{p.years} <span>años</span></p>
            <p className={p.esFree ? styles.free : styles.paid}>{p.esFree ? '✓ ' : ''}{p.costo}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
