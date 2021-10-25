import React from "react";
import PropTypes from "prop-types";

const Select = ({ label, name, options, onChange, ...rest }) => {
  return (
    <div className="form-container">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        className="form-input"
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      >
        {options.length > 0 &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  options: [],
  onChange: () => {},
};

export default Select;
