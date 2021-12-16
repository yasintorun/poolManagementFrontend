import { objectMethod } from '@babel/types'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router'
import _404NotFound from '../pages/Errors/_404NotFound'
import AuthService from '../services/authService'
import { getAllRoles } from '../store/actions/roleActions'
import { getUserPoolPackage } from '../store/actions/userPoolPackageActions'
import { PathRedirect, ProtectedRoute } from '../utilities/customs/YTRoute'
import YTSwitch from '../utilities/customs/YTSwitch'
import AdminDashboard from './AdminDashboard'
import ClientDashboard from './ClientDashboard'

export default function Dashboard() {

    const auth = useSelector(state => state.auth)
    const roles = useSelector(state => state.roles)
    const history = useHistory()
    const dispatch = useDispatch()


    // useEffect(() => {
    //     if(auth.data)
    //         history.push("/")
    // }, [auth.data])

    useEffect(() => {
        if(AuthService.isClient()) {
            dispatch(getUserPoolPackage(6))
        }
    }, [])

    const RoleBasedAuth = () => {
        switch (auth?.data?.role?.roleId) {
            case 1: //admin
                return (
                    <>
                        <ProtectedRoute path="/dashboard*" exact component={AdminDashboard} />
                        <PathRedirect path="/dashboard" to="/dashboard/home"/>
                    </>
                )
            case 2: //kullanıcı
                return (
                    <>
                        <ProtectedRoute path="/dashboard*" exact component={ClientDashboard} />
                        <PathRedirect path="/dashboard" to="/dashboard/home" />
                    </>
                )
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
