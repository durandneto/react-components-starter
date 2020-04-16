import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import
  StyledInput,
  {
    StyledIconLoading,
    StyledIconError,
    StyledErrorMessage
  }
from './styles'

const Input = props => {
  const [value, handleChange] = useState(props.value);
  const [inputValid, setInputInvalid] = useState(true);

  useEffect(() =>{
    if ( props.test && value ) {
      setInputInvalid(value.match(props.test))
    }
  }, [props.value])

  return (
    <>
      <StyledInput
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        success={props.success}
        error={props.error || !inputValid}
        disabled={props.disabled || props.loading}
        loading={props.loading}
        autoFocus={props.autoFocus}
        value={value}
        onChange={e => {
          handleChange(e.currentTarget.value)
          if (!e.currentTarget.value) {
            setInputInvalid(true)
          } else if (props.test) {
            setInputInvalid(e.currentTarget.value.match(props.test))
          }
        }}
        onBlur={e => {
          inputValid && props.onEvent({
            data: {
              value,
              data: props.data
            },
            event: "onBlur",
            origin: "Input"
          })
        }}

        onFocus={e => {
          inputValid && props.onEvent({
            data: {
              value,
              data: props.data
            },
            event: "onFocus",
            origin: "Input"
          })
        }}

        onKeyUp={e => {
          if (e.key === "Enter") {
            inputValid && props.onEvent({
              data: {
                value,
                data: props.data
              },
              event: "onKeyUpAction",
              origin: "Input"
            })
          } else {
            handleChange(e.currentTarget.value)
            inputValid && props.onEvent({
                data: {
                  value: e.currentTarget.value,
                  data: props.data
                },
                event: "onKeyUp",
                origin: "Input"
              })
            }
        }}
    />
    {
      props.loading && <StyledIconLoading />
    }
    {
      (props.error || !inputValid)  &&
        <>
          <StyledIconError />
          <StyledErrorMessage>
            {
              !inputValid ? props.testMessage :  props.error
            }
          </StyledErrorMessage>
        </>
    }
  </>
  )
}

Input.defaultProps = {
  type: "text",
  testMessage: "",
  disabled: false,
  loading: false,
  placeholder: '',
  onEvent: () => {}
}

Input.propTypes = {
  disabled: PropTypes.bool,
  test: PropTypes.any,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  testMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  onEvent: PropTypes.func,
  data: PropTypes.object,
}

export default Input
