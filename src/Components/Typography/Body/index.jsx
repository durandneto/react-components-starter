import React from 'react'
import PropTypes from 'prop-types'
import Body from './styles'

const VHBody = props => {
  return (
    <Body
      xs={props.xs}
      sm={props.sm}
      lg={props.lg}
      reverse={props.reverse}
      className={`vh-body-component ${props.className ? props.className : ''}`}
    >
      {props.label}
    </Body>
  )
}


VHBody.defaultProps = {
  reverse: false,
  xs: false,
  sm: true,
  lg: false,
}

VHBody.propTypes = {
  reverse: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  lg: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
}


export default VHBody
