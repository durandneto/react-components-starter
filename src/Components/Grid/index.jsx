import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0;

    ${({ spaceAround }) => spaceAround && `
        justify-content: space-around;
    `}

    ${({ spaceBetween }) => spaceBetween && `
        justify-content: space-between;
    `}

    ${({ justifyCenter }) => justifyCenter && `
        justify-content: center;
    `}

    ${({ justifyRight }) => justifyRight && `
        justify-content: flex-end;
    `}

    ${({ alignCenter }) => alignCenter && `
        align-items: center;
    `}

    ${({ fullHeight }) => fullHeight && `
        height: 100vh;
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
`

export const Container = props => <StyledContainer {...props}>{props.children}</StyledContainer>

Container.propTypes = {
    alignCenter: PropTypes.bool,
    justifyCenter: PropTypes.bool,
    justifyRight: PropTypes.bool,
    fullHeight: PropTypes.bool,
    spaceAround: PropTypes.bool,
    spaceBetween: PropTypes.bool,
    lg: PropTypes.bool,
    md: PropTypes.bool,
    sm: PropTypes.bool,
    xs: PropTypes.bool,
}

Container.defaultProps = {
    alignCenter: false,
    justifyCenter: false,
    justifyRight: false,
    fullHeight: false,
    spaceAround: false,
    spaceBetween: false,
    lg: false,
    md: false,
    sm: false,
    xs: false,
}

const StyledRow = styled(StyledContainer)`
    flex-direction: row;
    margin: initial;
    width: 100%;
    position: relative;

    ${({ wrap }) => wrap && `
        flex-flow: wrap;
    `}

    ${({ margin }) => margin && `
        margin: 6px 0;
    `}

    ${({ column }) => column && `
        flex-direction: column;
    `}

    ${({ autoColumn }) => autoColumn && `
        @media only screen and (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
        }
    `}

    ${({ fitContent }) => fitContent && `
        width: fit-content;
    `}
`

const StyledColumn = styled(StyledContainer)`
    margin: initial;
    padding: 6px;
    width: fit-content;
    position: relative;


    ${({ noPadding }) => noPadding && `
        padding: 0px;
    `}

    ${({ marginRight }) => marginRight && `
        margin-right: 6px ;
    `}

    ${({ autoColumnFullWidth }) => autoColumnFullWidth && `
        @media only screen and (max-width: 768px) {
            width: 100%;
        }
    `}
    ${({ full }) => full && `
    width: 100%;
`}
`

export const Column = props => <StyledColumn {...props}>{props.children}</StyledColumn>
export const Row = props => <StyledRow {...props}>{props.children}</StyledRow>

Row.propTypes =  Container.propTypes;
Row.defaultProps =  Container.defaultProps;

Column.propTypes =  Container.propTypes;
Column.defaultProps =  Container.defaultProps;

export default Container