import React from 'react';
import { shallow } from 'enzyme';
import LoadingGame from './loading-game';

describe('<LoadingGame />', () => {
  it('should render correctly', () => {
    const element = shallow(<LoadingGame />);
    expect(element).toMatchSnapshot();
  });
});
