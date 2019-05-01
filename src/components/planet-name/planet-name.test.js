import React from 'react';
import { shallow } from 'enzyme';
import PlanetName from './planet-name';

describe('<PlanetName />', () => {
  it('should render correctly', () => {
    const element = shallow(<PlanetName>Test Planet</PlanetName>);
    expect(element).toMatchSnapshot();
  });

  it('should render with name "Test Planet"', () => {
    const element = shallow(<PlanetName>Test Planet</PlanetName>);
    expect(element.text()).toBe('Test Planet');
  });
});
