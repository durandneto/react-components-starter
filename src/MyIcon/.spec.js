import React from 'react'
import MyIcon from '.';
import { render } from '../../test.setup';
import renderer from 'react-test-renderer';


describe('MyIcon', () => {
  it('renders component without crashing', () => {
    const tree = renderer.create(<MyIcon source='test' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});