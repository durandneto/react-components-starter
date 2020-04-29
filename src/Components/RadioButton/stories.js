import React from "react";
import { storiesOf } from "@storybook/react";
import Container, { Row, Column } from '../Grid'
import HeaderFont from '../Typography/Header'
import BodyFont from '../Typography/Body'
import RadioButton from ".";


storiesOf("Components|Radio Button", module)
  .add("default", () => (
    <Container>
      <Row>
        <Column>
          <HeaderFont label="Aula 7 Radio Buttons" />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont h3 color={"Blue-Grey-500"} label="Qual sua idade?" />
        </Column>
      </Row>
      <Row>
        <Column>
          <RadioButton
            groupBy="age"
            value="18-"
            label="Eu sou menor do que 18"
            checked
            disabled
            data={{
              id: "checkbox-1",
              groupBy: "age"
            }}
            onEvent={ e => {
              console.log(e)
            }}
          />
        </Column>
        <Column>
          <RadioButton
            groupBy="age"
            value="18+"
            label="Eu sou maior do que 18"
            checked
            data={{
              id: "checkbox-2",
              groupBy: "age"
            }}
            onEvent={ e => {
              console.log(e)
            }}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont h3 color={"Blue-Grey-500"} label="Qual sua profissão?" />
        </Column>
      </Row>
      <Row>
        <Column>
          <RadioButton
            groupBy="profissao"
            value="developer"
            label="Sou desenvolvedor"
            checked
            data={{
              id: "checkbox-3",
              groupBy: "profissao"
            }}
            onEvent={ e => {
              console.log(e)
            }}
          />
        </Column>
        <Column>
          <RadioButton
            groupBy="profissao"
            value="not-developer"
            label="Eu sou não sou desenvolvedor"
            data={{
              id: "checkbox-4",
              groupBy: "profissao"
            }}
            onEvent={ e => {
              console.log(e)
            }}
          />
        </Column>
      </Row>
    </Container>
  ))