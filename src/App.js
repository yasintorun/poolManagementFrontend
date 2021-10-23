import './assets/styles/App.css'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeDashboard from './layouts/HomeDashboard';
import { Route, Switch } from 'react-router';
import LoginPage from './pages/LoginPage';
import AuthDashboard from './layouts/AuthDashboard';
import SidebarExampleSidebar from './pages/TestSideBar';
import AdminDashboard from './pages/Dashboards/AdminDashboard';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth*" component={AuthDashboard} />
        <Route path="/test*" component={SidebarExampleSidebar} />
        <Route path="/12" component={AdminDashboard} />
        <Route path="" component={HomeDashboard} exact />
      </Switch>
    </div>
  );
}

export default App;
