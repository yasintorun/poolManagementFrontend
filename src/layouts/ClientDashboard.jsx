import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import { Button, ButtonGroup, Dropdown, Icon } from 'semantic-ui-react'
import Navbar from '../components/Navbar/Navbar'
import SideBar from '../components/SideBar/SideBar'
import AppointmentAdd from '../pages/AppointmentPages/AppointmentAdd'
import ChoosePoolPackage from '../pages/ChoosePoolPackage'
import ClientAppointmentList from '../pages/client/ClientAppointmentList'
import ClientHomePage from '../pages/client/ClientHomePage'
import ClientPoolPackage from '../pages/client/ClientPoolPackage'
import Payment from '../pages/Payment'
import PoolPackageList from '../pages/PoolPackagePages/PoolPackageList'
import PoolDetail from '../pages/PoolPages/PoolDetail'
import PoolList from '../pages/PoolPages/PoolList'
import ResetPassword from '../pages/ResetPassword'
import { logout } from '../store/actions/authActions'
import { getClientStatistics } from '../store/actions/statisticActions'
import { CookieTypes } from '../utilities/cookieTypes'
import YTSwitch from '../utilities/customs/YTSwitch'
import AuthService from '../services/authService'
import ClientProfilePage from '../pages/client/ClientProfilePage'
const ClientDashboard = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const url = "/dashboard"
    const dispatch = useDispatch()
    let client = AuthService.getClient()
    const logoutClick = () => {
        dispatch(logout())
    }

    useEffect(() => {
        client = AuthService.getClient()
        if (client == null) {
            // logoutClick()
            return
        }
    }, [client])

    return (
        <div className="dashboard">
            <Navbar>
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
                <div >
                    <img className="profile-btn" width="60" height="60" src={client?.image?.imagePath ?? "https://jobick.dexignlab.com/xhtml/images/profile/pic1.jpg"} onClick={() => setIsProfileOpen(!isProfileOpen)} />
                    <Dropdown direction="left" open={isProfileOpen} onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        <Dropdown.Menu>
                            <Dropdown.Item icon="user" text="Profilim" as={NavLink} to={url + "/profile"} />
                            <Dropdown.Item icon="sign-out" text="Çıkış Yap" className="text-danger" onClick={() => logoutClick()} />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {/* <ButtonGroup color="teal">
                    <Dropdown button icon="user" direction="left">
                        <Dropdown.Menu>
                            <Dropdown.Item icon="user" text="Profil" />
                            <Dropdown.Item icon="sign-out" text="Çıkış Yap" className="text-danger" onClick={() => logoutClick()} />
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup> */}
            </Navbar>
            <SideBar>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/home"}>
                    <Icon name="home " />
                    Dashboard
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/my-package"}>
                    <Icon name="home " />
                    Paketim
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/my-appointments"}>
                    <Icon name="home " />
                    Randevularım
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/pool-list"}>
                    <Icon name="map " />
                    Havuzlar
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/pool-package-list"}>
                    <Icon name="list " />
                    Havuz Paketleri
                </Button>
                {/* <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/choose-package"}>
                    <Icon name="list " />
                    Havuz Paketi Seç
                </Button>
                <Button className="p-4 sidebar-default-btn" as={NavLink} to={url + "/payment"}>
                    <Icon name="list " />
                    Ödeme Sayfası
                </Button> */}
            </SideBar>

            <main className="dashboard_main">
                <YTSwitch>
                    <div className='w-100'>
                        <Route path={url + "/resetpassword"} exact component={ResetPassword} />

                        <div className="w-85 m-auto">
                            <Route path={url + "/profile"} component={ClientProfilePage} exact />
                            <Route path={url + "/pool-list"} component={PoolList} exact />
                            <Route path={url + "/pool-list/detail/:id"} component={PoolDetail} exact />
                            <Route path={url + "/pool-package-list"} exact component={PoolPackageList} />
                            <Route path={url + "/my-package"} exact component={ClientPoolPackage} />
                            <Route path={url + "/appointment-add"} exact component={AppointmentAdd} />
                            <Route path={url + "/my-appointments"} exact component={ClientAppointmentList} />
                            {/* <Route path={url + "/choose-package"} exact component={ChoosePoolPackage} /> */}
                            <Route path={url + "/payment"} exact component={Payment} />
                            <Route exact path={url + "/home"} component={ClientHomePage} />
                            <Route exact path={url} component={ClientHomePage} />
                        </div>
                    </div>
                </YTSwitch>
            </main>
        </div>
    )
}
export default React.memo(ClientDashboard)