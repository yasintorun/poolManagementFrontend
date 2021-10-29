import React from 'react'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import _404NotFound from '../pages/Errors/_404NotFound'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import YTSwitch from '../utilities/customs/YTSwitch'

export default function AuthDashboard() {
    return (
        <YTSwitch>
            <Route path="/auth/register" component={RegisterPage} exact />
            <Route path="/auth/login" component={LoginPage} exact />
        </YTSwitch>
    )
}
