import styled from 'styled-components'

export const Body = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;


  ${({ sm }) => sm && `
    font-size: 14px;
    line-height: 18px;
  `}

  ${({ xs }) => xs && `
    font-size: 12px;
    line-height: 16px;
  `}

  ${({ md }) => md && `
    font-size: 16px;
    line-height: 20px;
  `}

  ${({ lg }) => lg && `
    font-size: 18px;
    line-height: 22px;
  `}

  ${({ reverse }) => reverse && `
    color: #fff;
  `}

`
export default Body