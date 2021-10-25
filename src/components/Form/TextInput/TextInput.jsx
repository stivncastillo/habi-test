import React from 'react'
import PropTypes from 'prop-types';

const TextInput = ({label, name, value, onChange, type, ...rest}) => {
  return (
    <div className="form-container">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <input
          type={type}
          name={name}
          className="form-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...rest}
        />
      </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
  onChange: () => {},
};

export default TextInput
