import React from 'react'
import renderer from 'react-test-renderer'

import Body from '.'

describe('Typography', () => {
    it('Rendering Font Components without crashing', () => {
        const tree = renderer.create(
            <Body
                color={"Indigo-900"}
                lg
                label={"Body component Indigo-900"}
            />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})