
import React from 'react';
import { storiesOf } from '@storybook/react';
import Container, { Row, Column } from '../Grid'
import Button from '.';

storiesOf('Components|Buttons', module)

  .add('Primary', () => (
    <Container>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default Primary</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button primary onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button primary loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button primary disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default Primary xs</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button primary xs onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button primary xs loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button primary xs disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default Primary sm</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button primary sm onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button primary sm loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button primary sm disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default Primary md</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button primary md onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button primary md loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button primary md disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default Primary lg</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button primary lg onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button primary lg loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button primary lg disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>



      <Row>
        <Column fullSize>
          <p>Size Full</p>
          <Button primary full onEvent={e => {
          console.log('onEvent', e)
          }} loadingLabel="Applying..."  label="Primary XS" />

          <p>Size Full Disabled</p>
          <Button primary disabled full onEvent={e => {
          console.log('onEvent', e)
          }} loadingLabel="Applying..."  label="Primary XS" />

          <p>Size Full loading</p>
          <Button primary loading full onEvent={e => {
          console.log('onEvent', e)
          }} loadingLabel="Applying..."  label="Primary XS" />
        </Column>
      </Row>

    </Container>
  ))

  .add('secondary', () => (
    <Container>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default secondary</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button secondary onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button secondary loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button secondary disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default secondary xs</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button secondary xs onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button secondary xs loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button secondary xs disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default secondary sm</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button secondary sm onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button secondary sm loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button secondary sm disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default secondary md</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button secondary md onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button secondary md loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button secondary md disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default secondary lg</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button secondary lg onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button secondary lg loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button secondary lg disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column fullSize>
          <p>Size Full</p>
          <Button secondary full onEvent={e => {
          console.log('onEvent', e)
          }} loadingLabel="Applying..."  label="secondary XS" />

          <p>Size Full Disabled</p>
          <Button secondary disabled full onEvent={e => {
          console.log('onEvent', e)
          }} loadingLabel="Applying..."  label="secondary XS" />

          <p>Size Full loading</p>
          <Button secondary loading full onEvent={e => {
          console.log('onEvent', e)
          }} loadingLabel="Applying..."  label="secondary XS" />
        </Column>
      </Row>

    </Container>
  ))

  .add('danger', () => (
    <Container>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default danger</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button danger onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button danger loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button danger disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default danger xs</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button danger xs onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button danger xs loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button danger xs disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default danger sm</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button danger sm onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button danger sm loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button danger sm disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default danger md</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button danger md onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button danger md loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button danger md disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default danger lg</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button danger lg onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button danger lg loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button danger lg disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>



      <Row>
        <Column fullSize>
          <p>Size Full</p>
          <Button danger full onEvent={e => {
          console.log('onEvent', e)
          }} loadingLabel="Applying..."  label="danger XS" />

          <p>Size Full Disabled</p>
          <Button danger disabled full onEvent={e => {
          console.log('onEvent', e)
          }} loadingLabel="Applying..."  label="danger XS" />

          <p>Size Full loading</p>
          <Button danger loading full onEvent={e => {
          console.log('onEvent', e)
          }} loadingLabel="Applying..."  label="danger XS" />
        </Column>
      </Row>

    </Container>
  ))

  .add('success', () => (
    <Container>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default success</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button success onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button success loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button success disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default success xs</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button success xs onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button success xs loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button success xs disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default success sm</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button success sm onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button success sm loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button success sm disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default success md</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button success md onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button success md loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button success md disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <p>Default success lg</p>
            </Column>
          </Row>
          <Row>
            <Column>
              <Button success lg onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button success lg loading onEvent={e => {
                console.log('onEvent', e)
              }} loadingLabel="Applying..."  label="Apply" />
            </Column>
            <Column>
              <Button success lg disabled onEvent={e => {
                  console.log('onEvent', e)
                }} loadingLabel="Applying..."  label="Apply" />
            </Column>
          </Row>
        </Column>
      </Row>



      <Row>
        <Column fullSize>
          <p>Size Full</p>
          <Button success full onEvent={e => {
          console.log('onEvent', e)
          }} loadingLabel="Applying..."  label="success XS" />

          <p>Size Full Disabled</p>
          <Button success disabled full onEvent={e => {
          console.log('onEvent', e)
          }} loadingLabel="Applying..."  label="success XS" />

          <p>Size Full loading</p>
          <Button success loading full onEvent={e => {
          console.log('onEvent', e)
          }} loadingLabel="Applying..."  label="success XS" />
        </Column>
      </Row>

    </Container>
  ))



