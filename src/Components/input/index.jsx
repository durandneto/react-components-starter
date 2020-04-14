import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Container, { Row, Column } from '../Grid'
import

  StyledInput, {
    StyledIconLoading,
    StyledIconError,
    StyledErrorMessage,
  } from "./styles"

const Input = props => {
  const [value, handleChange] = React.useState(props.value);
  const [inputValid, setInputInvalid] = React.useState(true);

  return (
    <Container>
      <Row>
        <Column noPadding full>
          <StyledInput
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            disabled={props.disabled || props.loading}
            error={props.error || !inputValid}
            loading={props.loading}
            success={props.success}
            autoFocus={props.autoFocus}
            value={value}
            onChange={e => {
              handleChange(e.currentTarget.value)

              if (e.currentTarget.value) {
                setInputInvalid(e.currentTarget.value.match(props.test))
              } else {
                setInputInvalid(true)
              }
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

            onFocus={() => {
              inputValid && props.onEvent({
                data: {
                  value,
                  data: props.data
                },
                event: "onFocus",
                origin: "Input"
              })
            }}

            onBlur={() => {
              inputValid && props.onEvent({
                data: {
                  value,
                  key: props.data
                },
                event: "onBlur",
                origin: "Input"
              })
            }}
          />
          {
            props.loading && <StyledIconLoading />
          }
          {
            (props.error || !inputValid) &&
            <>
              <StyledIconError />
              <StyledErrorMessage>
                {
                  !inputValid ? props.testMessage : props.error
                }
              </StyledErrorMessage>
            </>
          }
        </Column>
      </Row>
    </Container>
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
