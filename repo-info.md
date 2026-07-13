# Repository Snapshot — Paycheck Planner

Generated: 2026-07-12 (America/Los_Angeles)

## Snapshot

- Root: `C:\Users\iProg\Desktop\FinanceAI\FiAi`
- Version: `0.1.0`
- Stack: React 19.2.7, Vite 8.1.4, JavaScript, custom CSS, Oxlint
- Git: not initialized; branch, commit, and change history are unavailable
- Application status: Phase 1 paycheck calculator implemented
- Health: lint passed, 4/4 tests passed, production build passed
- Security: `npm audit` reported 0 vulnerabilities
- Generated artifacts: `dist/` and `output/playwright/` (both ignored)

## Feature List

- Controlled inputs for take-home paycheck and total bills
- Integer-cent conversion and locale-aware US currency formatting
- Derived remaining or amount-short result
- Paycheck usage percentage with capped visual progress
- Positive and over-budget guidance
- Reset behavior
- Responsive desktop/mobile layout
- Accessible labels, focus states, and live result messaging

## Important Files

| File | Activity / usage signal | Purpose |
| --- | --- | --- |
| `src/App.jsx` | Main route and state owner | Connects input state, derived calculations, reset behavior, and page layout. |
| `src/components/SummaryCard.jsx` | Receives every derived total | Displays result status, currency totals, usage, and guidance. |
| `src/components/MoneyInput.jsx` | Reused for both inputs | Provides a labeled, controlled, accessible money field. |
| `src/utils/money.js` | Used by app, summary, and tests | Defines the financial calculation boundary. |
| `src/App.css` | Styles every visible feature | Owns the responsive visual system and interaction states. |

## Routes and Boundaries

### Frontend routes

| Path | Method | Description | Last updated |
| --- | --- | --- | --- |
| `/` | GET | Single-page Paycheck Planner calculator | 2026-07-12 |

### Backend API endpoints

None. Version one performs all calculations locally and makes no application
network requests.

### Data route

```text
User input
  -> App.jsx string state
  -> dollarsToCents()
  -> integer-cent subtraction
  -> SummaryCard.jsx
  -> formatCurrency()
  -> visible result
```

There is no persistence, authentication, analytics, bank connection, or server
storage.

## Pain Points and Constraints

- The folder is not a Git repository, so changes cannot yet be committed or
  restored through version control.
- Component interaction tests are not configured; the current four tests cover
  only the money utility boundary.
- Four unused Vite template assets remain (`public/icons.svg` and
  `src/assets/*`). They are no longer rendered, but deletion was withheld under
  the repository's explicit-confirmation cleanup rule.

## Next Steps

1. `README.md:64` / `src/App.jsx:9` — model named bill entries as an array and
   total them with `reduce`; this teaches immutable state and list rendering.
2. `README.md:67` / `src/components/MoneyInput.jsx:1` — add reusable inline
   validation and accessible error descriptions.
3. `README.md:73` / `src/App.jsx:14` — define paycheck-frequency rules before
   changing the calculation model.
4. Initialize Git before the next feature so future changes have a recoverable
   baseline.

## Recent Tasks

1. Inspected the initial Vite scaffold and mapped it against the Paycheck
   Planner plan.
2. Replaced the default display with the Phase 1 calculator and educational
   roadmap.
