import React from 'react';
import { shallow } from 'enzyme';
import LoadingPlanet from './loading-planet';

describe('<LoadingPlanet />', () => {
  it('should render correctly', () => {
    const element = shallow(<LoadingPlanet />);
    expect(element).toMatchSnapshot();
  });
});
