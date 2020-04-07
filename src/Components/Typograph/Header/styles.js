import styled from 'styled-components'
import Color from '../../Colors'

export const H1 = styled.h1`
    margin: 0;
    padding: 0;

    ${({ color }) => color && `
        color: ${Color[color]};
    `}
`

export const H2 = styled.h2`
    margin: 0;
    padding: 0;

    ${({ color }) => color && `
        color: ${Color[color]};
    `}
`

export const H3 = styled.h3`
    margin: 0;
    padding: 0;

    ${({ color }) => color && `
        color: ${Color[color]};
    `}
`

export const H4 = styled.h4`
    margin: 0;
    padding: 0;

    ${({ color }) => color && `
        color: ${Color[color]};
    `}
`

export const H5 = styled.h5`
    margin: 0;
    padding: 0;

    ${({ color }) => color && `
        color: ${Color[color]};
    `}
`

export const H6 = styled.h6`
    margin: 0;
    padding: 0;

    ${({ color }) => color && `
        color: ${Color[color]};
    `}
`
