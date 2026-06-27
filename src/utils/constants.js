/**
 * constants.js
 * Application-wide constants. Import from here instead of
 * hardcoding magic strings/values throughout components.
 */

export const BRAND = {
  name:    'Norfolk Risk',
  tagline: 'Insurance Brokers',
  email:   'info@norfolkrisk.com.ar',
  web:     'www.norfolkrisk.com.ar',
  city:    'Ciudad Autónoma de Buenos Aires',
  country: 'Argentina',
}

export const COLORS = {
  navy:      '#0A1628',
  navyMid:   '#122040',
  blue:      '#1A3C6E',
  blueLight: '#2D6BC4',
  accent:    '#C8972A',
  accentLt:  '#E8B84B',
  green:     '#1E6B4A',
  red:       '#DC3545',
}

export const SECTION_IDS = [
  'portada',
  'presentacion',
  'cliente',
  'coberturas',
  'suma',
  'deducibles',
  'adicionales',
  'exclusiones',
  'aseguradora',
  'prima',
  'pago',
  'observaciones',
  'contacto',
]

export const SECTION_LABELS = {
  portada:       'Portada',
  presentacion:  'Presentación',
  cliente:       'Datos del Cliente',
  coberturas:    'Coberturas',
  suma:          'Suma Asegurada',
  deducibles:    'Deducibles',
  adicionales:   'Coberturas Adicionales',
  exclusiones:   'Exclusiones',
  aseguradora:   'Aseguradora',
  prima:         'Prima',
  pago:          'Forma de Pago',
  observaciones: 'Observaciones',
  contacto:      'Contacto',
}

export const PDF_CONFIG = {
  pageWidth:  210,   // A4 mm
  pageHeight: 297,   // A4 mm
  marginH:    10,    // horizontal margin mm
  headerH:    17,    // header height mm
  footerH:    10,    // footer height mm
  scale:      2,     // html2canvas scale factor
  imgQuality: 0.90,  // JPEG quality
}
