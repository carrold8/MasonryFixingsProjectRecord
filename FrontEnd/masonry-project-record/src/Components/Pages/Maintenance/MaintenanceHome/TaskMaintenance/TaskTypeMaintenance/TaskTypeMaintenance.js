import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateTaskType from "./CreateTaskType";

export default function TaskTypeMaintenance({taskID}){


    const [taskTypeData, setTaskTypeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addNew, setAddNew] = useState(false);

    const getTaskTypeData = () => {

        axios.get('http://localhost:8080/lookup/task-type')
        .then((response) => {
            if(response.status === 200){
                setTaskTypeData(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleAddNew = () => {
        setAddNew(false);
        getTaskTypeData();
    }


    useEffect(() => {
        getTaskTypeData();
    }, [])


    if(loading){
        return(
            <div>Loading Task Type Data...</div>
        )
    }
    else{
        return(
            <div style={{border: '1px solid black'}}>
                <h3>Task Types</h3>
                <span onClick={() => setAddNew(!addNew)}>Add</span>
                {
                taskTypeData.filter((type) => {return type.task_id === parseInt(taskID)})
                .map((filteredTask) => {
                    return(
                        <div key={filteredTask.id}>
                            <span>{filteredTask.name}</span> 
                            <span>{filteredTask.task_id}</span>
                        </div>
                    )
                })

                }

                {addNew && <CreateTaskType taskID={taskID} handleAddNew={handleAddNew} />}
            

            </div>
        )
    }

    
}