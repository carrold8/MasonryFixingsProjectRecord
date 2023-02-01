import React from "react";
import ProjectsTable from './ProjectsTable/ProjectsTable';
import { ProjectsData } from "../../../TempData/ProjectsData";

function Projects(){

    return(

        <div>
            <h1>Projects Page</h1>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}> 
               <ProjectsTable projectsData={ProjectsData}/>
            </div>
            
        </div>

    );

}
export default Projects;