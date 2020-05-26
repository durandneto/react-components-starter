import React from 'react'
import StyledButton from './styles'
import PropTypes from 'prop-types'
import Container, { Row, Column } from '../../../Components/Grid'
import Input from '../../../Components/input'
import Button from '../../../Components/Button'
import { InputSkeleton, AvatarSkeleton } from 'react-preload-skeleton'

const GRSearchHeader = props => (
  <Row alignCenter>
    <Column full>
      {
        props.preloading ? (
          <InputSkeleton />
        ) : (
          <Input
            value={props.value}
            onEvent={props.onEvent}
            data={props.data}
            disabled={props.loading}
          />
        )
      }
    </Column>
    <Column>
    {
        !props.preloading && (
          <Button
            xs
            label={"Search"}
            onEvent={props.onEvent}
            data={props.data}
            loading={props.loading}
            primary
          />
        )
      }
    </Column>
  </Row>
)

GRSearchHeader.propTypes = {
  onEvent: PropTypes.func.isRequired
}

GRSearchHeader.defaultProps = {
  onEvent: PropTypes.func.isRequired
}

export default GRSearchHeader