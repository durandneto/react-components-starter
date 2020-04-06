import React from 'react'
import renderer from 'react-test-renderer'
import Text from '.'

describe('Text', () => {
    it('Rendering Text without crashing', () => {
        const tree = renderer.create(<Text variant={"h1"} text="Text Font" />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})