import React, {useState} from "react";
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";


export default function ViewTaskType({taskType, getTaskTypeData}){

    const [editing, setEditing] = useState(false);
    const [taskTypeName, setTaskTypeName] = useState(taskType.name);

    const editTaskType = () => {

        const putJSON = {
            name: taskTypeName
        }

        MaintenanceAPIs.PutTaskType(taskType.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                getTaskTypeData();
                setEditing(false);
            }
        })
        .catch((err) => {
            console.log(err);
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
                    <span onClick={() => handleCancel()}><MdCancel/></span>
                </td>
                <td>
                    <span onClick={() => editTaskType()}><FaSave/></span>
                </td>
            </tr>
        )
    }
    else{
        return(
            <tr>
                <td>{taskType.name}</td>
                <td>
                    <span onClick={() => setEditing(true)}><AiFillEdit/></span>
                </td>
            </tr>
        )
    }
}