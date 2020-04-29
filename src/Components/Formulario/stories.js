import React from 'react'
import { storiesOf } from '@storybook/react'
import Formulario from '.'

storiesOf('Formulario|Responsivo', module)
    .add('First Version ', () => (
        <Formulario
            onEvent={ e => {
                console.log(e)
                switch ( true ) {
                    case e.type === "onMouseEnter" && e.origin === "Checkbox":
                        // alert("onMouseEnter origin checkbox " + e.origin + " e User ID === " + e.props.data.user.id )
                        break;
                    case e.type === "onMouseEnter" && e.origin === "RadioButton":
                        // alert("onMouseEnter Origin RadioButton === " + e.origin)
                        break;
                    case e.type === "onClick" && e.origin === "Button":
                        alert(`on click origin ${e.origin}`)
                        break
                }
            }}
        />
  ))
