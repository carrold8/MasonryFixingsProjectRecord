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
import SearchContractors from './Components/Pages/Maintenance/MaintenanceContractors/SearchContractors/SearchContractors';
import ViewContractor from './Components/Pages/Maintenance/MaintenanceContractors/ViewContractor/ViewContractor';
import SearchEngineers from './Components/Pages/Maintenance/MaintenanceEngineer/SearchEngineers/SearchEngineers';
import ViewEngineer from './Components/Pages/Maintenance/MaintenanceEngineer/ViewEngineer/ViewEngineer';
import SearchArchitects from './Components/Pages/Maintenance/MaintenanceArchitecture/SearchArchitects/SearchArchitects';
import ViewArchitect from './Components/Pages/Maintenance/MaintenanceArchitecture/ViewArchitect/ViewArchitect';


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
                <Route path='search-contractors'>
                  <Route index element={<SearchContractors/>} />
                  <Route path='view-contractor'>
                      <Route index element={<ViewContractor/>} />
                  </Route>
                </Route>

                <Route path='search-engineers'>
                  <Route index element={<SearchEngineers/>} />
                  <Route path='view-engineer'>
                      <Route index element={<ViewEngineer/>} />
                  </Route>
                </Route>

                <Route path='search-architects'>
                  <Route index element={<SearchArchitects/>} />
                  <Route path='view-architect'>
                      <Route index element={<ViewArchitect/>} />
                  </Route>
                </Route>

            </Route>


            <Route path='/project-setup' element={<ProjectSetUp/>} />
          </Route>
          
          {/* Public Pages */}
          <Route exact path='/login' element={<LogIn/>} />

        </Routes>


      </Router>
  );
}

export default App;
