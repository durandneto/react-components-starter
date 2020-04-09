
import React from 'react'
import { storiesOf } from '@storybook/react'
import Container, { Row, Column } from '../Grid'
import HeaderText from '../Typography/Header'

import Button from '.'

storiesOf('Components|Buttons', module)

  .add('Default', () => (
    <Container>
        <Row>
            <Column>
                <HeaderText h1 label='Button Default' />
            </Column>
        </Row>
        <Row>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                    data={{user:{id:1}}}
                    label={"Default with data"} />
            </Column>
        </Row>
        <Row>
            <Column>
                <HeaderText h2 label='Button sizes' />
            </Column>
        </Row>
        <Row>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                xs label={"Button size xs"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                sm label={"Button size sm"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                md label={"Button size md"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg label={"Button size lg"} />
            </Column>
        </Row>
        <Row>
            <Column>
                <HeaderText h2 label='Button Default loading' />
            </Column>
        </Row>
        <Row>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                xs loading label={"Button size xs"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                sm loading label={"Button size sm"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                md loading label={"Button size md"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg loading label={"Button size lg"} />
            </Column>
        </Row>
        <Row>
            <Column>
                <HeaderText h2 label='Button Default disabled' />
            </Column>
        </Row>
        <Row>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                xs disabled label={"Button size xs"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                sm disabled label={"Button size sm"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                md disabled label={"Button size md"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg disabled label={"Button size lg"} />
            </Column>
        </Row>
        <Row>
            <Column>
                <HeaderText h2 label='Button colorful' />
            </Column>
        </Row>
        <Row>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                xs primary label={"Button primary size xs"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                sm primary label={"Button primary size sm"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                md primary label={"Button primary size md"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg primary label={"Button primary size lg"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg primary disabled label={"Button primary size lg disabled"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg primary loading label={"Button primary size lg loading"} loadingLabel={"Applying..."} />
            </Column>
        </Row>
        <Row>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                xs danger label={"Button danger size xs"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                sm danger label={"Button danger size sm"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                md danger label={"Button danger size md"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg danger label={"Button danger size lg"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg danger disabled label={"Button danger size lg disabled"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg danger loading label={"Button danger size lg loading"}  loadingLabel={"Applying..."} />
            </Column>
        </Row>
        <Row>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                xs success label={"Button success size xs"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                sm success label={"Button success size sm"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                md success label={"Button success size md"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg success label={"Button success size lg"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg success disabled label={"Button success size lg disabled"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg success loading label={"Button success size lg loading"}  loadingLabel={"Applying..."}  />
            </Column>
        </Row>
        <Row>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                xs secondary label={"Button secondary size xs"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                sm secondary label={"Button secondary size sm"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                md secondary label={"Button secondary size md"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg secondary label={"Button secondary size lg"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg secondary disabled label={"Button secondary size lg disabled"} />
            </Column>
            <Column>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                lg secondary loading label={"Button secondary size lg loading"}  loadingLabel={"Applying..."} />
            </Column>
        </Row>
        <Row>
            <Column>
                <HeaderText h1 label='Button full size' />
            </Column>
        </Row>
        <Row>
            <Column full>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                full label={"Default full size"} />
            </Column>
        </Row>
        <Row>
            <Column full>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                full xs label={"xs full size"} />
            </Column>
        </Row>
        <Row>
            <Column full>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                full sm label={"sm full size"} />
            </Column>
        </Row>
        <Row>
            <Column full>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                full md label={"md full size"} />
            </Column>
        </Row>
        <Row>
            <Column full>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                full lg label={"lg full size"} />
            </Column>
        </Row>
        <Row>
            <Column full>
                <Button
                    onEvent={ e => {
                        console.log(e)
                    }}
                full lg loading label={"lg full size loading"}  loadingLabel={"Applying..."} />
            </Column>
        </Row>
    </Container>
  ))


