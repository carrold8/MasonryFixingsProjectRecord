import React, { useState }  from "react";
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";

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
                    <span onClick={() => handleCancel()}><MdCancel/></span>
                </td>
                <td>
                    <span onClick={() => editUser()}><FaSave/></span>
                </td>
            </tr>
        )
    }
    return(
        <tr>
            <td>{user.name}</td>
            <td>
                <span onClick={() => setEditing(true)}><AiFillEdit/></span>
            </td>
        </tr>
    )

}