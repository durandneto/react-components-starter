import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, boolean } from "@storybook/addon-knobs";

import Formulario from '.'

const defaultErrorController = {
  loading: boolean('Loading', false),
  disabled: boolean('Disabled', false),
  error: boolean('Error',false),
  success: boolean('Success', false),
};


storiesOf('Formulario|Responsivo', module)
    .add('First Version ', () => (
        <Formulario
            controls={{
                name: object("Name", defaultErrorController, "Text"),
                email: object("E-mail", defaultErrorController, "Text"),
                subscribe: object("Subscribe",defaultErrorController, "Checkbox"),
                age: object("Subscribe",defaultErrorController, "Radio Buttons"),
                cta: object("CTA", defaultErrorController, "Buttons"),
            }}
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
