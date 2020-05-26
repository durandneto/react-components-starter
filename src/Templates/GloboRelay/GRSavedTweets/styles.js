import styled, { keyframes } from 'styled-components'
import Colors from '../../../Components/Colors'

const buttonLoadingAnimation = keyframes`
    to {
        transform: rotate(360deg)
    }
`
const generateButtonColor = color => `
    background-color: ${Colors[`${color}-A700`]};
    border: solid 1px ${Colors[`${color}-800`]};

    :hover {
        background-color: ${Colors[`${color}-500`]};
        border: solid 1px ${Colors[`${color}-500`]};
    }

    :active {
        background-color: ${Colors[`${color}-500`]};
        border: solid 1px ${Colors[`${color}-500`]};
        color: ${Colors[`${color}-800`]}
    }
`
const generateDisabledButton = props => {
    let color= 'Blue'

    switch ( true ) {
        case props.secondary:
            color= 'Orange'
            break
        case props.success:
            color= 'Green'
            break
        case props.danger:
            color= 'Red'
            break
        default:
            color= 'Blue'
    }

    return (`
    background-color: ${Colors[`${color}-50`]};
    border: 1px solid ${Colors[`${color}-50`]};
    color: ${Colors[`${color}-200`]};

    :hover {
        background-color: ${Colors[`${color}-50`]};
        border: 1px solid ${Colors[`${color}-50`]};
        cursor: ${props.loading ? 'wait' : 'not-allowed'};
    }
`)
}

export default styled.button`
    padding: 12px;
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
    position: relative;

    ${({ xs }) => xs && `
        padding: 4px;
    `}

    ${({ sm }) => sm && `
        padding: 6px;
    `}

    ${({ md }) => md && `
        padding: 8px;
    `}

    ${({ lg }) => lg && `
        padding: 10px;
    `}

    ${({ full }) => full && `
        width: 100%;
    `}

    :before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin-top: -10px;
        margin-left: -10000px;
        border-radius: 50%;
        border: 1px solid ${Colors['Blue-Grey-200']};
        border-top-color: ${Colors['Blue-500']};
        animation: ${buttonLoadingAnimation} .6s linear infinite;
        ${({ loading }) => loading && `
            margin-left: -10px;
        `}
      }

      ${({ primary }) => primary && `
        ${generateButtonColor('Blue')}
      `}

      ${({ danger }) => danger && `
        ${generateButtonColor('Red')}
      `}

      ${({ success }) => success && `
        ${generateButtonColor('Green')}
      `}

      ${({ secondary }) => secondary && `
        ${generateButtonColor('Orange')}
      `}
      ${props  => props.disabled && `
        ${generateDisabledButton(props)}
      `}


`
