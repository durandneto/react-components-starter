import React from 'react'
import { render } from '../../../test.setup'
import renderer from 'react-test-renderer'

import Container from '.'

describe('Container', () => {
    it('Rendering Container without crashing', () => {
        const tree = renderer.create(<Container>Text 2</Container>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})