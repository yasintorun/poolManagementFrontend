import { useField, useFormik } from 'formik'
import React from 'react'
import { Form } from 'semantic-ui-react'

export default function YTFormField({...props}) {
    
    const [field, meta] = useField(props.name)
    
    console.log(meta)

    const rr = React.Children.map(props.children, child => {
        return React.cloneElement(child,  {...field})
    })
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            
        </Form.Field>
    )
}
