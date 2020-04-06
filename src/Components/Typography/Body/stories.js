
import React from 'react';
import { storiesOf } from '@storybook/react';
import Color from '../../Colors'
import VHBody from '.';

storiesOf('Typography|Body/Default', module)
  .add('xs', () => (
    <div style={{ padding: "24px" }}>
      <VHBody xs label="body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
    </div>
  ))
  .add('sm', () => (
    <div style={{ padding: "24px" }}>
      <VHBody sm label="body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
    </div>
  ))

  .add('lg', () => (
    <div style={{ padding: "24px" }}>
      <VHBody lg label="body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
    </div>
  ))

storiesOf('typography|Body/Reverse', module)
  .add('xs', () => (
    <div style={{ background: Color["primary-dark"], padding: "24px" }}>
      <VHBody reverse xs label="body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
    </div>
  ))

  .add('sm', () => (
    <div style={{ background: Color["primary-dark"], padding: "24px" }}>
      <VHBody reverse sm label="body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
    </div>
  ))

  .add('lg', () => (
    <div style={{ background: Color["primary-dark"], padding: "24px" }}>
      <VHBody reverse lg label="body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
    </div>
  ))
