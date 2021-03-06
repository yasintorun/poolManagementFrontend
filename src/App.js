import './assets/styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'semantic-ui-css/semantic.min.css'
import './assets/styles/custom-theme.css'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
import HomeDashboard from './layouts/HomeDashboard';
import { Route, Switch, useHistory, useLocation } from 'react-router';
import LoginPage from './pages/LoginPage';
import AuthDashboard from './layouts/AuthDashboard';
import SidebarExampleSidebar from './pages/TestSideBar';
import { createContext, useEffect, useState } from 'react';
import PoolService from './services/poolService';
import { getAllPools, addPools, add } from './store/actions/poolActions';
import { useDispatch, useSelector, useStore, shallowEqual } from 'react-redux';
import "react-toastify/dist/ReactToastify.min.css"
import { Button } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import AdminDashboard from './layouts/AdminDashboard'
import { addPoolLanes, getAllPoolLanes } from './store/actions/poolLaneActions';
import { getAllRoles } from './store/actions/roleActions';
import { getAllUsers } from './store/actions/userActions';
import { getAllAppointments, getAllAppointmentsByUserId } from './store/actions/appointmentActions';
import _404NotFound from './pages/Errors/_404NotFound';
import _500InternalServer from './pages/Errors/_500InternalServer';
import YTSwitch from './utilities/customs/YTSwitch';
import Dashboard from './layouts/Dashboard';
import { types } from './services/localStoregeService';
import { PathRedirect, ProtectedRoute } from './utilities/customs/YTRoute';
import RoleService from './services/roleService'
import { getAllPoolPackages } from './store/actions/poolPackageActions';
import AuthService from './services/authService';
import ResetPassword from './pages/ResetPassword';
import { getAllActivities } from './store/actions/activityActions';
import { getAllActivityContents } from './store/actions/activityContentActions';
import { getAdminStatistics, getClientStatistics } from './store/actions/statisticActions';
import Spinner from './components/Spinner';
import { getUserPoolPackage } from './store/actions/userPoolPackageActions';
require('dotenv').config()



function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const auth = useSelector(state => state.auth, shallowEqual)

  useEffect(() => {


    if (!isLoaded) {
      setIsLoaded(true)
      dispatch(getAllPools)
      dispatch(getAllPoolLanes)
      dispatch(getAllPoolPackages)

      if (AuthService.isAdmin()) {
        dispatch(getAllRoles)
        dispatch(getAllUsers)
        dispatch(getAllAppointments)
        dispatch(getAllActivities)
        dispatch(getAllActivityContents)
        dispatch(getAdminStatistics)
      }
      else if (AuthService.isClient()) {
        const client = AuthService.getClient()
        dispatch(getAllAppointmentsByUserId(client.userId))
        dispatch(getClientStatistics(client.userId))
        dispatch(getUserPoolPackage(client.userId))
      }

      if (auth.data != null && !location?.pathname.startsWith("/dashboard")) {
        history.push("/dashboard")
      }

    }
  }, [auth])

  return (
    <div className="App">
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <YTSwitch>
        <ProtectedRoute path="/dashboard*" exact component={Dashboard} />
        <Route path="/auth*" exact component={AuthDashboard} />
        <Route path="/" component={HomeDashboard} />
      </YTSwitch>
    </div>
  );
}
export default App;