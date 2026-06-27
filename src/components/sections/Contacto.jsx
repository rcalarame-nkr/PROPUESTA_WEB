import { useProposal } from '../../context/ProposalContext'
import SectionShell from './SectionShell'
import styles from './Contacto.module.css'

export default function Contacto() {
  const { data } = useProposal()
  const { contacto } = data

  const cards = [
    { icon: '🏢', title: 'Norfolk Risk',      body: 'Insurance Brokers',   link: contacto.web,   linkLabel: contacto.web },
    { icon: '📧', title: 'Correo',            body: 'Consultas y siniestros', link: `mailto:${contacto.email}`, linkLabel: contacto.email },
    { icon: '📞', title: 'Ejecutivo',         body: 'Atención comercial',   link: null,           linkLabel: 'Consultar internamente' },
    { icon: '📍', title: 'Jurisdicción',      body: contacto.jurisdiccion,  link: null,           linkLabel: null },
  ]

  return (
    <SectionShell id="contacto" eyebrow="Equipo" title="Contacto">
      <div className={styles.grid}>
        {cards.map((c) => (
          <div key={c.title} className={styles.card}>
            <div className={styles.iconBox}>{c.icon}</div>
            <h4 className={styles.cardTitle}>{c.title}</h4>
            <p className={styles.cardBody}>{c.body}</p>
            {c.link && <a href={c.link} className={styles.link}>{c.linkLabel}</a>}
            {!c.link && c.linkLabel && <span className={styles.muted}>{c.linkLabel}</span>}
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div className={styles.footer}>
        <p>
          <strong>Norfolk Risk Insurance Brokers</strong> · Propuesta D&amp;O · Ángel Estrada y CIA S.A. · 2026–2027
        </p>
        <p>Documento generado el <strong>{data.fechaEmision}</strong> · Confidencial — uso exclusivo del tomador y su broker</p>
      </div>
    </SectionShell>
  )
}
