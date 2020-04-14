import React from "react";
import { storiesOf } from "@storybook/react";
import Container, { Row, Column } from '../Grid'
import HeaderFont from '../Typography/Header'
import Button from '../Button'
import Input from ".";


storiesOf("Components|Input/Usage/form", module)
  .add("Real-time form", () => (
    <Container sm>
      <Row >
        <Column full>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Real-time form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full name"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                value=""
                type="text"
                placeholder="Type a Full name"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
      <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
                testMessage={"Invalid E-mail"}
                value=""
                type="email"
                placeholder="Type a E-mail"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Username"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                value=""
                type="text"
                placeholder="Type your Username"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full address"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                value=""
                type="text"
                placeholder="Type a Full address"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
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
  .add("Real-time checking username on server", () => (
    <Container sm>
      <Row >
        <Column full>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Real-time form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full name"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                value=""
                type="text"
                placeholder="Type a Full name"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
      <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
                testMessage={"Invalid E-mail"}
                value=""
                type="email"
                placeholder="Type a E-mail"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Username"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                loading
                value="durand.neto"
                type="text"
                placeholder="Type your Username"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full address"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                value=""
                type="text"
                placeholder="Type a Full address"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
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
  .add("Real-time success | checking username on server", () => (
    <Container sm>
      <Row >
        <Column full>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Real-time form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full name"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                value=""
                type="text"
                placeholder="Type a Full name"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
      <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
                testMessage={"Invalid E-mail"}
                value=""
                type="email"
                placeholder="Type a E-mail"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Green-500"} label={"Username"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                success
                value="durand.neto"
                type="text"
                placeholder="Type your Username"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full address"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                value=""
                type="text"
                placeholder="Type a Full address"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
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

  .add("Real-time username error on server", () => (
    <Container sm>
      <Row >
        <Column full>
          <HeaderFont color={"Blue-Grey-700"} h1 label={"Real-time form"} />
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full name"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                value=""
                type="text"
                placeholder="Type a Full name"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
      <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"E-mail"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                test={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
                testMessage={"Invalid E-mail"}
                value=""
                type="email"
                placeholder="Type a E-mail"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Red-500"} label={"Username"}/>
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                error={"Username already exists"}
                value="durand.neto"
                type="text"
                placeholder="Type your Username"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row >
        <Column full>
          <Row >
            <Column full>
              <HeaderFont h5 color={"Blue-Grey-500"} label={"Full address"} color={"Blue-A200"} />
            </Column>
          </Row>
          <Row >
            <Column full>
              <Input
                value=""
                type="text"
                placeholder="Type a Full address"
                onEvent={e => {
                console.log(e)
              }} />
            </Column>
          </Row>
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
