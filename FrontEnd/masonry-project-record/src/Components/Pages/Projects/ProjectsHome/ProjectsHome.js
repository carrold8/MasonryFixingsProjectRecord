import React from "react";
import ProjectsTable from "../ProjectsTable/ProjectsTable";
import { ProjectsData } from "../../../../TempData/ProjectsData";



function ProjectsHome(){
    return(
        <div>            
            <ProjectsTable projectsData={ProjectsData} />
        </div>
    );

    
}
export default ProjectsHome;