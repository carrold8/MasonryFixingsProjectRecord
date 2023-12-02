import React, { useEffect, useState } from 'react';
import ProjectTask from './ProjectTask/ProjectTask';
import AddProjectTask from './AddProjectTask';
import ProjectAPIs from '../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs';
import { useParams } from 'react-router-dom';
import './ViewProjectTasks.css';
import StageSelectionTabs from '../../../../../StageSelectionTabs/StageSelectionTabs';

export default function ViewProjectTasks(){

    const params = useParams();

    const [stageID, setStageID] = useState('');
    const [addNew, setAddNew] = useState(false);

    const [projectTasks, setProjectTasks] = useState([]);

    const getProjectTasks = (projectID) => {

        ProjectAPIs.GetProjectTasks(projectID)
        .then((projectTasks) => {
            setProjectTasks(projectTasks.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleAddNew = () => {
        setAddNew(false);
        getProjectTasks(params.ProjectID);
    }


    useEffect(() => {
        getProjectTasks(params.ProjectID);
    }, [params.ProjectID]);

    return(
        <div className='project-tasks-container'>
            <h3>Tasks</h3>
            <StageSelectionTabs value={stageID} setStageValue={setStageID} />

            <span onClick={() => setAddNew(!addNew)}>Add</span>

            <div className='project-tasks'>
            {stageID > 0 ? 
            
            projectTasks.filter((task) => parseInt(task.task.stage_id) === parseInt(stageID))
            .map((task) => {
                    return(
                        <ProjectTask key={task.id} projectTaskID={task.id}/>
                    )
                }
                
            )
                :
                projectTasks.map((task) => {
                    return(
                        <ProjectTask key={task.id} projectTaskID={task.id}/>
                    )
                })
        }
        </div>

        {addNew && <AddProjectTask handleAddNew={handleAddNew} />}



        </div>
    )

}