import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Container, { Row, Column } from '../../Components/Grid'
import HeaderFont from '../../Components/Typography/Header'
import BodyFont from '../../Components/Typography/Body'
import GRSearchHeader from './GRSearchHeader'
import GRTweetsBody from './GRTweetsBody'
import GRSavedTweets from './GRSavedTweets'
import Color from '../../Components/Colors'

const TweetSaverTemplate = props => {
  const [dragging, setDragging] = useState(false)
  const [dropZoneTweet, setDropZoneTweet] = useState(false)
  const [dropZoneLocalStorage, setDropZoneLocalStorage] = useState(false)

  useEffect(() => {
    setDropZoneTweet(dropZoneTweet)
    setDropZoneLocalStorage(dropZoneLocalStorage)
  }, [dropZoneTweet, dropZoneLocalStorage])
  return (
  <Container>
    <Row>
      <Column full>
        <HeaderFont h1 label={props.label}  color="Blue-Grey-700" />
      </Column>
    </Row>
    <Row spaceBetween>
      <Column fullHeight
        full noPadding
        style={{border:`solid 1px ${Color["Blue-200"]}`}}
        onDrop={e => {
          e.preventDefault()
          setDragging(false)
        }}
        onDragOver={e => {
          e.preventDefault()
        }}
      >
        <Row>
          <Column full>
            <GRSearchHeader loading={props.loading}  preloading={props.preloading} data="GRSearchHeader" onEvent={props.onEvent} />
          </Column>
        </Row>
        <Row>
          <Column>
            <GRTweetsBody
              onDrag={props.drag}
              dropeZone={dropZoneTweet}
              draggable
              message="No tweets found!"
              loading={props.loading}
              preloading={props.preloading}
              tweets={props.tweets}
              data="GRTweetsBody"
              onEvent={e => {
                if (e.type === 'onDragStart') {
                  setDragging(true)
                }
                props.onEvent(e)
              }} />
          </Column>
        </Row>
      </Column>
      <Column fullHeight justifyCenter>
        <BodyFont nowrap label={"Drag Tweets to save"} color="Grey-400" />
      </Column>
      <Column  id="Drag2" fullHeight  full
        onDrop={e => {
          e.preventDefault()
          props.onEvent({
            type: 'onDrop'
          })
          setDragging(false)
          // const data = e.dataTransfer.getData("text")
          // document.getElementById("Drag2")
          // .appendChild(document.getElementById(data))
          props.onEvent({
            type: 'onDragOver1'
          })
        }}
        onDragOver={e => {
          e.preventDefault()
        }}

        style={{border:`solid 1px ${Color["Pink-100"]}`}}
        >
        <Row>
          <Column >
            <HeaderFont h2 label={`Saved Tweets (${props.savedTweets.length})`} color="Pink-400" />
          </Column>
        </Row>
        <Row>
          <Column  full={props.preloading}>
            <GRSavedTweets
              message="No tweets saved yet!"
              loading={props.loading}
              dragging={dragging}
              preloading={props.preloading}
              tweets={props.savedTweets}
              data="GRSavedTweets"
              onEvent={e => {
                props.onEvent(e)
              }}
                  />
          </Column>
        </Row>
      </Column>
    </Row>
  </Container>
)}

TweetSaverTemplate.propTypes = {
  label: PropTypes.string.isRequired,
  onEvent: PropTypes.func.isRequired
}

TweetSaverTemplate.defaultProps = {
  label: PropTypes.string.isRequired,
  onEvent: PropTypes.func.isRequired
}

export default TweetSaverTemplate