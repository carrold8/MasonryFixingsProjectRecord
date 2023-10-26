import axios from "axios";
import React, { useEffect, useState } from "react";
import DropDown from "../../../../DropDown/DropDown";
import CreateTask from "./CreateTask";
import TaskTypeMaintenance from "./TaskTypeMaintenance/TaskTypeMaintenance";

export default function TaskMaintenance(){


    const [taskData, setTaskData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addNew, setAddNew] = useState(false);
    const [stage, setStage] = useState('');

    const getTaskData = () => {

        axios.get('http://localhost:8080/lookup/task')
        .then((response) => {
            if(response.status === 200){
                setTaskData(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleAddNew = () => {
        setAddNew(false);
        getTaskData();
    }


    useEffect(() => {
        getTaskData();
    }, [])


    if(loading){
        return(
            <div>Loading Task Data...</div>
        )
    }
    else{
        return(
            <div>
                <h3>Tasks</h3>
                <span onClick={() => setAddNew(!addNew)}>Add</span>
                <DropDown.Stage size='sm' value={stage} onChange={(e) => setStage(e.target.value)} />

                {stage === '' ? 
                
                taskData.map((task) => {
                    return(
                        <div key={task.id} style={{padding: '1rem', border: '2px solid black', margin: '0.5rem'}}>
                            <span>{task.name}</span> 
                            <span><DropDown.Stage size='sm' value={task.stage_id} disabled={true} /></span>
                            <TaskTypeMaintenance taskID={task.id} />
                        </div>
                    )
                })
                :
                taskData.filter((task) => {return task.stage_id === parseInt(stage)})
                .map((filteredTask) => {
                    return(
                        <div key={filteredTask.id} style={{padding: '1rem', border: '2px solid black', margin: '0.5rem'}}>
                            <span>{filteredTask.name}</span> 
                            <span><DropDown.Stage size='sm' value={filteredTask.stage_id} disabled={true} /></span>
                            <TaskTypeMaintenance taskID={filteredTask.id} />
                        </div>
                    )
                })

                }

                {addNew && <CreateTask handleAddNew={handleAddNew} />}
            

            </div>
        )
    }

    
}