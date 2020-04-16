import styled, { keyframes } from "styled-components"
import Colors from "../Colors"
import checkedIcon from './checked.svg'
import Text from '../Typography/Body'


const inputLoadingAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const StyledText = styled(Text)`
  color: ${Colors["Blue-Grey-500"]};
  ${({ checked }) => checked && `
    color: ${Colors["Blue-Grey-900"]};
  `}
`

export const StyledInput = styled.input`
  opacity: 0;
  cursor: pointer;
`

export const StyledContainer = styled.div`
  * {
    color: ${Colors["Blue-Grey-500"]};
    cursor: pointer;
  }
  :hover {
    * {
      color: ${Colors["Blue-Grey-200"]};
      cursor: pointer;
    }
  }

  ${({ disabled }) => disabled && `
    * {
      color: ${Colors["Blue-Grey-100"]};
      cursor: not-allowed;
    }
    :hover {
      * {
        color: ${Colors["Blue-Grey-100"]};
        cursor: not-allowed;
      }
    }
  `}
  ${({ error }) => error && `
    * {
      color: ${Colors["Red-500"]};
      cursor: pointer;
    }
    :hover {
      * {
        color: ${Colors["Red-200"]};
        cursor: pointer;
      }
    }
  `}
  ${({ loading }) => loading && `
    * {
      color: ${Colors["Blue-200"]};
      cursor: wait;
    }
    :hover {
      * {
        color: ${Colors["Blue-200"]};
        cursor: wait;
      }
    }
  `}
  ${({ success }) => success && `
    * {
      color: ${Colors["Green-500"]};
      cursor: pointer;
    }
    :hover {
      * {
        color: ${Colors["Green-200"]};
        cursor: pointer;
      }
    }
  `}
`
export const StyledCheckbox = styled.span`
  background-color: ${Colors["Blue-Grey-50"]};
  border: 1px solid ${Colors["Blue-Grey-100"]};
  width: 15px;
  height: 15px;
  border-radius: 3px;
  cursor: pointer;

  ${({ checked }) => checked && `
    :before {
      content: "";
      background-image:url(${checkedIcon});
      background-size: 100% 100%;
      display: inline-block;
      height: 18px;
      width: 18px;
      position: relative;
      top: -5px;
      left: 2px;
    }
  `}

  ${({ error }) => error && `
    background-color: ${Colors["Red-50"]};
    border: 1px solid ${Colors["Red-200"]};
  `}

  ${({ loading }) => loading && `
    background-color: ${Colors["Blue-50"]};
    border: 1px solid ${Colors["Blue-200"]};
  `}

  ${({ success }) => success && `
    background-color: ${Colors["Green-50"]};
    border: 1px solid ${Colors["Green-200"]};
  `}
`
export const StyledIconLoading = styled.span`
  cursor: wait;
  :before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    margin-top: -6px;
    margin-left: -6px;
    border-radius: 50%;
    border: 1px solid ${Colors['Blue-Grey-200']};
    border-top-color: ${Colors['Blue-500']};
    animation: ${inputLoadingAnimation} .6s linear infinite;
    ${({ label }) => label && `
      width: 20px;
      height: 20px;
      margin-top: -10px;
      margin-left: -10px;
    `}
  }
`
