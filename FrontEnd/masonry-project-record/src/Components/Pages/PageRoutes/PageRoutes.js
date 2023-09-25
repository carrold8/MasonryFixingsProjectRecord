import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../../Navigation/PrivateRoute/PrivateRoute";
import Home from '../Home/Home';
import Maintenance from "../Maintenance/Maintenance";
import MaintenaceHome from "../Maintenance/MaintenanceHome/MaintenanceHome";
import Companies from "../Companies/Companies";
import LogIn from '../LogIn/LogIn'
import ProjectsRoutes from "../Projects/ProjectsRoutes/ProjectsRoutes";

export default function PageRoutes(){

    return(
        <Routes>
          {/* Protected Route */}
          <Route element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>} />

            {/* Projects */}
            <Route exact path="/project/*" element={<ProjectsRoutes/>} />
              {/* <Route index element={<ProjectsHome/>} />
              <Route path=':ProjectID'>
                <Route index element={<ViewProject/>} />
              </Route>
              <Route path='create'>
                <Route index element={<CreateProject/>} />
              </Route>
            </Route> */}

            <Route exact path='/maintenance' element={<Maintenance />}>
              <Route index element={<MaintenaceHome/>}/>
            </Route>

            <Route exact path='/companies' element={<Companies/>}/>

          </Route>

          
          
          {/* Public Pages */}
          <Route exact path='/login' element={<LogIn/>} />

        </Routes>
    )
}