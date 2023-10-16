import React, { useEffect, useState } from 'react'
import ProjectTask from './ProjectTask/ProjectTask'
import axios from 'axios'
import AddProjectTask from './AddProjectTask';

export default function DisplayProjectTasks({projectID}){

    const [stageID, setStageID] = useState(0);
    const [addNew, setAddNew] = useState(false);

    //use projectId to make a call to get all tasks associated with the project.


    const [projectTasks, setProjectTasks] = useState([]);

    const getProjectTasks = (projectID) => {

        axios.get('http://localhost:8080/project/' + projectID +'/tasks')
        .then((projectTasks) => {
            setProjectTasks(projectTasks.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleAddNew = () => {
        setAddNew(false);
        getProjectTasks(projectID);
    }


    useEffect(() => {
        getProjectTasks(projectID);
    }, [projectID]);

    return(
        <div>
            <select value={stageID} onChange={(e) => {
                setStageID(e.target.value)
            }}>
                <option value={0}>Stage</option>
                <option value={1}>Stage 1</option>
                <option value={2}>Stage 2</option>
                <option value={3}>Stage 3</option>
                <option value={4}>Stage 4</option>
            </select>

            <span onClick={() => setAddNew(!addNew)}>Add</span>


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

        {addNew && <AddProjectTask projectID={projectID} handleAddNew={handleAddNew} />}



        </div>
    )

}