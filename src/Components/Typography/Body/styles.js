import styled from 'styled-components'
import Color from '../../Colors'

export default styled.span`
    font-size: 14px;

    ${({ color }) => color && `
        color: ${Color[color]};
    `}

    ${({ xs }) => xs && `
        font-size: 12px;
    `}

    ${({ sm }) => sm && `
        font-size: 14px;
    `}

    ${({ md }) => md && `
        font-size: 16px;
    `}

    ${({ lg }) => lg && `
        font-size: 18px;
    `}

`