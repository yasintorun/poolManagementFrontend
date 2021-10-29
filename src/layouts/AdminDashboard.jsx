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
import UserList from '../pages/UserPages/UserList'
import AppointmentList from '../pages/AppointmentPages/AppointmentList'
import YTAccordion from '../utilities/customs/YTAccordion'
import AppointmentAdd from '../pages/AppointmentPages/AppointmentAdd'
import _404NotFound from '../pages/Errors/_404NotFound'
import YTSwitch from '../utilities/customs/YTSwitch'
import { types } from '../services/localStoregeService'

export default function AdminDashboard() {
    const url = "/dashboard/admin"
    return (
        <div className="dashboard">
            <Navbar>
                <ButtonGroup color="teal">
                    <Dropdown button icon="user" direction="left">
                        <Dropdown.Menu>
                            <Dropdown.Item icon="setting" text="Ayarlar" />
                            <Dropdown.Item icon="sign-out" text="Çıkış Yap" className="text-danger" onClick={() => {localStorage.removeItem(types.USER); window.location.reload()}}/>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            </Navbar>

            <SideBar>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url+"/home"}>
                    <Icon name="home blue" />
                    Dashboard
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url+"/pool-list"}>
                    <Icon name="map teal" />
                    Havuzlar
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url+"/pool-lane-list"}>
                    <Icon name="road teal"/>
                    Havuz Şeritleri
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url+"/role-list"}>
                    <Icon name="user secret teal" />
                    Roller
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url+"/user-list"}>
                    <Icon name="users teal" />
                    Kullanıcılar
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url+"/appointment-list"}>
                    <Icon name="calendar check teal" />
                    Randevular
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url+"/appointment-add"}>
                    <Icon name="plus" color="teal"/>
                    Randevu Oluştur
                </Button>
                
            </SideBar>

            <main className="dashboard_main">
                <div className="w-75 m-auto">
                    <YTSwitch> 
                        <Route path={url+"/pool-list"} component={PoolList} exact />
                        <Route path={url+"/pool-lane-list"} component={PoolLaneList} exact />
                        <Route path={url+"/role-list"} component={RoleList} exact />
                        <Route path={url+"/user-list"} component={UserList} exact />
                        <Route path={url+"/appointment-list"} component={AppointmentList} exact />
                        <Route path={url+"/appointment-add"} component={AppointmentAdd} exact />
                        <Route path={url+"/home"} exact/>
                        <Route path={url} exact/>
                    </YTSwitch>
                </div>
            </main>
        </div>
    )
}
