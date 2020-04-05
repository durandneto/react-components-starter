import PropTyes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background-color: red;
    max-width: 100%;
    overflow: hidden;
    margin: 0 auto;
    flex-direction: column;


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
    alignCenter: PropTyes.bool,
    justifyCenter: PropTyes.bool,
    justifyRight: PropTyes.bool,
    lg: PropTyes.bool,
    md: PropTyes.bool,
    sm: PropTyes.bool,
    xs: PropTyes.bool,
    spaceAround: PropTyes.bool,
    spaceBetween: PropTyes.bool,
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