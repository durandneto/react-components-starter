
import React from 'react';
import { storiesOf } from '@storybook/react';
import Body from '.';

storiesOf('Typography|Body/Default', module)
  .add('Regular', () => (
    <div style={{ padding: "24px" }}>
      <Body xs color="Indigo-A400" label="XS - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
      <br />
      <br />
      <Body sm label="SM - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
     <br />
      <br />
      <Body md label="MD - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
    <br />
      <br />
      <Body lg label="LG - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
    </div>
  ))

  .add('Reverse', () => (
    <div style={{ background: "blue", padding: "24px" }}>
      <Body reverse xs label="body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
    <br />
      <br />
      <Body reverse sm label="body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
    <br />
      <br />
      <Body reverse md label="body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
    <br />
      <br />
      <Body reverse lg label="body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
      Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />
    </div>
  ))
