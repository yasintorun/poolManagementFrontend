import React from 'react'
import { useSelector } from 'react-redux'

export default function RoleBasedAction({ admin, client, notAuthorize }) {
    const auth = useSelector(state => state.auth)

    switch (auth?.data?.role?.roleId) {
        case 1:
            return (<>{admin}</>)

        case 2:
            return (<>{client}</>)

        default:
            return (notAuthorize)
    }
}
