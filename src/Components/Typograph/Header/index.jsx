import React from 'react'
import Proptypes from 'prop-types'
import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
} from './styles'

const Header = props => {

    switch ( true ) {
        case props.h1 :
            return <H1 {...props}>{props.label}</H1>
        case props.h3 :
            return <H3 {...props}>{props.label}</H3>
        case props.h4 :
            return <H4 {...props}>{props.label}</H4>
        case props.h5 :
            return <H5 {...props}>{props.label}</H5>
        case props.h6 :
            return <H6 {...props}>{props.label}</H6>

        default:
            return <H2 {...props} >{props.label}</H2>
    }
}

Header.defaultProps = {
    h1: false,
    h2: true,
    h3: false,
    h4: false,
    h5: false,
    h6: false,
    color: 'Blue-Grey-900'
}

Header.propTypes = {
    label: Proptypes.string.isRequired,
    h1: Proptypes.bool,
    h2: Proptypes.bool,
    h3: Proptypes.bool,
    h4: Proptypes.bool,
    h5: Proptypes.bool,
    h6: Proptypes.bool,
    color: Proptypes.string
}

export default Header