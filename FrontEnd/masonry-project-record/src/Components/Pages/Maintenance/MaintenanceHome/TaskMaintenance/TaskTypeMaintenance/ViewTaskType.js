import React, {useState} from "react";
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel, MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ApiResponseHandler from "../../../../../../MasonyFixingsAPIs/ApiResponseHandler";


export default function ViewTaskType({taskID, taskType, getTaskTypeData}){

    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [sending, setSending] = useState(false);
    const [taskTypeName, setTaskTypeName] = useState(taskType.name);

    const editTaskType = () => {
        setSending(true);
        const putJSON = {
            name: taskTypeName
        }

        MaintenanceAPIs.PutTaskType(taskType.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                getTaskTypeData(taskID);
                setEditing(false);
                setSending(false);
            }
        })
        .catch((err) => {
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })
    }

    const deleteTaskType = () => {
        setSending(true);
        MaintenanceAPIs.DeleteTaskType(taskType.id)
        .then((response) => {
            if(response.status === 200){
                getTaskTypeData(taskID);
                setSending(false);
            }
        })
        .catch((err) => {
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })

    }

    const handleCancel = () => {
        setEditing(false);
        setTaskTypeName(taskType.name);
    }

    const handleDelete = () => {
        if(window.confirm('Are you sure you want to permanently delete ' + taskType.name + '?')){
            deleteTaskType();
        }
    }

    if(editing){
        return(
            <tr>
                <td width={'65%'}>
                    <input value={taskTypeName} onChange={(e) => setTaskTypeName(e.target.value)}/>
                </td>
                <td>
                    <button disabled={sending} onClick={() => editTaskType()}><FaSave/></button>
                </td>
                <td>
                    <button disabled={sending} onClick={() => handleCancel()}><MdCancel/></button>
                </td>
            </tr>
        )
    }
    else{
        return(
            <tr>
                <td width={'65%'}>{taskType.name}</td>
                <td>
                    <button disabled={sending} onClick={() => handleDelete()}><MdDelete/></button>
                </td>
                <td>
                    <button disabled={sending} onClick={() => setEditing(true)}><AiFillEdit/></button>
                </td>
            </tr>
        )
    }
}