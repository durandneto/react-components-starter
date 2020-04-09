import styled, { keyframes }  from "styled-components";
import Color from "../Colors";

const buttonLoadingAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const generateDisablesButtonColor = props => {
  let color = 'Blue'
  switch ( true ) {
    case props.secondary:
      color = 'Orange'
      break
    case props.info:
      color = 'Blue-Grey'
      break
    case props.danger:
      color = 'Red'
      break
    case props.success:
      color = 'Green'
      break
    default:
      color = 'Blue'
  }


  return (`
    background-color: ${Color[`${color}-50`]};
    border: 1px solid ${Color[`${color}-50`]};
    color: ${props.loading ? Color[`${color}-300`] : Color[`${color}-100`]};
    cursor: ${props.loading ? 'wait' : 'not-allowed'};
    :hover {
      background-color: ${Color[`${color}-50`]};
      border: 1px solid ${Color[`${color}-50`]};
    }
`)
}

const generateButtonColor = color => `
  background-color: ${Color[`${color}-A700`]};
  border: 1px solid ${Color[`${color}-800`]};

  :hover {
    background-color: ${Color[`${color}-300`]};
    border: 1px solid ${Color[`${color}-300`]};
  }

  :active {
    background-color: ${Color[`${color}-300`]};
    border: 1px solid ${Color[`${color}-300`]};
    color: ${Color[`${color}-600`]};
  }
`

export default styled.button`
  position: relative;
  width: fit-content;
  color: ${Color["Blue-Grey-900"]};

  padding: 12px;
  border-radius: 3px;
  font-family: Roboto;
  font-size: 14px;
  line-height: auto;
  text-align: center;
  cursor: pointer;

  ${({ nowrap }) => nowrap && `
    white-space:nowrap;
  `}

  ${({ xs }) => xs && `
    font-size: 10px;
    padding: 4px;
  `}

  ${({ sm }) => sm && `
    font-size: 12px;
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

  ${({ primary }) => primary && `
    ${generateButtonColor('Blue')}
  `}

  ${({ secondary }) => secondary && `
    ${generateButtonColor('Orange')}
  `}

  ${({ danger }) => danger && `
    ${generateButtonColor('Red')}
  `}

  ${({ success }) => success && `
    ${generateButtonColor('Green')}
  `}

  ${props => props.disabled && `
    ${generateDisablesButtonColor(props)}
  `}



  :before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0px;
    height: 0px;
    margin-top: -15px;
    margin-left: -15px;
    border-radius: 50%;
    border: 1px solid #ccc;
    border-top-color: #07d;
    animation: ${buttonLoadingAnimation} .6s linear infinite;

    ${({ loading }) => loading && `
      width: 30px;
      height: 30px;
    `}
  }

`;
