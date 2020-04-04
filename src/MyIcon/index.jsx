import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Attachment }  from './icons/attachment.svg'

const MyIcon = props => {

  switch (props.source) {
    case 'attachment':
      return <Attachment />
    default:
      return <span />
  }
}

MyIcon.defaultProps = {}

export const IconPropTypes = {
  source: PropTypes.string.isRequired,
}

MyIcon.propTypes = IconPropTypes

export default MyIcon
