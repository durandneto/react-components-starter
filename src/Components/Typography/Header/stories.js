import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '.'
import Body from '../Body'

storiesOf('Typography/Headers', module)

.add('Header e Body', () => (
  <>
    <Header label={"Header Default"} />
    <Body label={"Body label "} />
  </>
))

.add('Default', () => (
  <>
    <Header label={"Header Default"} />
    <Header h1 label={"Header H1"} />
    <Header h2 label={"Header H2"} />
    <Header h3 label={"Header H3"} />
    <Header h4 label={"Header H4"} />
    <Header h5 label={"Header H5"} />
    <Header h6 label={"Header H6"} />
  </>
))

.add('Colorful', () => (
  <>
    <Header label={"Header Default"} />
    <Header color="Deep-Purple-A200" h1 label={"Header H1 Deep-Purple-A200"} />
    <Header color={"Light-Blue-100"} h2 label={"Header H2 Light-Blue-100"} />
    <Header color={"Teal-400"} h3 label={"Header H3 Teal-400"} />
    <Header color={"Pink-A200"} h4 label={"Header H4 Pink-A200"} />
    <Header color={"Lime-A400"} h5 label={"Header H5 Lime-A400"} />
    <Header color={"Blue-A200"} h6 label={"Header H6 Blue-A200"} />
  </>
))