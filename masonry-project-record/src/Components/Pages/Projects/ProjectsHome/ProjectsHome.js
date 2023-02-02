import React from "react";
import {Card} from 'react-bootstrap';
import ProjectsTable from "../ProjectsTable/ProjectsTable";
import { ProjectsData } from "../../../../TempData/ProjectsData";



function ProjectsHome(){
    return(
        <div>
            <Card style={{marginLeft: '1%', marginRight: '1%', borderColor: 'orange'}}>
                <Card.Body>
                    <h1>Projects Home</h1>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                        <ProjectsTable projectsData={ProjectsData} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );

    
}
export default ProjectsHome;