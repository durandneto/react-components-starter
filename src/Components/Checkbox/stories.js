import React from "react";
import { storiesOf } from "@storybook/react";
import Container, { Row, Column } from '../Grid'
import HeaderFont from '../Typography/Header'

import InputCheckbox from ".";

storiesOf("Components|Checkbox", module)
  .add("Variations", () => (
    <Container>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Checkbox"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h3 label={"Default value"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"I want to receive e-mails"}
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h3 label={"Default value checked"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            checked
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"I want to receive e-mails"}
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            checked
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            checked
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h2 label={"Loading"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h5 label={"Not checked"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            loading
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"I want to receive e-mails"}
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            loading
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            loading
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h5 label={"Checked"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            loading
            checked
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"I want to receive e-mails"}
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            loading
            checked
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            loading
            checked
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h2 label={"Success"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h5 label={"Not checked"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            success
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"I want to receive e-mails"}
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            success
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            success
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h5 label={"Checked"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            success
            checked
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"I want to receive e-mails"}
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            success
            checked
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            success
            checked
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h2 label={"Error"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h5 label={"Not checked"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            error
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"I want to receive e-mails"}
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            error
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            error
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h5 label={"Checked"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            error
            checked
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"I want to receive e-mails"}
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            error
            checked
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            error
            checked
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h2 label={"Disabled"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h5 label={"Not checked"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            disabled
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"I want to receive e-mails"}
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            disabled
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            disabled
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h5 label={"Checked"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            disabled
            checked
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"I want to receive e-mails"}
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            disabled
            checked
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            disabled
            checked
          />
        </Column>
      </Row>
    </Container>
  ))
  .add("Default", () => (
    <Container>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h3 label={"Checkbox"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "asdas8", user: {id: 97}}}
            value={2}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
      </Row>
    </Container>
  ))
  .add("With Label", () => (
    <Container>
      <Row>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
      </Row>
    </Container>
  ))
  .add("Without Label", () => (
    <Container>
      <Row>
        <Column>
          <InputCheckbox
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
      </Row>
    </Container>
  ))
  .add("Multiple", () => (
    <Container>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h3 label={"Side by side"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <InputCheckbox
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h3 label={"List"} />
        </Column>
      </Row>
      <Row column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
        <Column>
          <InputCheckbox
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h3 label={"Side by side"} />
        </Column>
      </Row>
      <Row>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h3 label={"List"} />
        </Column>
      </Row>
      <Row column>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <HeaderFont color={"Blue-Grey-500"} h3 label={"Auto Column"} />
        </Column>
      </Row>
      <Row autoColumn>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
        <Column>
          <InputCheckbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
      </Row>
    </Container>
  ))
