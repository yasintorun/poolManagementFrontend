import React from 'react'
import './navbar.css'
export default function Navbar(props) {
    return (
        <div className="dashboard_navbar">
            <div className="dashboard_navbar_main">
                <div className="brand_header">
                    Pool Management
                </div>
                <div className="top-items">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
