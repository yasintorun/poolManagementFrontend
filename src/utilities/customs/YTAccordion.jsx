import React from 'react'
import { Button } from 'semantic-ui-react'

export default function YTAccordion(props) {
    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}
