import React, { useState, useEffect } from 'react';
import Background from '../components/background';
import Game from '../components/game';
import LoadingGame from '../components/loading-game';
import { Planets } from '../swapi';
import { shuffle } from '../utils';
import './style.css';

function App() {
  const [planetsId, setPlanetsIds] = useState([]);

  useEffect(() => {
    if (!planetsId.length) {
      Planets.all()
        .then(({ count }) => {
          let ids = [];
          for (let i = 1; i <= count; i++) ids.push(i);
          setPlanetsIds(shuffle(ids));
        })
        .catch(e => {
          console.error(e);
          alert('Falha ao coletar informações sobre os planetas!');
        });
    }
  }, [planetsId.length]);

  return (
    <>
      <div className="content">
        {planetsId.length ? <Game planetsId={planetsId} /> : <LoadingGame />}
      </div>
      <Background />
    </>
  );
}

export default App;
