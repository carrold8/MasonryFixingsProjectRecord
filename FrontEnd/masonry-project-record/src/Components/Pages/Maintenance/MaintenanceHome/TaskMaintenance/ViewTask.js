import React, { useState } from "react";
import './ViewTask.css';
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { FaChevronDown, FaChevronUp, FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel, MdDelete } from "react-icons/md";
import TaskTypeMaintenance from "./TaskTypeMaintenance/TaskTypeMaintenance";
import { useNavigate } from "react-router-dom";
import ApiResponseHandler from "../../../../../MasonyFixingsAPIs/ApiResponseHandler";

export default function ViewTask({task, getTaskData}){

    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
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
        setSending(false);
    }


    const editTask = () => {

        setSending(true);
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
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })
    }

    const deleteTask = () => {
        setSending(true);
        MaintenanceAPIs.DeleteTask(task.id)
        .then((response) => {
            if(response.status === 200){
                getTaskData();
                setSending(false);
            }
        })
        .catch((err) => {
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })
    }

    const handleDelete = () => { 
        if(window.confirm('Are you sure you want to permanently delete ' + task.name + '?')){
            deleteTask();
        }
    }

    return(
        <div className='task-maintenance-container'>
            {editing ? 
                <div className="body">
                    <input value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                    <div>Stage: {task.stage_id}</div>
                    <div><button disabled={sending} onClick={() => handleCancel()}><MdCancel/></button></div>
                    <div><button disabled={sending} onClick={() => editTask()}><FaSave/></button></div>
                    <div>
                        <span onClick={() => setShowTaskTypes(!showTaskTypes)}>
                            {showTaskTypes ? <FaChevronUp/> : <FaChevronDown/>}
                        </span>
                    </div>
                </div>
                :
                <div className="body">
                    <h4>{task.name}</h4>
                    <span>Stage: {task.stage_id}</span>
                    <div><button disabled={sending} onClick={() => handleDelete()}><MdDelete/></button></div>
                    <div><button disabled={sending} onClick={() => setEditing(!editing)}><AiFillEdit/></button></div>
                    <div><span onClick={() => setShowTaskTypes(!showTaskTypes)}>
                        {showTaskTypes ? <FaChevronUp/> : <FaChevronDown/>}
                    </span>
                    </div>
                </div>
            }

            <div className={showTaskTypes ? 'task-types active' : 'task-types'}>
                <TaskTypeMaintenance taskID={task.id} />
            </div>

        </div>
    )

}