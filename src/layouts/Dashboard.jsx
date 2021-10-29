import React from 'react'
import { Route, Switch } from 'react-router'
import YTSwitch from '../utilities/customs/YTSwitch'
import AdminDashboard from './AdminDashboard'

export default function Dashboard() {
    return (
        <YTSwitch>
            <Route path="/dashboard/admin*" exact component={AdminDashboard}/>
            {/* <Route path="/dashboard/user*" exact component={UserDashboard}/> */}
        </YTSwitch>
    )
}
