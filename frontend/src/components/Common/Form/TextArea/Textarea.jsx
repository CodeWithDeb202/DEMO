import "./Textarea.css";

function Textarea({
  label,
  name,
  value,
  placeholder,
  onChange,
  rows = 5,
  error,
  required = false,
  ...props
}) {
  return (
    <div className="textarea-group">

      {label && (
        <label className="textarea-label">
          {label}
          {required && <span>*</span>}
        </label>
      )}

      <textarea
        className={`textarea ${error ? "textarea-error" : ""}`}
        name={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={onChange}
        {...props}
      />

      {error && (
        <small className="textarea-error-message">
          {error}
        </small>
      )}

    </div>
  );
}

export default Textarea;