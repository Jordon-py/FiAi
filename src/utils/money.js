const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

/**
 * Converts user-entered dollars into integer cents.
 * Example: "24.99" becomes 2499.
 */
export function dollarsToCents(value) {
  const normalizedValue = String(value).replace(/[$,\s]/g, '')
  const amount = Number(normalizedValue)

  if (!Number.isFinite(amount) || amount < 0) {
    return 0
  }

  return Math.round(amount * 100)
}

/**
 * Converts integer cents into US currency.
 * Example: 2499 becomes "$24.99".
 */
export function formatCurrency(cents) {
  return currencyFormatter.format(cents / 100)
}
