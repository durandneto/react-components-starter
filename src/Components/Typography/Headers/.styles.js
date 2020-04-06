import styled from 'styled-components'
import Color from '../../Colors'

export const H1 = styled.h1`
  font-size: 36px;
  font-weight: 500;
  line-height: 48px;
  height: 48px;
  margin: 0;
  padding: 0;
  color: ${props => Color[props.color]};
`

export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  color: ${props => Color[props.color]};
`

export const H3 = styled.h3`
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  height: 36px;
  margin: 0;
  padding: 0;
  color: ${props => Color[props.color]};
`

export const H4 = styled.h4`
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  color: ${props => Color[props.color]};
`

export const H5 = styled.h5`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  color: ${props => Color[props.color]};
`

export const H6 = styled.h6`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  color: ${props => Color[props.color]};
`

export default H1

