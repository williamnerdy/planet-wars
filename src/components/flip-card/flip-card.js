import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const FlipCard = props => (
  <div className={`flip-card${props.showBack ? ' show-back' : ''}`}>
    <div className="flip-card-inner">
      <div className="flip-card-front">{props.front}</div>
      <div className="flip-card-back">{props.back}</div>
    </div>
  </div>
);

FlipCard.defaultProps = {
  showBack: false
};

FlipCard.propTypes = {
  showBack: PropTypes.bool,
  front: PropTypes.node,
  back: PropTypes.node
};

export default FlipCard;
