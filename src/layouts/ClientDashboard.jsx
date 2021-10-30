import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import { Button, ButtonGroup, Dropdown, Icon } from 'semantic-ui-react'
import Navbar from '../components/Navbar/Navbar'
import SideBar from '../components/SideBar/SideBar'
import ClientAppointmentList from '../pages/client/ClientAppointmentList'
import ClientHomePage from '../pages/client/ClientHomePage'
import { logout } from '../store/actions/authActions'
import YTSwitch from '../utilities/customs/YTSwitch'
export default function ClientDashboard() {
    const url = "/dashboard/client"
    const dispatch = useDispatch()
    const logoutClick = () => {
        dispatch(logout())
    }

    return (
        <div className="dashboard">
            <Navbar>
                <ButtonGroup color="teal">
                    <Dropdown button icon="user" direction="left">
                        <Dropdown.Menu>
                            <Dropdown.Item icon="user" text="Profil" />
                            <Dropdown.Item icon="sign-out" text="Çıkış Yap" className="text-danger" onClick={() => logoutClick()} />
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            </Navbar>
            <SideBar>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/home"}>
                    <Icon name="home blue" />
                    Dashboard
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/my-appointments"}>
                    <Icon name="home blue" />
                    Randevularım
                </Button>
            </SideBar>

            <main className="dashboard_main">
                <div className="w-75 m-auto">
                    <YTSwitch>

                        <Route path={url+"/my-appointments"} exact component={ClientAppointmentList}  />
                        <Route path={url+"/home"} component={ClientHomePage}/>
                        <Route path={url} component={ClientHomePage}/>
                    </YTSwitch>
                </div>
            </main>
        </div>
    )
}
