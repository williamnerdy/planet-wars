import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FlipCard from '../flip-card';
import LoadingPlanet from '../loading-planet';
import Button from '../button';
import Planet from '../planet';
import { Planets } from '../../swapi';
import './style.css';

let curIndex = -1;

function Game({ planetsId }) {
  const [loaded, setLoaded] = useState(false);
  const [curPlanet, setPlanet] = useState(null);

  const loadNext = () => {
    setLoaded(false);
    curIndex++;

    Planets.get(planetsId[curIndex])
      .then(planet => {
        setPlanet(planet);
        setLoaded(true);
      })
      .catch(e => {
        console.error(e);
        alert('Falha ao coletar informações sobre o planeta!');
      });
  };

  useEffect(() => {
    if (curIndex === -1) {
      loadNext();
    }
  });

  return (
    <div className="wrapper">
      <FlipCard
        showBack={loaded}
        front={<LoadingPlanet />}
        back={
          curPlanet && (
            <Planet
              name={curPlanet.name}
              population={curPlanet.population}
              climate={curPlanet.climate}
              terrain={curPlanet.terrain}
              feature={curPlanet.films.length}
            />
          )
        }
      />
      <br />
      <br />
      <Button onClick={loadNext} disabled={!loaded}>
        NEXT
      </Button>
    </div>
  );
}

Game.defaultProps = {
  planetsId: []
};

Game.propTypes = {
  planetsId: PropTypes.arrayOf(PropTypes.number)
};

export default Game;
