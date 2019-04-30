import React from 'react';
import { shallow } from 'enzyme';
import Background from './background';

describe('<Background />', () => {
  it('should render correctly', () => {
    const element = shallow(<Background />);
    expect(element).toMatchSnapshot();
  });
});
