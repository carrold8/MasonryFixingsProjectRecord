import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import PrivateRoute from './Components/Navigation/PrivateRoute/PrivateRoute';
import LogIn from './Components/Pages/LogIn/LogIn';
import Projects from './Components/Pages/Projects/Projects';
import ProjectsHome from './Components/Pages/Projects/ProjectsHome/ProjectsHome';
import Maintenance from './Components/Pages/Maintenance/Maintenance';
import MaintenaceHome from './Components/Pages/Maintenance/MaintenanceHome/MaintenanceHome';
import Companies from './Components/Pages/Companies/Companies';
import ViewProject from './Components/Pages/Projects/ManageProject/ViewProject/ViewProject';
import CreateProject from './Components/Pages/Projects/ManageProject/CreateProject/CreateProject';


function App() {
  return (
    <Router>
        <Routes>
          {/* Protected Route */}
          <Route element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>} />

            {/* Projects */}
            <Route exact path="/project" element={<Projects/>}>
              <Route index element={<ProjectsHome/>} />
              <Route path=':ProjectID'>
                <Route index element={<ViewProject/>} />
              </Route>
              <Route path='create'>
                <Route index element={<CreateProject/>} />
              </Route>
            </Route>

            <Route exact path='/maintenance' element={<Maintenance />}>
              <Route index element={<MaintenaceHome/>}/>
            </Route>

            <Route exact path='/companies' element={<Companies/>}/>

          </Route>

          
          
          {/* Public Pages */}
          <Route exact path='/login' element={<LogIn/>} />

        </Routes>


      </Router>
  );
}

export default App;
