import React, { useState }  from "react";
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel, MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import DropDown from "../../../../DropDown/DropDown";
import {Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import ApiResponseHandler from "../../../../../MasonyFixingsAPIs/ApiResponseHandler";

export default function ViewUser({user, getUserData}){

    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [editing, setEditing] = useState(false);

    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [userName, setUserName] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [role, setRole] = useState(user.role);

    const [invalidUserName, setInvalidUserName] = useState(false);


    const editUser = () => {

        setSending(true);
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
                setInvalidUserName(false);
                setEditing(false);
                setSending(false);
            }
        })
        .catch((err) => {
            console.log(err)
            setSending(false);
            ApiResponseHandler(err.response, navigate);
            if(err.response.status === 409){
                setInvalidUserName(true);
            }
        })
    }

    const deleteUser = () => {
        setSending(true);
        MaintenanceAPIs.DeleteUser(user.id)
        .then((response) => {
            if(response.status === 200){
                getUserData();
                setSending(false);
            }
        })
        .catch((err) => {
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })
    }
    const handleEdit = () => {
        if(user.role === 'Management' && role !== 'Management'){
            if(window.confirm('Are you sure you want to remove ' + user.username + ' from a Management role?')){
                editUser();
            }
            else{
                handleCancel();
            }
        }
        if(user.role !== 'Management' && role === 'Management'){
            if(window.confirm('Are you sure you wish to add ' + user.username + ' to a Management role')){
                editUser();
            }
            else{
                handleCancel();
            }
        }
        else{
            editUser();
        }
    }

    const handleDelete = () => {
        if(window.confirm('Are you sure you want to delete ' + user.username + 'from the system?')){
            deleteUser();
        }
    }

    const handleCancel = () => {
        setEditing(false);
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmail(user.email);
        setRole(user.role);
        setUserName(user.username);
        setInvalidUserName(false);
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
                    <button disabled={sending} onClick={() => handleCancel()}><MdCancel/></button>
                </td>
                <td>
                    <button disabled={sending} onClick={() => handleEdit()}><FaSave/></button>
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
                <button disabled={sending} onClick={() => handleDelete()}><MdDelete/></button>
            </td>
            <td>
                <button disabled={sending} onClick={() => setEditing(true)}><AiFillEdit/></button>
            </td>
        </tr>
    )

}