import React from 'react';
import PlanetName from '../planet-name';
import PropTypes from 'prop-types';
import './style.css';

const Planet = ({ name, population, climate, terrain, feature }) => (
  <div className="planet">
    <PlanetName>{name}</PlanetName>
    <ul className="planet-info-list">
      <li className="planet-info">
        <b>Population: </b>
        <span>{population}</span>
      </li>
      <li className="planet-info">
        <b>Climate: </b>
        <span>{climate}</span>
      </li>
      <li className="planet-info">
        <b>Terrain: </b>
        <span>{terrain}</span>
      </li>
      <li className="planet-info">
        <span>Feature in</span>
        <b> {feature} </b>
        <span>film{feature !== 1 ? 's' : ''}</span>
      </li>
    </ul>
  </div>
);

Planet.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.string,
  climate: PropTypes.string,
  terrain: PropTypes.string,
  feature: PropTypes.number
};

export default Planet;
