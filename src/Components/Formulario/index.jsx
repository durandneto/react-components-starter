import React from 'react'
import Container, { Row, Column } from '../Grid'
import FontHeader from '../Typography/Header'
import FontBody from "../Typography/Body"
import Input from '../input'
import Button from '../Button'
import Checkbox from '../Checkbox'
import RadioButton from '../RadioButton'

const Form = props =>
    <Container>
        <Row>
            <Column>
                <FontHeader color="Blue-Grey-700" label="Formulário Responsivo" />
            </Column>
        </Row>
        <Row alignCenter autoColumn>
            <Column>
                <FontBody label="Name:" />
            </Column>
            <Column full>
                <Input
                data={{
                User: {
                    id: 1
                }
                }}
                {...props.controls.name}
                onEvent={props.onEvent}
                placeholder="Input"
                testMessage=""
                type="text"
                value=""
            />
            </Column>
        </Row>
        <Row alignCenter autoColumn>
            <Column>
                <FontBody label="Email:" />
            </Column>
            <Column full>
                <Input
                data={{
                User: {
                    id: 1
                }
                }}
                onEvent={props.onEvent}
                placeholder="Type your E-mail"
                testMessage="E-mail inválido."
                test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
                type="text"
                value=""
                {...props.controls.email}
            />
            </Column>
        </Row>
        <Row>
            <Column>
                <Checkbox
                    data={{
                    gtmData: 'aiao23987b7998g28',
                    user: {
                        id: 37
                    }
                    }}
                    id="input-checkbox-gtm-1"
                    label="Subscribe no Canal"
                    name="input-checkbox-gtm"
                    onEvent={props.onEvent}
                    value={1}
                    {...props.controls.subscribe}
                />
            </Column>
        </Row>
        <Row autoColumn>
            <Column>
                <FontBody label="Select your age:" />
            </Column>
            <Column noPadding>
                <RadioButton
                    data={{
                    groupBy: 'age',
                    id: 'checkbox-1'
                    }}
                    groupBy="age"
                    label="Eu sou menor do que 18"
                    onEvent={props.onEvent}
                    value="18-"
                    {...props.controls.age}
                />
            </Column>
            <Column noPadding>
                <RadioButton
                    data={{
                    groupBy: 'age',
                    id: 'checkbox-1'
                    }}
                    groupBy="age"
                    label="Eu sou maior do que 18"
                    onEvent={props.onEvent}
                    value="18+"
                    {...props.controls.age}
                />
            </Column>
        </Row>
        <Row justifyRight >
            <Column autoColumnFullWidth >
                <Button
                    data={{
                    user: {
                        id: 1
                    }
                    }}
                    label="Enviar"
                    onEvent={props.onEvent}
                    success
                    {...props.controls.cta}

                />
            </Column>
        </Row>
    </Container>

export default Form