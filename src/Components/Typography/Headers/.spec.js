import React from 'react';
import ReactDOM from 'react-dom';
import VHTitle from '.';

it('renders button without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VHTitle h1 label="H1 - Roboto med 36/48" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
