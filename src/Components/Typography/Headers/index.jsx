import React from 'react'
import PropTypes from 'prop-types'
import * as Header from './styles'

const VHHeader = props => {
  switch (true) {
    case props.h1:
      return <Header.H1 className={`vh-header-component ${props.className ? props.className : ''}`} reverse={props.reverse}>{props.label}</Header.H1>
    case props.h2:
      return <Header.H2 className={`vh-header-component ${props.className ? props.className : ''}`} reverse={props.reverse}>{props.label}</Header.H2>
    case props.h3:
      return <Header.H3 className={`vh-header-component ${props.className ? props.className : ''}`} reverse={props.reverse}>{props.label}</Header.H3>
    case props.h4:
      return <Header.H4 className={`vh-header-component ${props.className ? props.className : ''}`} reverse={props.reverse}>{props.label}</Header.H4>
    case props.h5:
      return <Header.H5 className={`vh-header-component ${props.className ? props.className : ''}`} reverse={props.reverse} padding={props.padding} textAlign={props.textAlign}>{props.label}</Header.H5>
    case props.h6:
      return <Header.H6 className={`vh-header-component ${props.className ? props.className : ''}`} reverse={props.reverse}>{props.label}</Header.H6>
  }
}

VHHeader.defaultProps = {
  reverse: false,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
}

VHHeader.propTypes = {
  reverse: PropTypes.bool,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
}


export default VHHeader
