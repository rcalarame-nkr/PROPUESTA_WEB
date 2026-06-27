import SectionShell from './SectionShell'
import styles from './Observaciones.module.css'

export default function Observaciones() {
  return (
    <SectionShell id="observaciones" eyebrow="Notas" title="Observaciones" alt>
      <div className={styles.card}>
        <h4 className={styles.cardTitle}>Condiciones Generales</h4>
        <p>
          La presente propuesta tiene carácter informativo y no constituye emisión de póliza.
          Las condiciones definitivas quedan sujetas a la aceptación formal por parte de la
          aseguradora y a la suscripción del tomador.
        </p>
        <p>
          La póliza se rige por la legislación argentina aplicable y las condiciones
          particulares acordadas entre las partes. En caso de discrepancia entre la presente
          propuesta y el texto definitivo de la póliza, prevalecerá este último.
        </p>
        <p>
          Para cualquier consulta o aclaración, no dude en comunicarse con su ejecutivo de
          cuenta en <strong>Norfolk Risk Insurance Brokers</strong>.
        </p>
      </div>
    </SectionShell>
  )
}
