import React from 'react';
import { shallow } from 'enzyme';
import Game from './game';

describe('<Game />', () => {
  it('should render correctly', () => {
    const element = shallow(<Game />);
    expect(element).toMatchSnapshot();
  });
});
