import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ onClick, children }) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => {}
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string
};

export default Button;
