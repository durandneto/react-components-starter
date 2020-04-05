import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
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

export const Row = styled(Container)`
    flex-direction: row;
    margin: initial;
`

export const Column = styled(Container)`
    margin: initial;
`


export default Container