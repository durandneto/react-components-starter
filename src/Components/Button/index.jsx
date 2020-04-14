import React from 'react'
import StyledButton from './styles'
import PropTypes from 'prop-types'

const Button = props => (
    <StyledButton
        {...props}
        disabled={(props.disabled || props.loading)}
        onClick={ e => {
            props.onEvent({
                type: 'onClick',
                origin: 'Button',
                data: props.data
            })
        }}
    >
        {
            props.loading && props.loadingLabel ? props.loadingLabel : props.label
        }
    </StyledButton>
)

Button.propTypes = {
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    label: PropTypes.string.isRequired,
    loadingLabel: PropTypes.string,
    xs: PropTypes.bool,
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool,
    success: PropTypes.bool,
    primary: PropTypes.bool,
    danger: PropTypes.bool,
    secondary: PropTypes.bool,
    data: PropTypes.object,
    onEvent: PropTypes.func.isRequired
}

Button.defaultProps = {
    disabled: false,
    loading: false,
    loadingLabel: null,
    xs: false,
    sm: false,
    md: false,
    lg: false,
    success: false,
    primary: false,
    danger: false,
    secondary: false,
    data: {}
}

export default Button