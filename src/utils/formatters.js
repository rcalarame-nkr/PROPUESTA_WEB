/**
 * formatters.js
 * Pure utility functions for formatting data displayed in the proposal.
 * All functions are stateless and side-effect-free (SOLID: SRP).
 */

/**
 * Formats a numeric amount with thousands separators and optional currency prefix.
 * @param {number} amount - The numeric value.
 * @param {string} [currency='USD'] - Currency symbol/code.
 * @returns {string} e.g. "USD 3.000.000"
 */
export function formatCurrency(amount, currency = 'USD') {
  const formatted = amount.toLocaleString('es-AR')
  return `${currency} ${formatted}`
}

/**
 * Formats a date string to Argentine long format.
 * @param {string|Date} date
 * @returns {string} e.g. "26 de junio de 2026"
 */
export function formatDateLong(date) {
  return new Date(date).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * Truncates a string to a max length, appending ellipsis if needed.
 * @param {string} str
 * @param {number} maxLen
 * @returns {string}
 */
export function truncate(str, maxLen = 80) {
  if (!str || str.length <= maxLen) return str
  return str.slice(0, maxLen - 1) + '…'
}

/**
 * Returns initials (up to 2 chars) from a company or person name.
 * @param {string} name
 * @returns {string} e.g. "AE" for "Ángel Estrada"
 */
export function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}

/**
 * Converts a snake_case or camelCase string to Title Case label.
 * @param {string} key
 * @returns {string}
 */
export function keyToLabel(key = '') {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase())
    .trim()
}
