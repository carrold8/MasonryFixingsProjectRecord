import React, { useEffect, useState } from "react";
import DisplayProjectTasks from "../../../DisplayProjectTasks/DisplayProjectTasks";
import ViewProjectInfo from "./ViewProjectInfo/ViewProjectInfo";
import axios from "axios";
import { useParams } from 'react-router-dom';
import ViewProjectContacts from "./ViewProjectContacts/ViewProjectContacts";
import ViewProjectInduction from "./ViewProjectInduction/ViewProjectInduction";
import ViewProjectAnchorTraining from "./ViewProjectAnchorTraining/ViewProjectAnchorTraining";

export default function ViewProject(){

    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [projectInfo, setProjectInfo] = useState();
    
    const getProjectInfo = (projectID) => {
        axios.get('http://localhost:8080/project/' + projectID )
        .then((project) => {
            setProjectInfo(project.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getProjectInfo(params.ProjectID);
    }, [params.ProjectID])

    if(loading){
        return(
            <div>Loading</div>
        )
    }
    else{
    
        return(
            <div>

                <ViewProjectInfo projectInfo={projectInfo}/>
                
                <ViewProjectContacts projectInfo={projectInfo}/>

                <ViewProjectInduction projectInfo={projectInfo} />

                <ViewProjectAnchorTraining projectInfo={projectInfo} />

                <h3>Tasks</h3>
                <DisplayProjectTasks projectID={projectInfo.id} />

                <h3>Calendar</h3>
                <div>Calendar based off times of the tasks</div>
            </div>
        )
    }

}