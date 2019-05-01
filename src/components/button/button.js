import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ onClick, children, disabled }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
  disabled: false
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
