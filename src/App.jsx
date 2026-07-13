import { useState } from 'react'
import MoneyInput from './components/MoneyInput.jsx'
import SummaryCard from './components/SummaryCard.jsx'
import { dollarsToCents } from './utils/money.js'
import './App.css'

function App() {
  // Store only what the user types. Everything else is derived below.
  const [paycheck, setPaycheck] = useState('')
  const [bills, setBills] = useState('')

  const paycheckCents = dollarsToCents(paycheck)
  const billsCents = dollarsToCents(bills)
  const remainingCents = paycheckCents - billsCents
  const hasValues = paycheck !== '' || bills !== ''

  function resetPlanner() {
    setPaycheck('')
    setBills('')
  }

  return (
    <main className="app-shell">
      <header className="page-header">
        <a className="brand" href="#planner" aria-label="Paycheck Planner home">
          <span className="brand-mark" aria-hidden="true">
            PP
          </span>
          <span>Paycheck Planner</span>
        </a>

        <div className="hero-copy">
          <p className="eyebrow">A clearer plan starts here</p>
          <h1>Know what is left before you spend it.</h1>
          <p className="hero-description">
            Enter your take-home paycheck and total bills. We will show whether
            you have breathing room or need to adjust the plan.
          </p>
        </div>
      </header>

      <section className="planner-layout" id="planner" aria-labelledby="planner-title">
        <div className="input-card">
          <div className="section-heading">
            <div>
              <p className="step-label">Step 1 of 1</p>
              <h2 id="planner-title">Plan this paycheck</h2>
            </div>
            <span className="privacy-note">No data leaves your browser</span>
          </div>

          <form onSubmit={(event) => event.preventDefault()}>
            <MoneyInput
              id="paycheck"
              label="Take-home paycheck"
              value={paycheck}
              onChange={setPaycheck}
              helperText="Use the amount deposited after taxes and deductions."
              placeholder="2,400.00"
            />

            <MoneyInput
              id="bills"
              label="Total bills"
              value={bills}
              onChange={setBills}
              helperText="Add the bills that must be paid from this paycheck."
              placeholder="1,850.00"
            />

            <button
              className="reset-button"
              type="button"
              onClick={resetPlanner}
              disabled={!hasValues}
            >
              Reset amounts
            </button>
          </form>

          <aside className="learning-note" aria-label="How the calculator works">
            <span className="learning-icon" aria-hidden="true">
              i
            </span>
            <p>
              <strong>How it works:</strong> amounts are converted to integer
              cents before subtraction, which avoids common decimal rounding
              surprises in JavaScript.
            </p>
          </aside>
        </div>

        <SummaryCard
          paycheckCents={paycheckCents}
          billsCents={billsCents}
          remainingCents={remainingCents}
          hasValues={hasValues}
        />
      </section>

      <footer className="page-footer">
        <p>Simple planning, one paycheck at a time.</p>
        <p>This calculator is educational and does not provide financial advice.</p>
      </footer>
    </main>
  )
}

export default App
