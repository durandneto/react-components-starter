import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './styles'

const Button = props => {

  return (
    <StyledButton
      id={props.id}
      primary={props.primary}
      secondary={props.secondary}
      danger={props.danger}
      info={props.info}
      success={props.success}
      full={props.full}
      loading={props.loading}
      disabled={props.disabled || props.loading}
      className={`button-component ${props.className ? props.className : ''}`}
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      nowrap={props.nowrap}
      type="button"
      onClick={() => {
        props.onEvent({
          type: "OnClick",
          origin: "Button",
          props: {
            data: props.data
          }
        })
      }}>
      {
        props.loading && props.loadingLabel ? props.loadingLabel : props.label
      }
    </StyledButton>
  )
}

Button.defaultProps = {
  disabled: false,
  danger: false,
  success: false,
  info: false,
  nowrap: false,
  secondary: false,
  className: '',
  loadingLabel: '',
  primary: false,
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  info: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  nowrap: PropTypes.bool,
  disabled: PropTypes.bool,
  onEvent: PropTypes.func.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  loadingLabel: PropTypes.string,
}

export default Button
