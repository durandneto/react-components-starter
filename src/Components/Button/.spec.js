import React from 'react'
import renderer from 'react-test-renderer'

import Button from '.'

describe('Button', () => {
    it('Rendering Button without crashing', () => {
        const tree = renderer.create(
          <Button
            onEvent={e => {
            }}
            label="Test Button"
          />
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})