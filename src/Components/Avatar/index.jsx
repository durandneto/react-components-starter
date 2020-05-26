import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledAvatar
}
from './styles'

const Avatar = props => {
  return (
    <StyledAvatar
      src={props.src}
      cursorPointer={props.cursorPointer}
      loading={props.loading}
      onClick={e => {
        if (props.onEvent) {
          props.onEvent({
            data: props.data,
            type: 'onClick',
            target: 'Avatar'
          })
        }
      }}
    />
  )
}

Avatar.defaultProps = {
  cursorPointer: false,
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  cursorPointer: PropTypes.bool,
}

export default Avatar

