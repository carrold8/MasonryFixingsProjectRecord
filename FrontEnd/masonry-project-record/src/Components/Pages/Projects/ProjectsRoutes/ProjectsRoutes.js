import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectsHome from "../ProjectsHome/ProjectsHome";
import ViewProject from "../ManageProject/ViewProject/ViewProject";
import CreateProject from "../ManageProject/CreateProject/CreateProject";

export default function ProjectsRoutes(){

    return(
        <Routes>
             <Route index element={<ProjectsHome/>} />
              <Route path=':ProjectID'>
                <Route index element={<ViewProject/>} />
              </Route>
              <Route path='create'>
                <Route index element={<CreateProject/>} />
              </Route>
        </Routes>
        
    )
}