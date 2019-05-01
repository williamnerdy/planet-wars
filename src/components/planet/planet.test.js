import React from 'react';
import { shallow } from 'enzyme';
import Planet from './planet';

describe('<Planet />', () => {
  it('should render correctly', () => {
    const element = shallow(
      <Planet
        name="testeeee"
        population="testeeee"
        climate="testeeee"
        terrain="testeeee"
        feature={1}
      />
    );
    expect(element).toMatchSnapshot();
  });
});
