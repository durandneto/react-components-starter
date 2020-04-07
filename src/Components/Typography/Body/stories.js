import React from 'react'
import { storiesOf } from '@storybook/react'
import Body from '.'

storiesOf('Typography|Body', module)

.add('Default', () => (
    <div>
        <div>
            <Body label={"Body component default"} />
        </div>
        <div>
            <Body xs label={"Body component XS"} />
        </div>
        <div>
            <Body sm label={"Body component SM"} />
        </div>
        <div>
            <Body md label={"Body component MD"} />
        </div>
        <div>
            <Body lg label={"Body component LG"} />
        </div>
    </div>
))

.add('XS', () => (
  <Body xs label={"Body component"} />
))

.add('SM', () => (
  <Body sm label={"Body component"} />
))

.add('MD', () => (
  <Body md label={"Body component"} />
))

.add('LG', () => (
  <Body lg label={"Body component"} />
))

.add('Colorful', () => (
  <div>
      <p><Body color={"Blue-600"} lg label={"Body component Blue-600"} /></p>
      <p><Body color={"Pink-400"} xs label={"Body component Pink-400"} /></p>
      <p><Body color={"Indigo-900"} lg label={"Body component Indigo-900"} /></p>
      <p><Body color={"Light-Green-A400"} md label={"Body component Light-Green-A400"} /></p>
      <p><Body color={"Brown-300"} label={"Body component Brown-300"} /></p>
      <p><Body color={"Red-700"} lg label={"Body component Red-700"} /></p>
  </div>
))

