import React from 'react'
import { useSelector } from 'react-redux'
import { Form } from 'semantic-ui-react'
import YTDropdown from '../../utilities/customs/YTDropdown'

export default function UserDropdown({...props}) {

    const users = useSelector(state => state.users)
    return (
        <Form.Field >
            <YTDropdown
                search
                placeholder='Kullanıcı seçiniz'
                {...props}
                options={users?.data?.map((u, index) => {
                    return { text: u.firstname+" "+u.lastname, key: index, value: u.userId }
                })}
                // value={value}
            />
        </Form.Field>
    )
}
