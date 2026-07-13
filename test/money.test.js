import test from 'node:test'
import assert from 'node:assert/strict'
import { dollarsToCents, formatCurrency } from '../src/utils/money.js'

test('converts decimal dollars to integer cents', () => {
  assert.equal(dollarsToCents('12.50'), 1250)
})

test('accepts common currency formatting', () => {
  assert.equal(dollarsToCents('$2,400.99'), 240099)
})

test('returns zero for empty, negative, and invalid values', () => {
  assert.equal(dollarsToCents(''), 0)
  assert.equal(dollarsToCents('-50'), 0)
  assert.equal(dollarsToCents('not money'), 0)
})

test('formats cents as US dollars', () => {
  assert.equal(formatCurrency(1250), '$12.50')
})
