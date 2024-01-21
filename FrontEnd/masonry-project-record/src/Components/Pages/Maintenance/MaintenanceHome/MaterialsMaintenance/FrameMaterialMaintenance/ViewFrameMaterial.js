import React, {useState} from "react";
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel, MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ApiResponseHandler from "../../../../../../MasonyFixingsAPIs/ApiResponseHandler";


export default function ViewFrameMaterial({material, getMaterialData}){

    const navigate = useNavigate();
    const [editedName, setEditedName] = useState(material.name);
    const [editing, setEditing] = useState(false);
    const [sending, setSending] = useState(false);

    const editMaterial = () => {

        setSending(true);
        const putJSON = {
            name: editedName
        }

        MaintenanceAPIs.PutFrameMaterial(material.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                setEditing(false);
                getMaterialData();
                setSending(false);
            }
        })
        .catch((err) => {
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })
    }

    const deleteFrameMaterial = () => {
        setSending(true);
        MaintenanceAPIs.DeleteFrameMaterial(material.id)
        .then((response) => {
            if(response.status === 200){
                getMaterialData();
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
        setEditedName(material.name)
    }

    const handleDelete = () => {
        if(window.confirm('Are you sure you want to delete ' + material.name + ' from Frame Materials?')){
            deleteFrameMaterial();
        }
    }

    
    if(editing){
        return(
            <tr>
                <td width={'75%'}>
                    <input value={editedName} onChange={(e) => setEditedName(e.target.value)}/>
                </td>
                <td>
                    <button disabled={sending} onClick={() => editMaterial()}><FaSave/></button>
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
                <td width={'75%'}>{material.name}</td>
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