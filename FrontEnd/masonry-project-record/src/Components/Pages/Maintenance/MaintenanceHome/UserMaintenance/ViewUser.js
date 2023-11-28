import React, { useState }  from "react";
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";

export default function ViewUser({user, getUserData}){

    const [editing, setEditing] = useState(false);
    const [userName, setUserName] = useState(user.name);

    const editUser = () => {

        const putJSON = {
            name: userName
        }

        MaintenanceAPIs.PutUser(user.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                getUserData();
                setEditing(false);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }


    const handleCancel = () => {
        setEditing(false);
        setUserName(user.name);
    }

    if(editing){
        return(
            <tr>
                <td>
                    <input value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </td>
                <td>
                    <button onClick={() => handleCancel()}>Cancel</button>
                </td>
                <td>
                    <button onClick={() => editUser()}>Save</button>
                </td>
            </tr>
        )
    }
    return(
        <tr>
            <td>{user.name}</td>
            <td>
                <button onClick={() => setEditing(true)}>Edit</button>
            </td>
        </tr>
    )

}