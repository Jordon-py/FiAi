import { formatCurrency } from '../utils/money.js'

export default function SummaryCard({
  paycheckCents,
  billsCents,
  remainingCents,
  hasValues,
}) {
  const isOverBudget = remainingCents < 0
  const paycheckUsed =
    paycheckCents > 0 ? Math.round((billsCents / paycheckCents) * 100) : 0
  const progressWidth = Math.min(paycheckUsed, 100)

  const resultLabel = isOverBudget ? 'Amount short' : 'Money remaining'
  const resultAmount = formatCurrency(Math.abs(remainingCents))

  return (
    <section
      className={`summary-card ${isOverBudget ? 'is-over' : 'is-on-track'}`}
      aria-labelledby="summary-title"
    >
      <div className="summary-heading">
        <p className="step-label">Your summary</p>
        <h2 id="summary-title">Paycheck snapshot</h2>
      </div>

      <div className="result-panel" aria-live="polite" aria-atomic="true">
        <span className="result-label">
          {hasValues ? resultLabel : 'Ready when you are'}
        </span>
        <strong className="result-amount">
          {hasValues ? resultAmount : '$0.00'}
        </strong>
        <p>
          {!hasValues
            ? 'Enter your paycheck and bills to see the result.'
            : isOverBudget
              ? `Your bills exceed this paycheck by ${resultAmount}.`
              : `You have ${resultAmount} left after bills.`}
        </p>
      </div>

      <dl className="summary-details">
        <div>
          <dt>Take-home paycheck</dt>
          <dd>{formatCurrency(paycheckCents)}</dd>
        </div>
        <div>
          <dt>Total bills</dt>
          <dd>{formatCurrency(billsCents)}</dd>
        </div>
      </dl>

      <div className="usage-block">
        <div className="usage-label">
          <span>Paycheck used by bills</span>
          <strong>{paycheckCents > 0 ? `${paycheckUsed}%` : '—'}</strong>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label="Percentage of paycheck used by bills"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={progressWidth}
        >
          <span style={{ width: `${progressWidth}%` }} />
        </div>
      </div>

      <p className="summary-tip">
        {isOverBudget
          ? 'Try reducing or moving a bill before spending on flexible expenses.'
          : 'Consider giving the remaining amount a job: save, spend, or pay down debt.'}
      </p>
    </section>
  )
}
