import React, { useState } from "react";
import './ViewTask.css';
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { FaChevronDown, FaChevronUp, FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import TaskTypeMaintenance from "./TaskTypeMaintenance/TaskTypeMaintenance";
import { useNavigate } from "react-router-dom";

export default function ViewTask({task, getTaskData}){

    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState(task.name);
    const [showTaskTypes, setShowTaskTypes] = useState(false);


    const handleCancel = () => {
        setEditing(false);
        setEditedName(task.name);
    }

    const handleEdited = () => {
        setEditing(false);
        getTaskData();
    }


    const editTask = () => {

        const putJSON = {
            name: editedName
        }
        MaintenanceAPIs.PutTask(task.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                handleEdited();
            }
        })
        .catch((err) => {
            console.log(err)
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
                else{
                    window.alert(err.response.data.message)
                }
            }
        })

    }

    return(
        <div className='task-maintenance-container'>
            {editing ? 
                <div className="body">
                    <input value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                    <span>Stage: {task.stage_id}</span>
                    <span onClick={() => handleCancel()}><MdCancel/></span>
                    <span onClick={() => editTask()}><FaSave/></span>
                </div>
                :
                <div className="body">
                    <h4>{task.name}</h4>
                    <span>Stage: {task.stage_id}</span>
                    <span onClick={() => setEditing(!editing)}><AiFillEdit/></span>
                    <span onClick={() => setShowTaskTypes(!showTaskTypes)}>
                        {showTaskTypes ? <FaChevronUp/> : <FaChevronDown/>}
                    </span>
                </div>
            }

            <div className={showTaskTypes ? 'task-types active' : 'task-types'}>
                <TaskTypeMaintenance taskID={task.id} />
            </div>

        </div>
    )

}