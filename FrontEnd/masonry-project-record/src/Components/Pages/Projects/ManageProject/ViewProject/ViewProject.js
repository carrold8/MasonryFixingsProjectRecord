import React, { useEffect, useState } from "react";
import './ViewProject.css';
import ViewProjectInfo from "./ViewProjectInfo/ViewProjectInfo";
import ViewProjectMaterials from "./ViewProjectMaterials/ViewProjectMaterials";
import ViewProjectContacts from "./ViewProjectContacts/ViewProjectContacts";
import ViewProjectInduction from "./ViewProjectInduction/ViewProjectInduction";
import ViewProjectAnchorTraining from "./ViewProjectAnchorTraining/ViewProjectAnchorTraining";
import ViewProjectTasks from "./ViewProjectTasks/ViewProjectTasks";

import { useNavigate, useParams } from "react-router-dom";
import ProjectAPIs from "../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";

export default function ViewProject(){
    
    const params = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const getProject = () => {
        ProjectAPIs.GetProject(params.ProjectID)
        .then((response) => {
            if(response.status === 200){
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
            if(err.response.status === 404){
                navigate('/project');
            }
        })
    }
    
    useEffect(() => {
        getProject();
    }, []);

    if(loading){
        return(<h3>Finding Project...</h3>);
    }
    else{
        return(
            <div className="project-page">

                <ViewProjectInfo />

                <ViewProjectTasks />

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

}