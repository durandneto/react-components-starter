import React from 'react'
import PropTypes from 'prop-types'
import Font from './.styles'

const Body = props => {
  return (
    <Font
      xs={props.xs}
      sm={props.sm}
      lg={props.lg}
      md={props.md}
      reverse={props.reverse}
      className={` ${props.className ? props.className : ''}`}
    >
      {props.label}
    </Font>
  )
}


Body.defaultProps = {
  reverse: false,
  xs: false,
  sm: true,
  md: false,
  lg: false,
}

Body.propTypes = {
  reverse: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
}


export default Body