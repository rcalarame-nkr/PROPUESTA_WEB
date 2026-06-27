/**
 * pageDecorations.js
 * Draws the repeating header and footer on every interior PDF page.
 * Keeps drawing logic decoupled from capture logic (SRP).
 *
 * @param {import('jspdf').jsPDF} doc
 * @param {number} pageNum   - current page number (1-based)
 * @param {number} totalPages
 */
export function drawPageHeader(doc, pageNum) {
  const W = 210

  // Navy bar
  doc.setFillColor(10, 22, 40)
  doc.rect(0, 0, W, 16, 'F')

  // Logo mark
  doc.setFillColor(200, 151, 42)
  doc.roundedRect(6, 3, 10, 10, 1, 1, 'F')
  doc.setFontSize(7); doc.setFont('helvetica', 'bold')
  doc.setTextColor(10, 22, 40)
  doc.text('NR', 11, 9.5, { align: 'center' })

  // Brand
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.text('NORFOLK RISK', 20, 8)
  doc.setFontSize(5.5); doc.setFont('helvetica', 'normal')
  doc.setTextColor(136, 146, 164)
  doc.text('INSURANCE BROKERS', 20, 12.5)

  // Right: proposal reference
  if (pageNum > 1) {
    doc.setFontSize(6.5); doc.setFont('helvetica', 'italic')
    doc.setTextColor(200, 151, 42)
    doc.text('D&O · Ángel Estrada y CIA S.A. · 2026–2027', W - 8, 9.5, { align: 'right' })
  }

  // Accent underline
  doc.setFillColor(200, 151, 42)
  doc.rect(0, 16, W, 0.8, 'F')
}

export function drawPageFooter(doc, pageNum, totalPages) {
  const W = 210
  const y = 287

  doc.setFillColor(10, 22, 40)
  doc.rect(0, y, W, 10, 'F')

  doc.setFontSize(6); doc.setFont('helvetica', 'normal')
  doc.setTextColor(136, 146, 164)
  doc.text('Norfolk Risk Insurance Brokers · Propuesta D&O · Confidencial', 10, y + 6)
  doc.text(`Página ${pageNum} de ${totalPages}`, W - 8, y + 6, { align: 'right' })
}
