import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import PrivateRoute from './Components/Navigation/PrivateRoute/PrivateRoute';
import LogIn from './Components/Pages/LogIn/LogIn';

function App() {
  return (
    <Router>
        <Routes>
          {/* Protected Route */}
          <Route element={<PrivateRoute/>}>
            <Route exact path='/home' element={<Home/>} />
          </Route>
          {/* Public Pages */}
          <Route exact path='/' element={<LogIn/>} />

        </Routes>


      </Router>
  );
}

export default App;
