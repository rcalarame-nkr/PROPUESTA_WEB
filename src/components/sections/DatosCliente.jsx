import { useProposal } from '../../context/ProposalContext'
import SectionShell from './SectionShell'
import styles from './DatosCliente.module.css'

export default function DatosCliente() {
  const { data } = useProposal()

  const fields = [
    { label: 'Razón Social',  value: data.tomador },
    { label: 'CUIT',          value: data.cuit },
    { label: 'Asegurables',   value: 'Directores y Gerentes', sub: 'Apoderados / Autoridades' },
    { label: 'N° de Póliza',  value: data.poliza, sub: 'Propuesta de renovación' },
    { label: 'Ámbito',        value: data.ambito, sub: 'Excepto países sancionados' },
    { label: 'Retroactividad',value: 'Ilimitada', sub: 'Excepto hechos conocidos no reportados' },
  ]

  return (
    <SectionShell id="cliente" eyebrow="Asegurado" title="Datos del Cliente">
      <div className={styles.grid}>
        {fields.map((f) => (
          <div key={f.label} className={styles.card}>
            <p className={styles.fieldLabel}>{f.label}</p>
            <p className={styles.fieldValue}>{f.value}</p>
            {f.sub && <p className={styles.fieldSub}>{f.sub}</p>}
          </div>
        ))}
      </div>

      <div className={styles.note}>
        <strong>Países excluidos:</strong> {data.paisesExcluidos}
      </div>
    </SectionShell>
  )
}
