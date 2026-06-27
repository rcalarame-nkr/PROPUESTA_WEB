/**
 * Sidebar
 * Collapsible left navigation panel.
 * Links are grouped by topic and highlight the active section
 * in real-time via ProposalContext (driven by useScrollSpy).
 */
import { useProposal }    from '../../context/ProposalContext'
import { SECTION_LABELS } from '../../utils/constants'
import styles             from './Sidebar.module.css'

const NAV_ITEMS = [
  { id: 'portada',       icon: '🏛️', group: 'Propuesta'   },
  { id: 'presentacion',  icon: '📋', group: 'Propuesta'   },
  { id: 'cliente',       icon: '🏢', group: 'Propuesta'   },
  { id: 'coberturas',    icon: '🛡️', group: 'Cobertura'   },
  { id: 'suma',          icon: '💰', group: 'Cobertura'   },
  { id: 'deducibles',    icon: '📊', group: 'Cobertura'   },
  { id: 'adicionales',   icon: '➕', group: 'Cobertura'   },
  { id: 'exclusiones',   icon: '⚠️', group: 'Cobertura'   },
  { id: 'aseguradora',   icon: '🏦', group: 'Condiciones' },
  { id: 'prima',         icon: '💎', group: 'Condiciones' },
  { id: 'pago',          icon: '📅', group: 'Condiciones' },
  { id: 'observaciones', icon: '📝', group: 'Más'         },
  { id: 'contacto',      icon: '📞', group: 'Más'         },
]

/** Group nav items preserving insertion order */
function buildGroups(items) {
  const map = new Map()
  items.forEach((item) => {
    if (!map.has(item.group)) map.set(item.group, [])
    map.get(item.group).push(item)
  })
  return map
}

const GROUPS = buildGroups(NAV_ITEMS)

export default function Sidebar({ isOpen, isMobile, onClose }) {
  const { activeSectionId } = useProposal()

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    if (isMobile) onClose()
  }

  return (
    <aside
      className={[
        styles.sidebar,
        isMobile ? styles.mobile : '',
        isOpen   ? styles.open   : '',
      ].join(' ')}
      aria-label="Navegación de la propuesta"
    >
      <div className={styles.inner}>
        {[...GROUPS.entries()].map(([group, items], gi) => (
          <div key={group}>
            {gi > 0 && <hr className={styles.divider} />}
            <p className={styles.groupLabel}>{group}</p>

            {items.map((item) => (
              <button
                key={item.id}
                className={[
                  styles.link,
                  activeSectionId === item.id ? styles.active : '',
                ].join(' ')}
                onClick={() => handleClick(item.id)}
                title={SECTION_LABELS[item.id]}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.label}>{SECTION_LABELS[item.id]}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </aside>
  )
}
