import React from "react";
import './ViewProject.css';
import ViewProjectInfo from "./ViewProjectInfo/ViewProjectInfo";
import ViewProjectMaterials from "./ViewProjectMaterials/ViewProjectMaterials";
import ViewProjectContacts from "./ViewProjectContacts/ViewProjectContacts";
import ViewProjectInduction from "./ViewProjectInduction/ViewProjectInduction";
import ViewProjectAnchorTraining from "./ViewProjectAnchorTraining/ViewProjectAnchorTraining";
import ViewProjectTasks from "./ViewProjectTasks/ViewProjectTasks";

import { useParams } from "react-router-dom";

export default function ViewProject(){
    
    const params = useParams();

        return(
            <div className="project-page">

                <ViewProjectInfo />

                <ViewProjectTasks projectID={params.ProjectID} />

                <ViewProjectMaterials />

                <ViewProjectContacts/>

                <ViewProjectInduction/>

                <ViewProjectAnchorTraining/>

                
                {/* 
                


                <h3>Calendar</h3>
                <div>Calendar based off times of the tasks</div> */}
            </div>
        )
    // }

}