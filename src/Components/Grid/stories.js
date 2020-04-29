import React from 'react'
import { storiesOf } from '@storybook/react'
import Container, { Row, Column} from '.'
import Input from '../input'
import RadioButton from '../RadioButton'
import Checkbox from '../Checkbox'
import Header from '../Typography/Header'
import Button from '../Button'

storiesOf('Grid|Flexbox', module)

.add('Default', () => (
  <Container>
    <Row spaceBetween>
      <Column>1</Column>
      <Column>2</Column>
    </Row>
    <Row spaceAround>
      <Column>3</Column>
      <Column>4</Column>
    </Row>
    <Row >
      <Column>5</Column>
      <Column>6</Column>
    </Row>
    <Row justifyCenter>
      <Column>7</Column>
      <Column>8</Column>
    </Row>
    <Row justifyRight>
      <Column>9</Column>
      <Column>10</Column>
    </Row>
  </Container>
))


.add('fullHeight', () => (
  <Container fullHeight>
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('FullHeight Justify Content Center', () => (
  <Container fullHeight justifyCenter>
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('FullHeight Align Items Center', () => (
  <Container fullHeight alignCenter>
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('FullHeight Justify Content End and Align Items center', () => (
  <Container fullHeight justifyRight alignCenter >
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('FullHeight Justify Content End', () => (
  <Container fullHeight justifyRight>
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('Container LG', () => (
  <Container lg>
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('Container MD', () => (
  <Container md>
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('Container SM', () => (
  <Container sm>
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))

.add('Container XS', () => (
  <Container xs>
    <Row>Linha 1</Row>
    <Row>Linha 2</Row>
  </Container>
))


.add('Media Query', () => (
  <Container>
    <Row>
      <Column>
      <Header
        color="Blue-Grey-700"
        label="Fomulário Responsivo"
      />
      </Column>
    </Row>
  </Container>
))
