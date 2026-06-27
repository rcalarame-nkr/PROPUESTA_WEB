/**
 * ProposalContext
 * Provides global proposal data and PDF generation trigger
 * to all components via Context API.
 */
import { createContext, useContext, useState } from 'react'

const ProposalContext = createContext(null)

export const PROPOSAL_DATA = {
  poliza:       '2800-0170719-04',
  tomador:      'Ángel Estrada y CIA S.A.',
  cuit:         '30-50023556-6',
  asegurables:  'Directores y Gerentes / Apoderados / Autoridades',
  vigencia:     '2026 – 2027',
  baseReclamo:  'Claims Made',
  retroactividad: 'Ilimitada, excepto hechos conocidos y no reportados',
  ambito:       'Mundial',
  paisesExcluidos:
    'Irán, Siria, Corea del Norte, Crimea, Donetsk, Lugansk, Jersón, Zaporiyia, Bielorrusia, Federación Rusa, Cuba, Venezuela, Afganistán, Myanmar (Birmania), República Centroafricana, República Democrática del Congo, Haití, Irak, Líbano, Libia, Nicaragua, Somalia, Sudán del Sur, Sudán, Yemen y Zimbabue.',

  coberturas: [
    {
      letra: 'A',
      titulo: 'Directores y Funcionarios',
      descripcion:
        'Protege el patrimonio personal de los Directores y Funcionarios frente a reclamaciones de terceros por actos u omisiones cometidos en el ejercicio de sus cargos, cuando la empresa no puede o no desea reembolsar.',
      tipo: 'type-a',
    },
    {
      letra: 'B',
      titulo: 'Reembolso a la Sociedad',
      descripcion:
        'Cubre a la empresa cuando esta reembolsa a sus Directores y Funcionarios los gastos de defensa y/o indemnizaciones que haya pagado en su nombre, conforme su estatuto o la legislación aplicable.',
      tipo: 'type-b',
    },
    {
      letra: 'C',
      titulo: 'Operaciones sobre Valores — ON',
      descripcion:
        'Cubre reclamaciones relacionadas con la emisión de Obligaciones Negociables, protegiendo a la empresa y a sus directivos ante demandas vinculadas a valores del mercado de capitales.',
      tipo: 'type-c',
    },
  ],

  sumaAsegurada: 'USD 3.000.000',
  sumaDetalle:   'Por evento y en el agregado anual, incluyendo gastos de defensa',

  deducibles: [
    { cobertura: 'Cobertura "A"', descripcion: 'Directores y Funcionarios',        monto: 'USD 0',      sinDeducible: true },
    { cobertura: 'Cobertura "B"', descripcion: 'Reembolso a la Sociedad',          monto: 'USD 0',      sinDeducible: true },
    { cobertura: 'Cobertura "C"', descripcion: 'Operaciones sobre Valores — ON',   monto: 'USD 20.000', sinDeducible: false },
  ],

  periodosAdicionales: [
    { years: 3, costo: 'Sin prima adicional', esFree: true },
    { years: 6, costo: '120% del costo',      esFree: false },
  ],

  coberturasAdicionales: [
    { icon: '👨‍👩‍👧', titulo: 'Cónyuge y Herederos',             descripcion: 'Extensión al cónyuge, representantes legales y herederos de la Persona Asegurada.', sublimite: null },
    { icon: '🔍', titulo: 'Síndicos y Comité de Auditoría',   descripcion: 'Inclusión de síndicos, comité de auditoría, apoderados y representantes legales como asegurados.', sublimite: null },
    { icon: '⚖️', titulo: 'Reclamos Laborales',               descripcion: 'Cobertura para reclamos en materia laboral contra los asegurados por empleados, ex empleados o aspirantes.', sublimite: null },
    { icon: '🌐', titulo: 'Org. Sin Fines de Lucro',          descripcion: 'Cobertura para Directores que actúen en organizaciones sin fines de lucro.', sublimite: null },
    { icon: '🏛️', titulo: 'Investigación Formal',             descripcion: 'Gastos de representación legal en una investigación formal contra la Compañía.', sublimite: null },
    { icon: '💼', titulo: 'Responsabilidad Tributaria',        descripcion: 'Impuestos, sanciones y multas en caso de insolvencia de la Compañía que el Asegurado deba soportar.', sublimite: null },
    { icon: '📅', titulo: 'Período Ampliado de Denuncia',     descripcion: 'Plazo ampliado de 45 días para denuncia de siniestros.', sublimite: null },
    { icon: '⚖️', titulo: 'Fianzas y Cauciones Judiciales',   descripcion: 'Pago de primas por fianzas y cauciones judiciales.', sublimite: null },
    { icon: '🏢', titulo: 'Nuevas Filiales Automáticas',      descripcion: 'Inclusión automática de nuevas filiales hasta el 25% de los activos consolidados.', sublimite: null },
    { icon: '🔗', titulo: 'Full Severability',                descripcion: 'Divisibilidad plena: las declaraciones inexactas de un asegurado no afectan la cobertura de los demás.', sublimite: null },
    { icon: '📣', titulo: 'Crisis y Reputación',              descripcion: 'Costos de gestión de crisis y protección de reputación con consentimiento previo del asegurador.', sublimite: 'USD 600.000' },
    { icon: '🌿', titulo: 'Defensa por Contaminación',        descripcion: 'Gastos de defensa en reclamaciones causadas por contaminación ambiental.', sublimite: 'USD 600.000' },
    { icon: '🌿', titulo: 'Pérdida por Contaminación',        descripcion: 'Pérdida por reclamos de perjuicio financiero por contaminación sin daño material o corporal.', sublimite: 'USD 600.000' },
    { icon: '⚡', titulo: 'Gastos de Defensa de Emergencia',  descripcion: 'Cobertura para gastos de defensa ante situaciones urgentes que requieran acción inmediata.', sublimite: 'USD 300.000' },
    { icon: '🔒', titulo: 'Garantía de Renuncia de Derechos', descripcion: 'El asegurador renuncia irrevocablemente a resolver o rescindir el interés de las Personas Aseguradas, salvo mora en prima o dolo/culpa grave.', sublimite: null },
    { icon: '📋', titulo: 'Multas Civiles y Administrativas', descripcion: 'Multas legalmente asegurables, no penales, que forman parte del límite total de responsabilidad.', sublimite: 'USD 150.000' },
    { icon: '📅', titulo: 'Período Adicional Automático (Retiro)', descripcion: '3 años de período adicional para asegurados retirados antes de cancelación o no renovación.', sublimite: null },
  ],

  exclusiones: [
    { titulo: 'Errores y Omisiones Profesionales',          descripcion: 'Reclamos derivados de la actividad profesional específica de la empresa.' },
    { titulo: 'Guerra y Terrorismo',                        descripcion: 'Pérdidas causadas por actos bélicos o de terrorismo en cualquiera de sus formas.' },
    { titulo: 'Oferta Inicial de Valores (IPO)',            descripcion: 'Reclamos vinculados a la oferta pública inicial de acciones u otros valores.' },
    { titulo: 'Demandas y Hechos Anteriores Conocidos',     descripcion: 'Reclamos basados en hechos conocidos, anteriores o pendientes a la fecha de continuidad.' },
    { titulo: 'Cláusula de Sanciones',                     descripcion: 'Cobertura que implique violar legislación aplicable sobre sanciones internacionales.' },
    { titulo: 'Enfermedades Transmisibles',                 descripcion: 'Pérdidas causadas directa o indirectamente por enfermedades transmisibles o pandemias.' },
    { titulo: 'Demás Exclusiones',                         descripcion: 'Resto de exclusiones según el texto y condiciones particulares de la póliza emitida.' },
  ],

  aseguradora: {
    nombre:    'La Caja de Ahorro y Seguro S.A.',
    descripcion: 'Compañía aseguradora con presencia nacional, especializada en seguros corporativos y soluciones para el mercado empresario argentino.',
  },

  primaAnual:  'USD 3.830',
  primaDetalle: 'Más IVA e IIBB de corresponder',
  formaPago:   '3 cuotas',

  contacto: {
    empresa:   'Norfolk Risk Insurance Brokers',
    web:       'www.norfolkrisk.com.ar',
    email:     'info@norfolkrisk.com.ar',
    jurisdiccion: 'CABA / Buenos Aires — República Argentina',
  },

  fechaEmision: '26 de junio de 2026',
}

export function ProposalProvider({ children }) {
  const [activeSectionId, setActiveSectionId] = useState('portada')

  return (
    <ProposalContext.Provider value={{ data: PROPOSAL_DATA, activeSectionId, setActiveSectionId }}>
      {children}
    </ProposalContext.Provider>
  )
}

export function useProposal() {
  const ctx = useContext(ProposalContext)
  if (!ctx) throw new Error('useProposal must be used inside ProposalProvider')
  return ctx
}
