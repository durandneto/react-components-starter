import React from 'react'
import renderer from 'react-test-renderer'

import Header from '.'

describe('Typography', () => {
    it('Rendering Font Components without crashing', () => {
        const tree = renderer.create(
            <Header
                color={"Indigo-900"}
                h1
                label={"Header component Indigo-900"}
            />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})