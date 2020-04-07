import styled from 'styled-components'
import Color from '../../Colors'

export default styled.span`
    font-size: 14px;
    line-height: 18px;

    ${({ color }) => color && `
        color: ${Color[color]};
    `}

    ${({ xs }) => xs && `
        font-size: 12px;
        line-height: 16px;
    `}

    ${({ sm }) => sm && `
        font-size: 14px;
        line-height: 18px;
    `}

    ${({ md }) => md && `
        font-size: 16px;
        line-height: 20px;
    `}

    ${({ lg }) => lg && `
        font-size: 18px;
        line-height: 22px;
    `}


`