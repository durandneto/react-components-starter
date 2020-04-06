
import React from 'react';
import { storiesOf } from '@storybook/react';
import VHTitle from '.';

storiesOf('Typography|Headers', module)
  .add('Regular', () => (
    <React.Fragment>
      <VHTitle h1 label="H1 - med 36/48" />
      <VHTitle h2 label="H2 - med 32/40" />
      <VHTitle h3 label="H3 - med 28/36" />
      <VHTitle h4 label="H4 - med 24/32" />
      <VHTitle h5 label="H5 - med 20/24" />
      <VHTitle h6 label="H6 - med 16/20" />
    </React.Fragment>
  ))
  .add('Reverse', () => (
    <div style={{ background: "blue", padding: '8px' }}>
      <VHTitle reverse h1 label="H1 - med 36/48" />
      <VHTitle reverse h2 label="H2 - med 32/40" />
      <VHTitle reverse h3 label="H3 - med 28/36" />
      <VHTitle reverse h4 label="H4 - med 24/32" />
      <VHTitle reverse h5 label="H5 - med 20/24" />
      <VHTitle reverse h6 label="H6 - med 16/20" />
    </div>
  ))
