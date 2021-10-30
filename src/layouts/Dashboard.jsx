import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router'
import _404NotFound from '../pages/Errors/_404NotFound'
import { getAllRoles } from '../store/actions/roleActions'
import { PathRedirect, ProtectedRoute } from '../utilities/customs/YTRoute'
import YTSwitch from '../utilities/customs/YTSwitch'
import AdminDashboard from './AdminDashboard'

export default function Dashboard() {

    const auth = useSelector(state => state.auth)
    const roles = useSelector(state => state.roles)
    const history = useHistory()

    useEffect(() => {
        console.log(roles)
    }, [])

    // useEffect(() => {
    //     if(auth.data)
    //         history.push("/")
    // }, [auth.data])

    const RoleBasedAuth = () => {
        switch (auth?.data?.role?.roleId) {
            case 2: //admin
                return (
                    <>
                    {console.log("asdasdasd")}
                        <ProtectedRoute path="/dashboard/admin*" exact component={AdminDashboard} />
                        <PathRedirect path="/dashboard" to="/dashboard/admin"/>
                    </>
                )
            case 4: //kullanıcı
                return (<h1>Userrrr</h1>)
            default: 
                return (<_404NotFound/>)
        }
    }

    return (
        <YTSwitch>
            <RoleBasedAuth />
        </YTSwitch>
    )
}
