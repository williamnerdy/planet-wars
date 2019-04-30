import MockAdapter from 'axios-mock-adapter';
import api from './api';
import Planets from './planets';

describe('Planets', () => {
  it('should fetch all planets', done => {
    const planets = {
      count: 1,
      next: '',
      previous: null,
      results: [
        {
          name: '',
          rotation_period: '',
          orbital_period: '',
          diameter: '',
          climate: '',
          gravity: '',
          terrain: '',
          surface_water: '',
          population: '',
          residents: [''],
          films: [''],
          created: '',
          edited: '',
          url: ''
        }
      ]
    };

    const mock = new MockAdapter(api);
    const resp = { data: planets };
    mock.onGet('https://swapi.co/api/planets').reply(200, resp);

    return Planets.all().then(resp => {
      expect(resp.data).toEqual(planets);
      done();
    });
  });

  it('should fetch one planet', done => {
    const planet = {
      name: '',
      rotation_period: '',
      orbital_period: '',
      diameter: '',
      climate: '',
      gravity: '',
      terrain: '',
      surface_water: '',
      population: '',
      residents: [''],
      films: [''],
      created: '',
      edited: '',
      url: ''
    };

    const mock = new MockAdapter(api);
    const resp = { data: planet };
    mock.onGet('https://swapi.co/api/planets/1').reply(200, resp);

    return Planets.get(1).then(resp => {
      expect(resp.data).toEqual(planet);
      done();
    });
  });
});
