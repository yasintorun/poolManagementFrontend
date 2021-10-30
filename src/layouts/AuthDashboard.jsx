import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import _404NotFound from '../pages/Errors/_404NotFound'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import { types } from '../services/localStoregeService'
import YTSwitch from '../utilities/customs/YTSwitch'

export default function AuthDashboard() {
    // let history = useHistory()
    // const auth = useSelector(state => state.auth)
    // useEffect(() => {
    //     if (localStorage.getItem(types.USER)) {
    //         history.push("/dashboard/admin")
    //     }
    // }, [auth.data])
    return (
        <YTSwitch>
            <Route path="/auth/register" component={RegisterPage} exact />
            <Route path="/auth/login" component={LoginPage} exact />
        </YTSwitch>
    )
}
