import styled from 'styled-components'

export const StyledContainer = styled.div`
  ${({ disabled }) => disabled ? `
    opacity: 0.3;
    :hover {
        * {
            cursor: not-allowed;
        }
    }
  ` : `
    :hover {
        * {
            cursor: pointer;
            opacity: 0.8;
        }
    }
  `}
`