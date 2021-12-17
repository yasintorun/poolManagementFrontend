import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { getAllUsers } from '../../store/actions/userActions'
import YTDropdown from '../../utilities/customs/YTDropdown'

export default function UserDropdown({...props}) {

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        if(!users) {
            dispatch(getAllUsers)
        }
    }, [])
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
