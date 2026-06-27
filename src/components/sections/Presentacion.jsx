import SectionShell from './SectionShell'
import styles from './Presentacion.module.css'

export default function Presentacion() {
  return (
    <SectionShell id="presentacion" eyebrow="Introducción" title="Presentación de la Propuesta" alt>
      <div className={styles.body}>
        <p>
          En nombre de <strong>Norfolk Risk Insurance Brokers</strong>, tenemos el agrado de presentar
          la propuesta de renovación de la póliza de Responsabilidad Civil para Directores y Gerentes
          (D&amp;O) correspondiente al período <strong>2026–2027</strong>.
        </p>
        <p>
          El seguro de D&amp;O protege el patrimonio personal de los directivos frente a reclamaciones
          de terceros derivadas de actos u omisiones cometidos en el ejercicio de sus funciones,
          cubriendo honorarios legales, gastos de defensa y eventuales indemnizaciones.
        </p>
        <p>
          La presente propuesta ha sido diseñada atendiendo a las necesidades específicas del tomador,
          contemplando las mejores condiciones del mercado asegurador argentino e internacional.
        </p>
      </div>
    </SectionShell>
  )
}
