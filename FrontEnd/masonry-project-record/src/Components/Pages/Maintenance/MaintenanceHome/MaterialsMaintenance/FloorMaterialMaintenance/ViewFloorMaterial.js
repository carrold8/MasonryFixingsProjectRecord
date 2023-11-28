import React, {useState} from "react";
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";

export default function ViewFloorMaterial({material, getMaterialData}){


    const [editedName, setEditedName] = useState(material.name);
    const [editing, setEditing] = useState(false);

    const editMaterial = () => {

        const putJSON = {
            name: editedName
        }

        MaintenanceAPIs.PutFloorMaterial(material.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                setEditing(false);
                getMaterialData();
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
                <td>
                    <input value={editedName} onChange={(e) => setEditedName(e.target.value)}/>
                </td>
                <td>
                    <button onClick={() => handleCancel()}>Cancel</button>
                </td>
                <td>
                    <button onClick={() => editMaterial()}>Save</button>
                </td>
            </tr>
        )
    }
    else{
        return(
            <tr>
                <td>{material.name}</td>
                <td>
                    <button onClick={() => setEditing(true)}>Edit</button>
                </td>
            </tr>
        )
    }

}