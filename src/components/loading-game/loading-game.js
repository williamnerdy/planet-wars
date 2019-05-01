import React from 'react';
import Logo from '../../assets/images/logo.png';
import './style.css';

const LoadingGame = () => (
  <div>
    <img src={Logo} alt="Planet Wars" />
    <div className="loading-game" />
  </div>
);

export default LoadingGame;
