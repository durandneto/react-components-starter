import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Row, Column } from '../Grid'

import
  {
    StyledCheckbox,
    StyledInput,
    StyledContainer,
    StyledText,
    StyledIconLoading
  }
from "./styles"

const InputCheckbox = props => {
  const [checked, setChecked] = useState(props.checked || false)
  const [error, setError] = useState(props.error || false)

  return (
    <StyledContainer
      id={props.id}
      checked={checked}
      disabled={props.disabled || props.loading}
      error={error}
      loading={props.loading}
      success={props.success}
      onMouseEnter={ e => {
        props.onEvent({
          type: "onMouseEnter",
          origin: "Checkbox",
          props: {
            data: {
              ...props.data,
              checked,
            },
            state: {
              error: error,
              loading: props.loading,
              success: props.success,
              disabled: props.disabled,
            }
          }
        })
      }}
      onClick={() => {
        setError(false)
        !props.loading && !props.disabled && props.onEvent({
          type: "onClick",
          origin: "Checkbox",
          props: {
            data: {
              ...props.data,
              checked: !checked,
            },
            state: {
              error: error,
              loading: props.loading,
              success: props.success,
              disabled: props.disabled,
            }
          }
        })
        !props.loading && !props.disabled && setChecked(!checked)
      }}
    >
      <Row alignCenter fitContent >
        <Column noPadding>
          <StyledCheckbox
            checked={checked}
            loading={props.loading}
            error={error}
            success={props.success}
          >
            <StyledInput
              name={props.name}
              checked={checked}
              onChange={() => {}}
              type="checkbox" />
          </StyledCheckbox>
        </Column>
        {
          props.label && (
            <Column>
              <StyledText
                label={props.label}
                checked={checked}
                loading={props.loading}
              />
            </Column>
          )
        }
        {
          props.loading && <StyledIconLoading label={props.label} />
        }
      </Row>
    </StyledContainer>
  )
}

InputCheckbox.defaultProps = {
  onEvent: null,
  data: null,
  checked	: false,
  disabled: false,
  success: false,
  error: false,
  loading: false,
}

InputCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onEvent: PropTypes.func.isRequired,
  data: PropTypes.string,
  checked	: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
}

export default InputCheckbox
