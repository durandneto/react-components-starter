import React from 'react'
import PropTypes from 'prop-types'
import Container, { Row, Column } from '../../../Components/Grid'
import Avatar from '../../../Components/Avatar'
import FontBody from '../../../Components/Typography/Body'
import { TitleDescriptionSkeleton, TextSkeleton, AvatarSkeleton } from 'react-preload-skeleton'
import StyledContainer, { DropZone } from './styles'

const ParsedTweetText = props => {
  const mentionParseText = "INSERT_MENTION_HERE"
  if (!props.mentions) {
    return <FontBody color="Blue-Grey-500" label={props.text} />
  }

  let outText = props.text
  const arrMentions = []
  props.mentions.map(mention => {
    arrMentions.push(`@${mention.screenName}`)
    outText = outText.replace(props.text.substring(mention.start, mention.end), mentionParseText)
  })

  return (
    <div>
    {
      outText.split(mentionParseText).map((text, index) => {
        return (
          <React.Fragment>
            <FontBody color={text.indexOf('RT') !== -1 ? "Cyan-600": "Blue-Grey-600"} label={text} />
            {
              arrMentions[index] && (
                <a href="#" title={`Follow ${props.mentions[index].name} on twitter ${arrMentions[index]}`} alt={`Follow ${props.mentions[index].name} on twitter ${arrMentions[index]}`}>
                  <FontBody color={"Blue-600"} label={arrMentions[index]} />
                </a>
              )
            }
          </React.Fragment>
        )
      })
    }
    </div>
  )
}

const GRSearchHeader = props => {

  if (props.tweets.length === 0) {
   return <Container style={{opacity: props.loading ? 0.2 : 1}}>
      <Row justifyCenter>
        <Column alignCenter>
          <FontBody color="Blue-Grey-500" label={props.message} />
        </Column>
      </Row>
    </Container>
  }

  return (
  <Container style={{opacity: props.loading ? 0.2 : 1}}>
    {
      props.tweets.map((tweet, index) => {
        return (
          <StyledContainer
            id={`draggable-${props.data}-${index}`}
            key={`draggable-${props.data}-${index}`}
            draggable={props.draggable}
            onDragStart={e => {
              e.dataTransfer.setData("text", `draggable-${props.data}-${index}`)
              props.onEvent({
                type: 'onDragStart',
                data: props.data,
                id: tweet.id
              })
          }}>
            <Row>
              <Column full >
                <Row >
                  <Column noPadding>
                  {
                    props.preloading ? (
                      <AvatarSkeleton />
                    ) : (
                      <Avatar
                        src={tweet.user.miniProfileImageURL}
                      />
                    )
                  }
                  </Column>
                  <Column full>
                    <Row>
                      <Column noPadding>
                      {
                        !props.preloading && (
                          <FontBody color="Grey-900" label={tweet.user.name} />
                        )
                      }
                      </Column>
                      <Column full noPadding>
                      {
                        !props.preloading && (
                          <a href="#">
                            <FontBody color={"Blue-600"} title={tweet.user.name} alt={tweet.user.name} label={`@${tweet.user.screenName}`} />
                          </a>
                        )
                      }
                      </Column>
                      <Column justifyRight noPadding>
                      {
                        !props.preloading && (
                          <FontBody color="Purple-300" nowrap label={new Date(tweet.createdAt).toDateString()} />
                        )
                      }
                      </Column>
                    </Row>
                    {
                      props.preloading ? (
                        <TitleDescriptionSkeleton  />
                      ) : (
                        <ParsedTweetText text={tweet.text} mentions={tweet.userMentionEntities} />
                      )
                    }
                  </Column>
                </Row>
              </Column>
            </Row>
          </StyledContainer>
        )
      })
    }
    {
      props.dragging && (
        <DropZone>
          <Row justifyCenter >
            <Column alignCenter >
              <FontBody xl color="Pink-500" label={"Drop Zone"} />
            </Column>
          </Row>
        </DropZone>
      )
    }
  </Container>
)}

GRSearchHeader.propTypes = {
  onEvent: PropTypes.func.isRequired
}

GRSearchHeader.defaultProps = {
  onEvent: PropTypes.func.isRequired
}

export default GRSearchHeader