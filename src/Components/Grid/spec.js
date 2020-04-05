import React from 'react'
import Container from '.';
import { render } from '../../test.setup';
import renderer from 'react-test-renderer';


describe('Containers', () => {
  it('renders component without crashing', () => {
    const tree = renderer.create(<Container >Teste</Container>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});