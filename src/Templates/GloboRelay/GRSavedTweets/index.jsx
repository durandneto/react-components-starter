import React from 'react'
import PropTypes from 'prop-types'
import GRTweetsBody from '../GRTweetsBody'

const GRSavedTweets = props => (
  <GRTweetsBody
    preloading={props.preloading}
    message={props.message}
    dragging={props.dragging}
    draggable={false}
    tweets={props.tweets}
    userMentionEntities={props.userMentionEntities}
    data={props.data}
    onEvent={props.onEvent}
  />
)

GRSavedTweets.propTypes = {
  onEvent: PropTypes.func.isRequired
}

GRSavedTweets.defaultProps = {
  onEvent: PropTypes.func.isRequired
}

export default GRSavedTweets