import React from "react";
import { Outlet } from "react-router-dom";
import './Projects.css';


function Projects(){

    return(

        <div className="project-display">
            <h1>Projects</h1>
            <Outlet/>
        </div>

    );

}
export default Projects;