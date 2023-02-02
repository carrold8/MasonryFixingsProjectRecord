import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import PrivateRoute from './Components/Navigation/PrivateRoute/PrivateRoute';
import LogIn from './Components/Pages/LogIn/LogIn';
import ProjectSetUp from './Components/Pages/ProjectSetUp/ProjectSetUp';
import FirstStage from './Components/Pages/FirstStage/FirstStage';
import Projects from './Components/Pages/Projects/Projects';
import ProjectStages from './Components/Pages/Projects/ProjectStages/ProjectStages';
import ProjectsHome from './Components/Pages/Projects/ProjectsHome/ProjectsHome';


function App() {
  return (
    <Router>
        <Routes>
          {/* Protected Route */}
          <Route element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>} />

            {/* Projects */}
            <Route path="/projects" element={<Projects/>}>
              <Route index element={<ProjectsHome/>} />
              <Route path="stages" >
                <Route index element={<ProjectStages/>} />
                <Route path='1'>
                  <Route index element={<FirstStage/>} />
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
