# Paycheck Planner

## Project Summary

Paycheck Planner is a beginner-friendly React calculator with one clear job:
compare a take-home paycheck with total bills and show how much remains—or how
far the user is over budget.

Version one deliberately has no login, bank connection, backend, database, or
AI advice. Keeping the scope small makes the calculation easy to understand and
verify.

## How the data flows

```text
MoneyInput.jsx
      ↓ sends text through onChange
App.jsx stores paycheck + bills
      ↓ converts both values
money.js returns integer cents
      ↓ derives remaining amount
SummaryCard.jsx formats and displays the result
```

Only `paycheck` and `bills` are React state. The remaining amount and percentage
used are derived during rendering, so there is no second source of truth to keep
in sync.

## Setup

Requirements: Node.js 20.19+ or 22.12+ and npm.

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload. |
| `npm run lint` | Check React and JavaScript code with Oxlint. |
| `npm test` | Run the four focused money utility tests. |
| `npm run build` | Create the optimized production bundle in `dist/`. |
| `npm run preview` | Preview the production bundle locally. |

## Important files

| File | Purpose |
| --- | --- |
| `src/App.jsx` | Owns input state and derives the calculator totals. |
| `src/components/MoneyInput.jsx` | Reusable, labeled controlled money input. |
| `src/components/SummaryCard.jsx` | Presents totals, status, and paycheck usage. |
| `src/utils/money.js` | Converts dollars to cents and formats currency. |
| `test/money.test.js` | Protects the calculation boundary with four tests. |

## Educational TODOs

These are learning upgrades, not unfinished version-one requirements.

- [ ] **Named bills — `src/App.jsx`:** replace the single bills string with an
  array of `{ id, name, amount }` objects. Render it with `map`, remove entries
  with `filter`, and total cents with `reduce`. This teaches immutable list state.
- [ ] **Inline validation — `src/components/MoneyInput.jsx`:** add an `error`
  prop and connect the message with `aria-describedby`. This teaches validation,
  reusable component APIs, and accessible error feedback.
- [ ] **More calculation coverage — `test/money.test.js`:** add boundary cases
  for rounding and very large inputs, keeping the suite at four top-level tests
  by grouping related assertions. This teaches equivalence classes and edges.
- [ ] **Frequency rules — `src/App.jsx`:** add weekly, biweekly, twice-monthly,
  and monthly choices only after writing down whether comparisons happen per
  paycheck or per month. This teaches domain modeling before implementation.
- [ ] **Local persistence — new `src/utils/storage.js`:** save only ordinary
  calculator entries in `localStorage`. Never store account numbers, tokens,
  credentials, or bank data. This teaches serialization and safe storage limits.
- [ ] **Portfolio polish — `README.md`:** add screenshots, a deployed URL, and a
  short explanation of integer-cent math after the behavior is verified live.

## Deploy

Run `npm run build`, then deploy the generated `dist/` directory with Vercel,
Netlify, or another static host. No environment variables are required in
version one.

Live Vercel deployment: <https://paycheck-planner-premium.vercel.app>

## Health

- Core calculator: implemented
- Responsive styling: implemented
- Accessibility basics: labels, focus states, live result messaging
- Tests: four utility tests
- Backend and persistence: intentionally absent

## Changelog

### 0.1.0

- Replaced the default Vite screen with the Paycheck Planner.
- Added integer-cent conversion, currency formatting, and derived results.
- Added reusable input and summary components.
- Added responsive custom CSS and educational TODOs.
