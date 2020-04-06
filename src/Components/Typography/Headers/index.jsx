import React from 'react'
import PropTypes from 'prop-types'
import * as Font from './.styles'

const Header = props => {
  switch (true) {
    case props.h1:
      return <Font.H1 color={props.color} className={`header-font ${props.className ? props.className : ''}`} reverse={props.reverse}>{props.label}</Font.H1>
    case props.h2:
      return <Font.H2 color={props.color} className={`header-font ${props.className ? props.className : ''}`} reverse={props.reverse}>{props.label}</Font.H2>
    case props.h3:
      return <Font.H3 color={props.color} className={`header-font ${props.className ? props.className : ''}`} reverse={props.reverse}>{props.label}</Font.H3>
    case props.h4:
      return <Font.H4 color={props.color} className={`header-font ${props.className ? props.className : ''}`} reverse={props.reverse}>{props.label}</Font.H4>
    case props.h5:
      return <Font.H5 color={props.color} className={`header-font ${props.className ? props.className : ''}`} reverse={props.reverse}>{props.label}</Font.H5>
    case props.h6:
      return <Font.H6 color={props.color} className={`header-font ${props.className ? props.className : ''}`} reverse={props.reverse}>{props.label}</Font.H6>
    default:
      return <Font.H2 color={props.color} className={`header-font ${props.className ? props.className : ''}`} reverse={props.reverse}>{props.label}</Font.H2>
  }
}

Header.defaultProps = {
  reverse: false,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
  color: "Blue-Grey-900",
}

Header.propTypes = {
  reverse: PropTypes.bool,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Header
