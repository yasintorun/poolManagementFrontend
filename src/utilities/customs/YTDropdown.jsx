import { useField } from 'formik'
import React from 'react'
import { Dropdown, Form } from 'semantic-ui-react'

export default function YTDropdown({...props}) {
    const [field, meta, helpers] = useField(props.name)
    return (
        <Form.Dropdown
            selection
            onChange={(event, data) => helpers.setValue(data.value)}
            error={!!meta.error}
            {...props}
        />
    )
}
