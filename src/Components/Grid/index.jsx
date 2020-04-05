import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background-color: red;
    max-width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-direction: column;

    ${({ Theme }) => Theme && `
        background-color: ${Theme.background};
        color: ${Theme.foreground};
    `}

    ${({ lg }) => lg && `
        width: 1280px;
    `}

    ${({ md }) => md && `
        width: 1024px;
    `}

    ${({ sm }) => sm && `
        width: 768px;
    `}

    ${({ xs }) => xs && `
        width: 320px;
    `}

    ${({ alignCenter }) => alignCenter && `
        align-items: center;
    `}

    ${({ justifyCenter }) => justifyCenter && `
        justify-content: center;
    `}

    ${({ justifyRight }) => justifyRight && `
        justify-content: flex-end;
    `}

    ${({ spaceBetween }) => spaceBetween && `
        justify-content: space-between;
    `}

    ${({ spaceAround }) => spaceAround && `
        justify-content: space-around;
    `}

`

export const propTypes = {
    alignCenter: PropTypes.bool,
    justifyCenter: PropTypes.bool,
    justifyRight: PropTypes.bool,
    lg: PropTypes.bool,
    md: PropTypes.bool,
    sm: PropTypes.bool,
    xs: PropTypes.bool,
    spaceAround: PropTypes.bool,
    spaceBetween: PropTypes.bool,
}

export const defaultProps = {
    alignCenter: false,
    justifyCenter: false,
    justifyRight: false,
    lg: false,
    md: false,
    sm: false,
    xs: false,
    spaceAround: false,
    spaceBetween: false,
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;


export const Row = styled(Container)`
    margin: 3px;
    background-color: blue;
    ${({ inline }) => inline && `
        flex-direction: row;
    `}
`

Row.propTypes = {
    ...propTypes
}

Row.defaultProps = {
    ...defaultProps
}

export default Container