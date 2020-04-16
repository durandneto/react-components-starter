import React from 'react'
import PropTypes from 'prop-types'
import { Row } from '../Grid'
import VHInputCheckbox from '.'
import { WrapperMulti } from './styles'

const VHInputCheckboxMulti = props => {

  return (
    <Row row className={`vh-checkbox ${props.className ? props.className : ''}`} autoWidth>
      {props.items.map(item => {
          return (
            <WrapperMulti key={`vh-input-multi-${item.id}`}>
                <VHInputCheckbox
                    title={item.label}
                    color="gray-100"
                    variant="platform1"
                    data={item}
                    value={item.value}
                    name={`${item.label}-input-checkbox`}
                    id={`${item.id}-vh-input-checkbox`}
                    onEvent={props.onEvent}
                    checked={item.checked}
                />
            </WrapperMulti>
          )
      })}
    </Row>
  )
}

VHInputCheckboxMulti.defaultProps = {
    onEvent: null,
    items: null,
    className: '',
}

VHInputCheckboxMulti.propTypes = {
  onEvent: PropTypes.func.isRequired,
  items: PropTypes.string,
  className: PropTypes.string,
}

export default VHInputCheckboxMulti
