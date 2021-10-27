import React from 'react'
import { Button, ButtonGroup, Dropdown, Icon } from 'semantic-ui-react'
import Navbar from '../components/Navbar/Navbar'
import SideBar from '../components/SideBar/SideBar'
import '../assets/styles/Dashboard.css'
import { Route } from 'react-router'
import PoolList from '../pages/PoolPages/PoolList'
import { NavLink } from 'react-router-dom'
import PoolLaneList from '../pages/PoolLanePages/PoolLaneList'
import RoleList from '../pages/RolePages/RoleList'

export default function AdminDashboard() {
    return (
        <div className="dashboard">
            <Navbar>
                <ButtonGroup color="teal">
                    <Dropdown button icon="user" direction="left">
                        <Dropdown.Menu>
                            <Dropdown.Item icon="setting" text="Ayarlar" />
                            <Dropdown.Item icon="sign-out" text="Çıkış Yap" className="text-danger" />
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            </Navbar>

            <SideBar>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to="/dashboard/home">
                    <Icon name="user" />
                    Dashboard
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to="/dashboard/pool-list">
                    <Icon name="user" />
                    Havuzlar
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to="/dashboard/pool-lane-list">
                    <Icon name="user" />
                    Havuz Şeritleri
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to="/dashboard/role-list">
                    <Icon name="user" />
                    Roller
                </Button>
            </SideBar>

            <main className="dashboard_main">
                <div className="w-75 m-auto">
                    <Route path="/dashboard/pool-list" component={PoolList} exact />
                    <Route path="/dashboard/pool-lane-list" component={PoolLaneList} exact />
                    <Route path="/dashboard/role-list" component={RoleList} exact />
                </div>
            </main>
        </div>
    )
}
