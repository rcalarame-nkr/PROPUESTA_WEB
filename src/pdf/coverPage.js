/**
 * coverPage.js
 * Draws the D&O proposal cover page onto a jsPDF document instance.
 * Separated from pdfService for Single Responsibility.
 *
 * @param {import('jspdf').jsPDF} doc
 * @param {object} data  - ProposalContext data object
 */
export function drawCoverPage(doc, data) {
  const W = 210
  const H = 297

  // ── Background ──────────────────────────────────────────────────────
  doc.setFillColor(10, 22, 40)
  doc.rect(0, 0, W, H, 'F')

  // Left accent bar
  doc.setFillColor(200, 151, 42)
  doc.rect(0, 0, 5, H, 'F')

  // ── Header strip ────────────────────────────────────────────────────
  doc.setFillColor(18, 32, 64)
  doc.rect(0, 0, W, 24, 'F')

  // Logo mark square
  doc.setFillColor(200, 151, 42)
  doc.roundedRect(9, 5, 13, 13, 1.5, 1.5, 'F')
  doc.setFontSize(9); doc.setFont('helvetica', 'bold')
  doc.setTextColor(10, 22, 40)
  doc.text('NR', 15.5, 13.5, { align: 'center' })

  // Brand name
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(11); doc.setFont('helvetica', 'bold')
  doc.text('NORFOLK RISK', 26, 11)
  doc.setFontSize(6.5); doc.setFont('helvetica', 'normal')
  doc.setTextColor(136, 146, 164)
  doc.text('INSURANCE BROKERS', 26, 17)

  // Renewal badge (top right)
  doc.setFontSize(7); doc.setFont('helvetica', 'bold')
  doc.setTextColor(200, 151, 42)
  doc.text('PROPUESTA DE RENOVACIÓN', W - 8, 13, { align: 'right' })

  // ── Decorative circle ───────────────────────────────────────────────
  doc.setFillColor(26, 60, 110)
  doc.circle(165, 115, 52, 'F')
  doc.setFillColor(22, 50, 90)
  doc.circle(165, 115, 40, 'F')

  // ── Policy number box ───────────────────────────────────────────────
  doc.setFillColor(30, 55, 95)
  doc.roundedRect(W - 80, 28, 72, 20, 2, 2, 'F')
  doc.setFontSize(6); doc.setFont('helvetica', 'bold')
  doc.setTextColor(136, 146, 164)
  doc.text('N° DE PÓLIZA', W - 44, 36, { align: 'center' })
  doc.setFontSize(9); doc.setFont('courier', 'bold')
  doc.setTextColor(200, 151, 42)
  doc.text(data.poliza, W - 44, 44, { align: 'center' })

  // ── Main Title ──────────────────────────────────────────────────────
  doc.setFontSize(26); doc.setFont('helvetica', 'bold')
  doc.setTextColor(255, 255, 255)
  doc.text('Responsabilidad Civil', 14, 74)

  doc.setFontSize(26)
  doc.setTextColor(232, 184, 75)
  doc.text('Directores y Gerentes', 14, 86)

  doc.setFontSize(10); doc.setFont('helvetica', 'normal')
  doc.setTextColor(136, 146, 164)
  doc.text('Directors & Officers Liability  ·  D&O', 14, 96)

  // Accent rule
  doc.setFillColor(200, 151, 42)
  doc.rect(14, 100, 62, 1, 'F')

  // ── Meta info grid (2 × 2) ──────────────────────────────────────────
  const meta = [
    { label: 'TOMADOR',          value: data.tomador },
    { label: 'CUIT',             value: data.cuit },
    { label: 'VIGENCIA',         value: data.vigencia },
    { label: 'BASE DEL RECLAMO', value: data.baseReclamo },
  ]

  meta.forEach((item, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const x   = 14 + col * 96
    const y   = 112 + row * 22

    doc.setFillColor(22, 40, 70)
    doc.roundedRect(x, y, 88, 18, 2, 2, 'F')

    doc.setFontSize(6); doc.setFont('helvetica', 'bold')
    doc.setTextColor(136, 146, 164)
    doc.text(item.label, x + 5, y + 6)

    doc.setFontSize(9); doc.setFont('helvetica', 'bold')
    doc.setTextColor(255, 255, 255)
    // Truncate long values
    const val = item.value.length > 30 ? item.value.slice(0, 28) + '…' : item.value
    doc.text(val, x + 5, y + 14)
  })

  // ── Broker box ──────────────────────────────────────────────────────
  doc.setFillColor(18, 32, 64)
  doc.roundedRect(14, 158, 88, 22, 2, 2, 'F')
  doc.setFontSize(6); doc.setFont('helvetica', 'bold')
  doc.setTextColor(136, 146, 164)
  doc.text('BROKER', 19, 166)
  doc.setFontSize(10); doc.setFont('helvetica', 'bold')
  doc.setTextColor(232, 184, 75)
  doc.text('Norfolk Risk Insurance Brokers', 19, 175)

  // ── Footer strip ────────────────────────────────────────────────────
  doc.setFillColor(18, 32, 64)
  doc.rect(0, H - 28, W, 28, 'F')

  doc.setFontSize(7); doc.setFont('helvetica', 'normal')
  doc.setTextColor(136, 146, 164)
  doc.text(
    `Generado el ${data.fechaEmision}  ·  Norfolk Risk Insurance Brokers  ·  Documento Confidencial`,
    W / 2,
    H - 16,
    { align: 'center' }
  )
  doc.text('www.norfolkrisk.com.ar  ·  info@norfolkrisk.com.ar', W / 2, H - 9, { align: 'center' })

  // Bottom accent line
  doc.setFillColor(200, 151, 42)
  doc.rect(0, H - 3, W, 3, 'F')
}
