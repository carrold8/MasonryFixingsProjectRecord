import React, { useEffect, useState } from 'react';
import DisplayTaskProducts from './DisplayTaskProducts/DisplayTaskProducts';
import axios from 'axios';
import './ProjectTask.css';

export default function ProjectTask({projectTaskID}){

    const [taskInfo, setTaskInfo] = useState();
    const [loading, setLoading] = useState(false);
    const [showProducts, setShowProducts] = useState(false);

    // Use taskID to make an API call to get the ProjectTask

    const getProjectTaskInfo = (projectTaskID) => {

        axios.get('http://localhost:8080/project-task/' + projectTaskID)
        .then((taskInfo) => {
            setTaskInfo(taskInfo.data);
            setLoading(false);
            
        })
        .catch((err) => {
            console.log(err);
        })
    } 


    useEffect(()  => {
        getProjectTaskInfo(projectTaskID);
    }, [projectTaskID])

    if(loading){
        return(
            <div>Loading...</div>
        )
    }


    else{
        return(
            <div className='project-task-container'>
                <div className='project-task-line' onClick={() => setShowProducts(!showProducts)} >

                    <div>{taskInfo?.task.name ?? '' }</div>
                    <div>{taskInfo?.company.name ?? ''}</div>
                    <div>{taskInfo?.task_type.name ?? ''}</div>
                    <div>{taskInfo?.approx_val ?? ''}</div>

                </div>

                {showProducts &&
                    <DisplayTaskProducts taskID={taskInfo.id} />
                }

            </div>
        )
    }
}
