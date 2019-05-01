import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const PlanetName = ({ children }) => (
  <h1 className="planet-name">{children}</h1>
);

PlanetName.propTypes = {
  children: PropTypes.string.isRequired
};

export default PlanetName;
