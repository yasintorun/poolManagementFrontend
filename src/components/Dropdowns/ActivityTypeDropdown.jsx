import React from 'react'
import { useSelector } from 'react-redux'
import { Form } from 'semantic-ui-react'
import YTDropdown from '../../utilities/customs/YTDropdown'

export default function ActivityTypeDropdown({...props}) {
    const activities = useSelector(state => state.activities)

    return (
        <Form.Field>
            <YTDropdown
                placeholder='Etkinlik Türü seçiniz'
                {...props}
                options={activities?.data?.map((p, index) => {
                    return { text: p.name, key: index, value: p.id }
                })}
            // value={value}
            />
        </Form.Field>
    )
}
