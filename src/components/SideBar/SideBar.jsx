import React from 'react'
import { Button, Divider } from 'semantic-ui-react'
import './sidebar.css'

export default function SideBar(props) {
    return (
        <div className="dashboard_sidebar text-center">
            <Button.Group vertical fluid className="w-100">
                {props.children}
            </Button.Group>
            <p className="dashboard_sidebar_footer">
                Yasin Torun
            </p>
        </div>
    )
}
