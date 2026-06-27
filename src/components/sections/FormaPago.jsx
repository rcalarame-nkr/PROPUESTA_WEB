import { useState } from 'react'
import SectionShell from './SectionShell'
import styles from './FormaPago.module.css'

const OPTIONS = [
  { cuotas: 1, label: 'Cuota única' },
  { cuotas: 3, label: 'Cuotas (propuesto)', default: true },
  { cuotas: 6, label: 'Cuotas (consultar)' },
  { cuotas: 12, label: 'Cuotas (consultar)' },
]

export default function FormaPago() {
  const [selected, setSelected] = useState(3)
  return (
    <SectionShell id="pago" eyebrow="Financiación" title="Forma de Pago">
      <div className={styles.options}>
        {OPTIONS.map((opt) => (
          <button
            key={opt.cuotas}
            className={[styles.card, selected === opt.cuotas ? styles.active : ''].join(' ')}
            onClick={() => setSelected(opt.cuotas)}
          >
            <span className={styles.num}>{opt.cuotas}</span>
            <span className={styles.lbl}>{opt.label}</span>
          </button>
        ))}
      </div>
      <div className={styles.note}>
        📌 La propuesta contempla el pago en <strong>{selected} cuota{selected !== 1 ? 's' : ''}</strong>.
        Condiciones finales sujetas a confirmación de la compañía aseguradora.
      </div>
    </SectionShell>
  )
}
