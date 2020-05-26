
import React from 'react'
import { storiesOf } from '@storybook/react'
import GRSearchHeader from '.'

storiesOf('Templates|GloboRelay/GRSearchHeader', module)
  .add('Default', () => (
    <GRSearchHeader
      onEvent={e => {
        console.log('GRSearchHeader', e)
      }}
    />
  ))
  .add('Loading', () => (
    <GRSearchHeader
      loading
      value={"obama"}
      onEvent={e => {
        console.log('GRSearchHeader', e)
      }}
    />
  ))


