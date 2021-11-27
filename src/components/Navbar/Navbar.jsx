import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
export default function Navbar(props) {
    return (
        <div className="dashboard_navbar">
            <div className="dashboard_navbar_main d-flex">
                <div className="brand_header">
                    Pool Management
                </div>
                <div className="top-items d-flex align-items-center">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
