import React, {useState} from "react";
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function ViewFrameMaterial({material, getMaterialData}){

    const navigate = useNavigate();
    const [editedName, setEditedName] = useState(material.name);
    const [editing, setEditing] = useState(false);

    const editMaterial = () => {

        const putJSON = {
            name: editedName
        }

        MaintenanceAPIs.PutFrameMaterial(material.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                setEditing(false);
                getMaterialData();
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
        setEditedName(material.name)
    }

    
    if(editing){
        return(
            <tr>
                <td width={'75%'}>
                    <input value={editedName} onChange={(e) => setEditedName(e.target.value)}/>
                </td>
                <td>
                    <span onClick={() => handleCancel()}><MdCancel/></span>
                </td>
                <td>
                    <span onClick={() => editMaterial()}><FaSave/></span>
                </td>
            </tr>
        )
    }
    else{
        return(
            <tr>
                <td width={'75%'}>{material.name}</td>
                <td>
                    <span onClick={() => setEditing(true)}><AiFillEdit/></span>
                </td>
            </tr>
        )
    }

}