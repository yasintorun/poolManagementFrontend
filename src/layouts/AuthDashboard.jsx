import React from 'react'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

export default function AuthDashboard() {
    return (
        <>
            <Route path="/auth/register" component={RegisterPage} exact />
            <Route path="/auth/login" component={LoginPage} exact />
        </>
    )
}
