import React, { useState } from 'react'
import { Button, ButtonGroup, Dropdown, Icon } from 'semantic-ui-react'
import Navbar from '../components/Navbar/Navbar'
import SideBar from '../components/SideBar/SideBar'
import '../assets/styles/Dashboard.css'
import { Route, useHistory } from 'react-router'
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
import { useDispatch } from 'react-redux'
import { logout } from '../store/actions/authActions'
import PoolPackageList from '../pages/PoolPackagePages/PoolPackageList'
import PoolDetail from '../pages/PoolPages/PoolDetail'
import PoolAdd from '../pages/PoolPages/PoolAdd'
import PoolLaneAdd from '../pages/PoolLanePages/PoolLaneAdd'

export default function AdminDashboard() {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const url = "/dashboard"
    const history = useHistory()

    const dispatch = useDispatch()

    const logoutClick = () => {
        dispatch(logout())
    }
    return (
        <div className="dashboard">
            <Navbar>
                <div className="navbar-action position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 22.871">
                        <g data-name="Layer 2" transform="translate(-2 -2)">
                            <path id="Path_9" data-name="Path 9" d="M23.268,2H4.73A2.733,2.733,0,0,0,2,4.73V17.471A2.733,2.733,0,0,0,4.73,20.2a.911.911,0,0,1,.91.91v1.94a1.82,1.82,0,0,0,2.83,1.514l6.317-4.212a.9.9,0,0,1,.5-.153h4.436a2.742,2.742,0,0,0,2.633-2L25.9,5.462A2.735,2.735,0,0,0,23.268,2Zm.879,2.978-3.539,12.74a.915.915,0,0,1-.88.663H15.292a2.718,2.718,0,0,0-1.514.459L7.46,23.051v-1.94a2.733,2.733,0,0,0-2.73-2.73.911.911,0,0,1-.91-.91V4.73a.911.911,0,0,1,.91-.91H23.268a.914.914,0,0,1,.879,1.158Z" transform="translate(0 0)"></path>
                            <path id="Path_10" data-name="Path 10" d="M7.91,10.82h4.55a.91.91,0,1,0,0-1.82H7.91a.91.91,0,1,0,0,1.82Z" transform="translate(-0.45 -0.63)"></path>
                            <path id="Path_11" data-name="Path 11" d="M16.1,13H7.91a.91.91,0,1,0,0,1.82H16.1a.91.91,0,1,0,0-1.82Z" transform="translate(-0.45 -0.99)"></path>
                        </g>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        27
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div className="navbar-action position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <g data-name="Layer 2" transform="translate(-2 -2)">
                            <path id="Path_20" data-name="Path 20" d="M22.571,15.8V13.066a8.5,8.5,0,0,0-7.714-8.455V2.857a.857.857,0,0,0-1.714,0V4.611a8.5,8.5,0,0,0-7.714,8.455V15.8A4.293,4.293,0,0,0,2,20a2.574,2.574,0,0,0,2.571,2.571H9.8a4.286,4.286,0,0,0,8.4,0h5.23A2.574,2.574,0,0,0,26,20,4.293,4.293,0,0,0,22.571,15.8ZM7.143,13.066a6.789,6.789,0,0,1,6.78-6.78h.154a6.789,6.789,0,0,1,6.78,6.78v2.649H7.143ZM14,24.286a2.567,2.567,0,0,1-2.413-1.714h4.827A2.567,2.567,0,0,1,14,24.286Zm9.429-3.429H4.571A.858.858,0,0,1,3.714,20a2.574,2.574,0,0,1,2.571-2.571H21.714A2.574,2.574,0,0,1,24.286,20a.858.858,0,0,1-.857.857Z"></path>
                        </g>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        8
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div className="navbar-action position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 23.262 24">
                        <g id="icon" transform="translate(-1565 90)">
                            <path id="setting_1_" data-name="setting (1)" d="M30.45,13.908l-1-.822a1.406,1.406,0,0,1,0-2.171l1-.822a1.869,1.869,0,0,0,.432-2.385L28.911,4.293a1.869,1.869,0,0,0-2.282-.818l-1.211.454a1.406,1.406,0,0,1-1.88-1.086l-.213-1.276A1.869,1.869,0,0,0,21.475,0H17.533a1.869,1.869,0,0,0-1.849,1.567L15.47,2.842a1.406,1.406,0,0,1-1.88,1.086l-1.211-.454a1.869,1.869,0,0,0-2.282.818L8.126,7.707a1.869,1.869,0,0,0,.432,2.385l1,.822a1.406,1.406,0,0,1,0,2.171l-1,.822a1.869,1.869,0,0,0-.432,2.385L10.1,19.707a1.869,1.869,0,0,0,2.282.818l1.211-.454a1.406,1.406,0,0,1,1.88,1.086l.213,1.276A1.869,1.869,0,0,0,17.533,24h3.943a1.869,1.869,0,0,0,1.849-1.567l.213-1.276a1.406,1.406,0,0,1,1.88-1.086l1.211.454a1.869,1.869,0,0,0,2.282-.818l1.972-3.415a1.869,1.869,0,0,0-.432-2.385ZM27.287,18.77l-1.211-.454a3.281,3.281,0,0,0-4.388,2.533l-.213,1.276H17.533l-.213-1.276a3.281,3.281,0,0,0-4.388-2.533l-1.211.454L9.75,15.355l1-.822a3.281,3.281,0,0,0,0-5.067l-1-.822L11.721,5.23l1.211.454A3.281,3.281,0,0,0,17.32,3.151l.213-1.276h3.943l.213,1.276a3.281,3.281,0,0,0,4.388,2.533l1.211-.454,1.972,3.414h0l-1,.822a3.281,3.281,0,0,0,0,5.067l1,.822ZM19.5,7.375A4.625,4.625,0,1,0,24.129,12,4.63,4.63,0,0,0,19.5,7.375Zm0,7.375A2.75,2.75,0,1,1,22.254,12,2.753,2.753,0,0,1,19.5,14.75Z" transform="translate(1557.127 -90)"></path>
                        </g>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        3
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div >
                    <img className="profile-btn" width="60" height="60" src="https://jobick.dexignlab.com/xhtml/images/profile/pic1.jpg" onClick={() => setIsProfileOpen(!isProfileOpen)} />
                    <Dropdown direction="left" open={isProfileOpen} onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        <Dropdown.Menu>
                            <Dropdown.Item icon="setting" text="Ayarlar" />
                            <Dropdown.Item icon="sign-out" text="Çıkış Yap" className="text-danger" onClick={() => logoutClick()} />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Navbar>

            <SideBar>
                <Button className="p-4 sidebar-default-btn " as={NavLink} to={url + "/home"}>
                    <Icon name="home" />
                    Dashboard
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/user-list"}>
                    <Icon name="users " />
                    Kullanıcılar
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/pool-list"}>
                    <Icon name="map " />
                    Havuzlar
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/pool-package-list"}>
                    <Icon name="list " />
                    Havuz Paketleri
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/appointment-list"}>
                    <Icon name="calendar check " />
                    Randevular
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/appointment-add"}>
                    <Icon name="plus" />
                    Randevu Oluştur
                </Button>

            </SideBar>

            <main className="dashboard_main">
                <YTSwitch>
                    <div className="w-85 m-auto">
                        <Route path={url + "/pool-list"} component={PoolList} exact />
                        <Route path={url + "/pool-list/detail/:id"} component={PoolDetail} exact />
                        <Route path={url + "/pool-lane-list"} component={PoolLaneList} exact />
                        <Route path={url + "/role-list"} component={RoleList} exact />
                        <Route path={url + "/user-list"} component={UserList} exact />
                        <Route path={url + "/appointment-list"} component={AppointmentList} exact />
                        <Route path={url + "/appointment-add"} component={AppointmentAdd} exact />
                        <Route path={url + "/pool-package-list"} component={PoolPackageList} exact />
                        <Route path={url + "/home"} exact />
                        <Route path={url} exact />
                    </div>
                </YTSwitch>
            </main>
        </div>
    )
}
