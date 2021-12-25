import React from 'react'
import { Route } from 'react-router'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import YTSwitch from '../utilities/customs/YTSwitch'

export default function HomeDashboard() {
    return (
        <>
            <YTSwitch>
                <Route exact path="/contact" component={ContactPage}/>
                <Route exact path="/" component={HomePage}/>
            </YTSwitch>
        </>
    )
}
