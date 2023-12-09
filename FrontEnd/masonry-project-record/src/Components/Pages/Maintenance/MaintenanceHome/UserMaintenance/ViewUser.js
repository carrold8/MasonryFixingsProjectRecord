import React, { useState }  from "react";
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import DropDown from "../../../../DropDown/DropDown";
import {Form} from 'react-bootstrap';

export default function ViewUser({user, getUserData}){

    const [editing, setEditing] = useState(false);

    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [userName, setUserName] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [role, setRole] = useState(user.role);

    const [invalidUserName, setInvalidUserName] = useState(false);


    const editUser = () => {

        const putJSON = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            role: role,
            username: userName
        }

        MaintenanceAPIs.PutUser(user.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                getUserData();
                setEditing(false);
            }
        })
        .catch((err) => {
            if(err.response.status === 409){
                setInvalidUserName(true);
            }
        })
    }


    const handleCancel = () => {
        setEditing(false);
        setFirstName(user.first_name);
        setFirstName(user.last_name);
        setFirstName(user.email);
        setFirstName(user.role);
        setUserName(user.username);
    }

    if(editing){
        return(
            <tr>
                <td>
                    <Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </td>
                <td>
                    <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </td>
                <td>
                    <Form.Control value={userName} isInvalid={invalidUserName} onChange={(e) => setUserName(e.target.value)}/>
                </td>
                <td>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </td>
                <td>
                    <DropDown.Role value={role} onChange={(e) => setRole(e.target.value)}/>
                </td>
                <td>
                    <button onClick={() => handleCancel()}><MdCancel/></button>
                </td>
                <td>
                    <button onClick={() => editUser()}><FaSave/></button>
                </td>
            </tr>
        )
    }
    return(
        <tr>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
                <button onClick={() => setEditing(true)}><AiFillEdit/></button>
            </td>
        </tr>
    )

}