import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import '../../assets/styles/error.css'
export default function MainErrorPage({errorCode, errorText, to, buttonText}) {
    return (
        <div id="error">
            <div class="error">
                <div class="error-main">
                    <h1>{errorCode}</h1>
                    <h2>{errorText}</h2>
                </div>
                <a href={to??"/"}>{buttonText??"Anasayfa"}</a>
            </div>
        </div>
    )
}