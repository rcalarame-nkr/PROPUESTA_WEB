export const proposalData = {
  broker: {
    name: 'Norfolk Risk',
    shortName: 'NORFOLK',
    tagline: 'Risk & insurance advisory',
    email: 'comercial@norfolkrisk.com',
    phone: '+54 11 0000 0000',
  },
  meta: {
    product: 'Responsabilidad Civil Directores y Gerentes',
    proposalType: 'Propuesta de renovacion',
    period: '2026 - 2027',
    policyNumber: '2800-0170719-04',
    date: 'Junio 2026',
    sourceNote:
      'Contenido extraido de la presentacion Word 97-2003 provista por el usuario.',
  },
  client: {
    name: 'Angel Estrada y CIA S.A.',
    cuit: '30-50023556-6',
    insuredGroup: 'Directores y Gerentes, apoderados y autoridades de la empresa tomadora',
  },
  coverage: {
    basis: 'Claims made',
    insuredAmount:
      'USD 3.000.000 por evento y en el agregado anual, incluyendo gastos de defensa.',
    scope:
      'Mundial, excepto paises sancionados: Iran, Siria, Corea del Norte, Crimea, Donetsk, Lugansk, Jerson y Zaporiyia, Bielorrusia, Federacion Rusa, Cuba, Venezuela, Afganistan, Myanmar (Birmania), Republica Centroafricana, Republica Democratica del Congo, Haiti, Irak, Libano, Libia, Nicaragua, Somalia, Sudan del Sur, Sudan, Yemen y Zimbabue.',
    retroactivity: 'Ilimitada, excepto hechos conocidos y no reportados.',
    mainCoverages: [
      {
        label: 'Cobertura A',
        value: 'Directores y Funcionarios.',
      },
      {
        label: 'Cobertura B',
        value:
          'Reembolso a la Sociedad por sumas abonadas en nombre de Directores y/o Funcionarios.',
      },
      {
        label: 'Cobertura C',
        value: 'Operaciones sobre valores por la emision de Obligaciones Negociables.',
      },
    ],
    deductibles: [
      { label: 'Cobertura A', value: 'USD 0 - sin deducible' },
      { label: 'Cobertura B', value: 'USD 0 - sin deducible' },
      { label: 'Cobertura C', value: 'USD 20.000' },
    ],
    notificationPeriod: [
      { term: '3 anos', cost: 'Sin prima adicional' },
      { term: '6 anos', cost: '120% del costo' },
    ],
    extensions: [
      'Extension al conyuge, representantes legales y herederos de la persona asegurada.',
      'Inclusion de sindicos, comite de auditoria, apoderados y representantes legales de la compania como asegurados.',
      'Inclusion de reclamos en materia laboral contra los asegurados (empleados, ex empleados o aspirantes).',
      'Cobertura para directores en organizaciones sin fines de lucro.',
      'Gastos de representacion legal en una investigacion formal contra la compania.',
      'Responsabilidad tributaria: impuestos, sanciones y multas en caso de insolvencia de la compania cuando el asegurado deba soportar la perdida.',
      'Periodo ampliado de denuncia de siniestros a 45 dias.',
      'Pago de primas por fianzas y cauciones judiciales.',
      'Inclusion automatica de nuevas filiales hasta el 25% de los activos consolidados.',
      'Full severability (divisibilidad).',
      'Eventos de crisis y costes de proteccion de reputacion hasta el sub-limite de USD 600.000 por evento y en el agregado anual.',
      'Gastos de defensa por reclamos contra asegurados causados por contaminacion hasta un sub-limite de USD 600.000 por evento y en el agregado anual.',
      'Perdida financiera causada por contaminacion, sin dano material ni lesion corporal, hasta un sub-limite de USD 600.000 por evento y en el agregado anual.',
      'Gastos de defensa de emergencia hasta un sub-limite de USD 300.000 por evento y en el agregado anual.',
      'Periodo adicional automatico de 3 anos para asegurados retirados antes de la cancelacion o no renovacion de la cobertura.',
      'Garantia de renuncia de derechos, excepto por mora en el pago de prima o reserva/inexactitud mediando dolo o culpa grave.',
      'Multas civiles y administrativas legalmente asegurables y no penales, sub-limite de USD 150.000 por evento y en el agregado anual.',
      'Cobertura de operaciones sobre valores por la emision de Obligaciones Negociables (Cobertura C).',
    ],
    exclusions: [
      'Errores y omisiones profesionales.',
      'Guerra / terrorismo.',
      'Oferta inicial de valores.',
      'Reclamos basados en demandas y hechos conocidos, anteriores o pendientes a la fecha de continuidad.',
      'Clausula de limitacion y exclusion por sanciones.',
      'Enfermedades transmisibles.',
      'Resto de exclusiones segun texto aplicable.',
    ],
  },
  insurer: {
    name: 'La Caja de Ahorro y Seguro',
    annualCost: 'USD 3.830 mas IVA e IIBB de corresponder',
    paymentTerms: '3 cuotas',
  },
  observations: [
    'La presente propuesta resume condiciones comerciales principales y queda sujeta al texto de poliza aplicable.',
    'La cobertura opera sobre base claims made.',
    'Los sub-limites mencionados forman parte del limite total de responsabilidad salvo indicacion expresa en contrario.',
  ],
};

export const proposalSections = [
  { id: 'cover', label: 'Portada' },
  { id: 'presentation', label: 'Presentacion' },
  { id: 'client-data', label: 'Datos del cliente' },
  { id: 'coverages', label: 'Coberturas' },
  { id: 'insured-amount', label: 'Suma asegurada' },
  { id: 'deductibles', label: 'Deducibles' },
  { id: 'additional-coverages', label: 'Extensiones' },
  { id: 'exclusions', label: 'Exclusiones' },
  { id: 'insurer', label: 'Aseguradora' },
  { id: 'premium', label: 'Prima' },
  { id: 'payment-terms', label: 'Forma de pago' },
  { id: 'observations', label: 'Observaciones' },
  { id: 'contact', label: 'Contacto' },
];
