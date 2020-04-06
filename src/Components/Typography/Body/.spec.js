import React from 'react';
import ReactDOM from 'react-dom';
import VHBody from '.';

it('renders button without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VHBody sm label="body - There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.
  Your fascination with the universe and how to explore it as we so often do in the field of astronomy can be highly academic and dry as maybe it was if you took a course in astronomy." />, div);
  ReactDOM.unmountComponentAtNode(div);
});
