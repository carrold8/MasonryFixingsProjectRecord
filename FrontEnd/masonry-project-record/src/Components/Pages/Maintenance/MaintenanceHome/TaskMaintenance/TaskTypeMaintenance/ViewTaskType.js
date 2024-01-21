import React, {useState} from "react";
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


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
            console.log(err)
            setSending(false);
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


    const handleCancel = () => {
        setEditing(false);
        setTaskTypeName(taskType.name);
    }

    if(editing){
        return(
            <tr>
                <td>
                    <input value={taskTypeName} onChange={(e) => setTaskTypeName(e.target.value)}/>
                </td>
                <td>
                    <button disabled={sending} onClick={() => handleCancel()}><MdCancel/></button>
                </td>
                <td>
                    <button disabled={sending} onClick={() => editTaskType()}><FaSave/></button>
                </td>
            </tr>
        )
    }
    else{
        return(
            <tr>
                <td>{taskType.name}</td>
                <td>
                    <button onClick={() => setEditing(true)}><AiFillEdit/></button>
                </td>
            </tr>
        )
    }
}