import React from 'react'
import PropTypes from 'prop-types';

const Button = ({onClick, children, ...rest}) => {
  return (
    <button
        className="btn btn-primary"
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button
