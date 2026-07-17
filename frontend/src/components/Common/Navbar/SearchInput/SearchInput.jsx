import "./SearchInput.css";

import { FaSearch, FaTimes } from "react-icons/fa";

function SearchInput({
  label,
  placeholder = "Search...",
  value,
  onChange,
  onClear,
  disabled = false,
  ...props
}) {
  return (
    <div className="search-group">

      {label && (
        <label className="search-label">
          {label}
        </label>
      )}

      <div className="search-wrapper">

        <FaSearch className="search-icon" />

        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />

        {value && (
          <button
            type="button"
            className="clear-search"
            onClick={onClear}
            aria-label="Clear search"
          >
            <FaTimes />
          </button>
        )}

      </div>

    </div>
  );
}

export default SearchInput;