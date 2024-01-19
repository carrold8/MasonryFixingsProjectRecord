import React, { useState } from "react";
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ViewEmployeeType({employeeType, getEmployeeTypeData}){

    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState(employeeType.name);
    

    const editEmployeeType = () => {

        const putJSON = {
            name: editedName
        }

        MaintenanceAPIs.PutEmployeeType(employeeType.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                getEmployeeTypeData();
                setEditing(false);
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


    const handleCancel = () => {
        setEditing(false);
        setEditedName(employeeType.name);
    }

    if(editing){
        return(
            <tr>
                <td>
                    <input value={editedName} onChange={(e) => setEditedName(e.target.value)}/>
                </td>
                <td>
                    <span onClick={() => handleCancel()}><MdCancel/></span>
                </td>
                <td>
                    <span onClick={() => editEmployeeType()}><FaSave/></span>
                </td>
            </tr>
        )
    }
    return(
        <tr>
            <td>{employeeType.name}</td>
            <td>
                <span onClick={() => setEditing(true)}><AiFillEdit/></span>
            </td>
        </tr>
    )
}