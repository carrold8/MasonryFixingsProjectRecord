import React, { useState } from "react";
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ViewEnvelopeMaterial({material, getMaterialData}){

    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [editedName, setEditedName] = useState(material.name);
    const [editing, setEditing] = useState(false);

    const editMaterial = () => {

        setSending(true);
        const putJSON = {
            name: editedName
        }

        MaintenanceAPIs.PutEnvelopeMaterial(material.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                setEditing(false);
                getMaterialData();
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
        setEditedName(material.name)
    }

    
    if(editing){
        return(
            <tr>
                <td width={'75%'}>
                    <input value={editedName} onChange={(e) => setEditedName(e.target.value)}/>
                </td>
                <td>
                    <button disabled={sending} onClick={() => handleCancel()}><MdCancel/></button>
                </td>
                <td>
                    <button disabled={sending} onClick={() => editMaterial()}><FaSave/></button>
                </td>
            </tr>
        )
    }
    else{
        return(
            <tr>
                <td width={'75%'}>{material.name}</td>
                <td>
                    <button onClick={() => setEditing(true)}><AiFillEdit/></button>
                </td>
            </tr>
        )
    }
}