import React from 'react'
import renderer from 'react-test-renderer'
import Input from '.'

describe('Input', () => {
  it ('Rendering Input without crashing', () => {
    const result = renderer.create(
      <Input
        value={"Test Input"}
        onEvent={e => {}}
      />
    ).toJSON()
    expect(result).toMatchSnapshot()
  })
})
