import React from 'react'
import { Grid } from 'semantic-ui-react'
import '../../assets/styles/error.css'
import MainErrorPage from './MainErrorPage'
export default function _404NotFound() {
    return (
        <MainErrorPage errorCode="404" errorText ="Page Not Found"/>
    )
}