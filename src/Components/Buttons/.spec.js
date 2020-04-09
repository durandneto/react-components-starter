import React from 'react'
import renderer from 'react-test-renderer'
import Button from '.'

describe('Button', () => {
    it ('Rendering Button without crashing', () => {
        const result = renderer.create(
            <Button
                label={"Test Button"}
                onEvent={e => {
                }}
            />
        ).toJSON()
        expect(result).toMatchSnapshot()
    })
})
