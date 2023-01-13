import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import PrivateRoute from './Components/Navigation/PrivateRoute/PrivateRoute';
import LogIn from './Components/Pages/LogIn/LogIn';
import ProjectSetUp from './Components/Navigation/ProjectSetUp/ProjectSetUp';


function App() {
  return (
    <Router>
        <Routes>
          {/* Protected Route */}
          <Route element={<PrivateRoute/>}>
            <Route exact path='/home' element={<Home/>} />
            <Route path='/project-setup' element={<ProjectSetUp/>} />
          </Route>
          
          {/* Public Pages */}
          <Route exact path='/' element={<LogIn/>} />

        </Routes>


      </Router>
  );
}

export default App;
