import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('<Button />', () => {
  it('should render correctly', () => {
    const element = shallow(<Button>Test</Button>);
    expect(element).toMatchSnapshot();
  });

  it('should render with text "Test"', () => {
    const element = shallow(<Button>Test</Button>);
    expect(element.text()).toBe('Test');
  });

  it('should call function on click', () => {
    const mockCallBack = jest.fn();
    const element = shallow(<Button onClick={mockCallBack}>Test</Button>);

    element.find('.button').simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });
});
