import React, { useRef, useState, useEffect }  from 'react'
import PropTypes from 'prop-types'
import Container, { Row, Column } from '../Grid'

import {
  StyledContainer
} from './styles'

const RabioButton = props => {
  const checkbox = useRef(null)

  useEffect(() =>{
    if (props.checked) {
      checkbox.current.checked = true;
    }
  }, [])

  return (
    <Container>
      <StyledContainer
        disabled={props.disabled}
        onClick={ e => {
          if ( !props.disabled && !checkbox.current.checked ) {
            checkbox.current.checked = true;
            props.onEvent({
              type: "onClick",
              origin: "RadioButton",
              data: {
                ...props.data,
                value: props.value
              }
            })
          }
        }}

        onMouseEnter={ e => {
          props.onEvent({
            type: "onMouseEnter",
            origin: "RadioButton",
            data: {
              ...props.data,
              value: props.value
            }
          })
        }}

        onMouseOut={ e => {
          props.onEvent({
            type: "onMouseOut",
            origin: "RadioButton",
            data: {
              ...props.data,
              value: props.value
            }
          })
        }}

      >
        <Row>
          <Column noPadding marginRight>
            <input
              ref={checkbox}
              type="radio"
              value={props.value}
              onChange={ e => {}}
              disabled={props.disabled}
              name={props.groupBy}
            />
          </Column>
          {
            props.label && (
              <Column noPadding>
                {
                  props.label
                }
              </Column>
            )
          }
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
