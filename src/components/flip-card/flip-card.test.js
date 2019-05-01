import React from 'react';
import { shallow } from 'enzyme';
import FlipCard from './flip-card';

describe('<FlipCard />', () => {
  let helloWorld = null;

  beforeEach(() => {
    helloWorld = <h3>Hello World!</h3>;
  });

  it('should render correctly', () => {
    const element = shallow(<FlipCard />);
    expect(element).toMatchSnapshot();
  });

  it('should render correctly with "Hello World!" on front', () => {
    const element = shallow(<FlipCard front={helloWorld} />);
    expect(element).toMatchSnapshot();
  });

  it('should have "Hello World!" on front', () => {
    const element = shallow(<FlipCard front={helloWorld} />);
    expect(element.contains(helloWorld)).toBe(true);
  });

  it('should render correctly with "Hello World!" on back', () => {
    const element = shallow(<FlipCard back={helloWorld} />);
    expect(element).toMatchSnapshot();
  });

  it('should have "Hello World!" on back', () => {
    const element = shallow(<FlipCard back={helloWorld} />);
    expect(element.contains(helloWorld)).toBe(true);
  });
});
