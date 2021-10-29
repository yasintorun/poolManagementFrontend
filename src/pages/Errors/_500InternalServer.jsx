import React from 'react'
import { Grid } from 'semantic-ui-react'
import '../../assets/styles/error.css'
import MainErrorPage from './MainErrorPage'
export default function _500InternalServer() {
    return (
        <MainErrorPage errorCode="500" errorText="Internal Server" />
    )
}