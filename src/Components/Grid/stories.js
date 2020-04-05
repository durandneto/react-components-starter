import React from 'react';
import { storiesOf } from '@storybook/react';
import ContextedApp from '../../Context/App'
import Container, { Row } from '.'

storiesOf('Grid|Container', module)

  .add('default', () => (
    <ContextedApp>
        <Container>Container Durand Neto</Container>
    </ContextedApp>
  ))

  .add('Justify Content Center', () => (
        <Container justifyCenter alignCenter>
        <span>Container</span>
    </Container>
  ))

  .add('Justify Content Right', () => (
        <Container justifyRight>
        <span> justifyCenter justifyCenter justifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenter</span>
    </Container>
  ))

  .add('Container LG', () => (
        <Container lg>
        <span> justifyCenter justifyCenter justifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenter</span>
    </Container>
  ))

  .add('Container MD', () => (
        <Container md>
        <span> justifyCenter justifyCenter justifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenter</span>
    </Container>
  ))

  .add('Container SM', () => (
        <Container sm>
        <span> justifyCenter justifyCenter justifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenter</span>
    </Container>
  ))

  .add('Container XS', () => (
        <Container xs>
        <span> justifyCenter justifyCenter justifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenterjustifyCenter</span>
    </Container>
  ))

  .add('Container Test WhatsApp Chat List Row', () => (
        <Container xs >
        <Row alignCenter inline spaceBetween>
            <Row inline alignCenter>
                <Row>
                    Avatar
                </Row>
                <Row>
                    <Row>
                        Title
                    </Row>
                    <Row>
                        Description
                    </Row>
                </Row>
            </Row>
            <Row>
                <Row justifyRight>
                    Time
                </Row>
                <Row justifyRight>
                    Badge
                </Row>
            </Row>
        </Row>
    </Container>
  ))