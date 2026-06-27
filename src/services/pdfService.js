/**
 * pdfService.js
 * Orchestrates full PDF generation:
 *   1. Draws the cover page (via coverPage.js)
 *   2. Captures each section with html2canvas
 *   3. Places captures onto A4 pages with auto-splitting
 *   4. Adds header / footer decorations (via pageDecorations.js)
 *   5. Saves the resulting PDF
 */
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { drawCoverPage } from '../pdf/coverPage'
import { drawPageHeader, drawPageFooter } from '../pdf/pageDecorations'
import { SECTION_IDS, PDF_CONFIG } from '../utils/constants'

const { pageWidth: W, pageHeight: H, marginH, headerH, footerH, scale, imgQuality } = PDF_CONFIG

// Usable content area per page (mm)
const USABLE_W = W - marginH * 2
const USABLE_H = H - headerH - footerH - 4   // 4 mm breathing room

/**
 * Captures a DOM element as a JPEG data URL.
 * @param {HTMLElement} el
 * @returns {Promise<HTMLCanvasElement>}
 */
async function captureElement(el) {
  return html2canvas(el, {
    scale,
    useCORS: true,
    backgroundColor: '#F7F8FA',
    logging: false,
    windowWidth: 1200,       // force desktop layout
    scrollY: -window.scrollY,
  })
}

/**
 * Slices a canvas vertically and returns a new canvas for the given pixel range.
 * @param {HTMLCanvasElement} src
 * @param {number} srcY  - start pixel row
 * @param {number} srcH  - height in pixels
 * @returns {HTMLCanvasElement}
 */
function sliceCanvas(src, srcY, srcH) {
  const slice = document.createElement('canvas')
  slice.width  = src.width
  slice.height = srcH
  slice.getContext('2d').drawImage(src, 0, srcY, src.width, srcH, 0, 0, src.width, srcH)
  return slice
}

/**
 * Places a canvas (or canvas slice) into the current PDF page.
 * @param {import('jspdf').jsPDF} doc
 * @param {HTMLCanvasElement} canvas
 * @param {number} mmH  - desired printed height in mm
 */
function placeCanvas(doc, canvas, mmH) {
  const imgData = canvas.toDataURL('image/jpeg', imgQuality)
  doc.addImage(imgData, 'JPEG', marginH, headerH + 2, USABLE_W, mmH)
}

/**
 * Main export — call from a React component (e.g. Navbar PDF button).
 * @param {object} data - ProposalContext data
 */
export async function generatePDF(data) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

  // ── Page 1: Cover ──────────────────────────────────────────────────
  drawCoverPage(doc, data)

  // ── Pages 2+: Section captures ─────────────────────────────────────
  // Skip 'portada' (it's the visual cover rendered above)
  const sectionsToPrint = SECTION_IDS.filter((id) => id !== 'portada')

  let currentPage = 2

  for (const id of sectionsToPrint) {
    const el = document.getElementById(id)
    if (!el) continue

    const canvas  = await captureElement(el)
    const totalMmH = (canvas.height / canvas.width) * USABLE_W  // proportional mm height

    if (totalMmH <= USABLE_H) {
      // ── Fits on one page ──────────────────────────────────────────
      doc.addPage()
      drawPageHeader(doc, currentPage)
      placeCanvas(doc, canvas, totalMmH)
      currentPage++
    } else {
      // ── Needs multiple pages ──────────────────────────────────────
      const pxPerMm  = canvas.height / totalMmH      // pixels per mm
      const maxPxH   = Math.floor(USABLE_H * pxPerMm) // max px per page slice
      let renderedPx = 0
      let isFirst    = true

      while (renderedPx < canvas.height) {
        const slicePx   = Math.min(maxPxH, canvas.height - renderedPx)
        const sliceMmH  = slicePx / pxPerMm
        const sliceCvs  = sliceCanvas(canvas, renderedPx, slicePx)

        if (!isFirst) doc.addPage()
        drawPageHeader(doc, currentPage)
        placeCanvas(doc, sliceCvs, sliceMmH)

        renderedPx += slicePx
        currentPage++
        isFirst = false
      }
    }
  }

  // ── Retroactively add footers to all non-cover pages ──────────────
  const totalPages = doc.getNumberOfPages()
  for (let p = 2; p <= totalPages; p++) {
    doc.setPage(p)
    drawPageFooter(doc, p, totalPages)
  }

  // ── Save ──────────────────────────────────────────────────────────
  const year = new Date().getFullYear()
  doc.save(`propuesta-do-angel-estrada-${year}.pdf`)
}
