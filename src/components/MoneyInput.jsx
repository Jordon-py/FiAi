export default function MoneyInput({
  id,
  label,
  value,
  onChange,
  helperText,
  placeholder,
}) {
  const helperId = `${id}-helper`

  return (
    <div className="money-field">
      <label htmlFor={id}>{label}</label>
      <div className="money-input-wrapper">
        <span className="currency-symbol" aria-hidden="true">
          $
        </span>
        <input
          id={id}
          name={id}
          type="number"
          inputMode="decimal"
          min="0"
          step="0.01"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          aria-describedby={helperId}
        />
      </div>
      <small id={helperId}>{helperText}</small>
    </div>
  )
}
