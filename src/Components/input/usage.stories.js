import React from "react";
import { storiesOf } from "@storybook/react";
import Container, { Row, Column } from '../Grid'
import HeaderFont from '../Typography/Header'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Input from ".";


storiesOf("Components|Input/Usage/Login", module)
  .add("Login default", () => (
    <Container xs>
      <Row >
        <Column full>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Login Form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Blue-A200"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <Input
            test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            testMessage={"Invalid email"}
            value=""
            type="email"
            placeholder="Type a email"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Blue-A200"} label={"Password"} />
        </Column>
      </Row>
      <Row >
        <Column full>
        <Input
            value=""
            type="password"
            placeholder="Type your password"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row>
        <Column>
          <Checkbox
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
          <Checkbox
            label={"I Agreed"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
          />
        </Column>
      </Row>
      <Row >
        <Column full>
        <Button
          primary
          onEvent={ e => {
              console.log(e)
          }}
          data={{user:{id:1}}}
          label={"Login"} />
        </Column>
      </Row>
    </Container>
  ))
  .add("Login Loading", () => (
    <Container xs>
      <Row >
        <Column full>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Login Form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Blue-A200"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <Input
              disabled
            test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            testMessage={"Invalid email"}
            value="xxxx@ggg.com"
            placeholder="Type a email"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Blue-A200"} label={"Password"} />
        </Column>
      </Row>
      <Row >
        <Column full>
        <Input
            disabled
            type={"password"}
            value="asdasas"
            placeholder="Type your password"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row>
        <Column>
          <Checkbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            disabled
            onEvent={(event) => console.log(event)}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Checkbox
            label={"I Agreed"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            disabled
            onEvent={(event) => console.log(event)}
          />
        </Column>
      </Row>
      <Row >
        <Column full>
        <Button
          primary
          loading
          onEvent={ e => {
              console.log(e)
          }}
          data={{user:{id:1}}}
          label={"Login"}
          loadingLabel={"Wait..."} />
        </Column>
      </Row>
    </Container>
  ))
  .add("Login checking email in realtime", () => (
    <Container xs>
      <Row >
        <Column full>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Login Form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Blue-A200"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <Input
            loading
            test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            testMessage={"Invalid email"}
            value="xxxx@ggg.com"
            placeholder="Type a email"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Blue-A200"} label={"Password"} />
        </Column>
      </Row>
      <Row >
        <Column full>
        <Input
            type={"password"}
            value=""
            placeholder="Type your password"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row>
        <Column>
          <Checkbox
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
          <Checkbox
            label={"I Agreed"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            loading
          />
        </Column>
      </Row>
      <Row >
        <Column full>
        <Button
          primary
          onEvent={ e => {
            console.log(e)
          }}
          data={{user:{id:1}}}
          label={"Login"} />
        </Column>
      </Row>
    </Container>
  ))
  .add("Login error on realtime", () => (
    <Container xs>
      <Row >
        <Column full>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Login Form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Blue-A200"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <Input
            error='Real-time:: The server is busy'
            test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            testMessage={"Invalid email"}
            value="xxxx@ggg.com"
            placeholder="Type a email"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <HeaderFont h5 color={"Blue-A200"} label={"Password"} />
        </Column>
      </Row>
      <Row >
        <Column full>
        <Input
            type={"password"}
            value=""
            placeholder="Type your password"
            onEvent={e => {
            console.log(e)
          }} />
        </Column>
      </Row>
      <Row>
        <Column>
          <Checkbox
            label={"Click here to receive notifications"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            checked
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Checkbox
            label={"I Agreed"}
            data={{ gtmData: "aiao23987b7998g28", user: {id: 37}}}
            value={1}
            name={"input-checkbox-gtm"}
            id={"input-checkbox-gtm-1"}
            onEvent={(event) => console.log(event)}
            error
          />
        </Column>
      </Row>
      <Row >
        <Column full>
        <Button
          primary
          onEvent={ e => {
            console.log(e)
          }}
          data={{user:{id:1}}}
          label={"Login"} />
        </Column>
      </Row>
    </Container>
  ))