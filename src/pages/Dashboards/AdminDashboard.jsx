import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Navbar from '../../components/Navbar/Navbar'
import SideBar from '../../components/SideBar/SideBar'
import '../../assets/styles/Dashboard.css'

export default function AdminDashboard() {
    return (
        <div className="dashboard">
            <Navbar>
            
            </Navbar>
            
            <SideBar>
                <Button className="p-4 sidebar-default-btn">
                    <Icon name="user" />
                    Profile
                </Button>
                <Button className="p-4 sidebar-default-btn">
                    <Icon name="user" />
                    Profile
                </Button>
                <Button className="p-4 sidebar-default-btn">
                    <Icon name="user" />
                    Profile
                </Button>
            </SideBar>
            
            <main className="dashboard_main">
                <h1>Hello Admin</h1>
            </main>
        </div>
    )
}
