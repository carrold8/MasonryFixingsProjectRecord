import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import PrivateRoute from './Components/Navigation/PrivateRoute/PrivateRoute';
import LogIn from './Components/Pages/LogIn/LogIn';
import ProjectSetUp from './Components/Pages/ProjectSetUp/ProjectSetUp';
import Projects from './Components/Pages/Projects/Projects';
import ProjectStages from './Components/Pages/Projects/ProjectStages/ProjectStages';
import ProjectsHome from './Components/Pages/Projects/ProjectsHome/ProjectsHome';
import StageOne from './Components/Pages/Projects/ProjectStages/StageOne/StageOne';
import StageTwo from './Components/Pages/Projects/ProjectStages/StageTwo/StageTwo';
import Maintenance from './Components/Pages/Maintenance/Maintenance';
import MaintenaceHome from './Components/Pages/Maintenance/MaintenanceHome/MaintenanceHome';
import Companies from './Components/Pages/Companies/Companies';


function App() {
  return (
    <Router>
        <Routes>
          {/* Protected Route */}
          <Route element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>} />

            {/* Projects */}
            <Route exact path="/projects" element={<Projects/>}>
              <Route index element={<ProjectsHome/>} />
              <Route path="stages" >
                <Route index element={<ProjectStages/>} />
                <Route path='1'>
                  <Route index element={<StageOne/>} />
                </Route>
                <Route path='2'>
                  <Route index element={<StageTwo/>} />
                </Route>
              </Route>
            </Route>

            <Route exact path='/maintenance' element={<Maintenance />}>
              <Route index element={<MaintenaceHome/>}/>
            
            </Route>

          

            <Route path='/project-setup' element={<ProjectSetUp/>} />

            <Route exact path='/companies' element={<Companies/>}/>

          </Route>

          
          
          {/* Public Pages */}
          <Route exact path='/login' element={<LogIn/>} />

        </Routes>


      </Router>
  );
}

export default App;
