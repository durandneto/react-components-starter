import React  from 'react'
import PropTypes from 'prop-types'
// import Container, { Row, Column } from '../Grid'
// import {
//   StyledContainer
// } from './styles'

const RabioButton = props => {
  return (
    <Container onClick={e => {
      props.onEvent({
        type: "onClick",
        origin: "RadioButton",
        data:{
          ...props.data,
          value: props.value
        }
      })
    }}

    onMouseEnter={e => {
      props.onEvent({
        type: "onMouseEnter",
        origin: "RadioButton",
        data:{
          ...props.data,
          value: props.value
        }
      })
    }}

    >
      <StyledContainer>
        <Row>
          <Column>
            <input
              type="radio"
              name={props.groupBy}
              onChange={()=>{}}
              value={props.value}
              checked={props.checked}
            />
          </Column>
          <Column>
          {
            props.label
          }
          </Column>
        </Row>
      </StyledContainer>
    </Container>
  )
}

RabioButton.defaultProps = {
  disabled: false,
  checked: false
}

RabioButton.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  groupBy: PropTypes.string.isRequired,
  onEvent: PropTypes.func.isRequired,
  data: PropTypes.object,
  checked: PropTypes.bool
}

export default RabioButton
