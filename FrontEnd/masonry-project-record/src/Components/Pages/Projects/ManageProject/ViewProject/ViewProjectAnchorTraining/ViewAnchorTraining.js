import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectAPIs from '../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs';
import { Form} from 'react-bootstrap';
import DropDown from '../../../../../DropDown/DropDown';
import { MdCancel, MdDelete } from 'react-icons/md';
import { FaSave } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import {format} from 'date-fns';

export default function ViewAnchorTraining({anchorTraining, getAnchorTraining}){

    const params = useParams();
    const navigate = useNavigate();

    const [editing, setEditing] = useState(false);
    const [userID, setUserID] = useState(parseInt(anchorTraining.user.id));
    const [date, setDate] = useState(format(new Date(anchorTraining.date), 'yyyy-MM-dd'));
    const [note, setNote] = useState(anchorTraining.note);


    const editAnchorTraining = () => {

        const putJSON = {
            user_id: userID,
            date: date,
            note: note
        }
        ProjectAPIs.PutProjectAnchorTraining(params.ProjectID, anchorTraining.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                getAnchorTraining(params.ProjectID);
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

    const deleteAnchorTraining = () => {

        ProjectAPIs.DeleteProjectAnchorTraining(params.ProjectID, anchorTraining.id)
        .then((response) => {
            if(response.status === 200){
                getAnchorTraining(params.ProjectID);
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
        setUserID(anchorTraining.user.id);
        setDate(anchorTraining.date);
        setNote(anchorTraining.note);
        setEditing(false);
    }

    const handleDelete = () => {
        if(window.confirm('Are you sure you wish to delete this anchor training?')){
            deleteAnchorTraining();
        }
    }


    if(editing){
        return(
            <tr>
                <td>
                    <DropDown.Users value={userID} onChange={(e) => setUserID(e.target.value)}/>
                </td>
                <td>
                    <Form.Control required type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                </td>
                <td>
                    <Form.Control value={note} onChange={(e) => setNote(e.target.value)} />
                </td>
                <td>
                    <button onClick={() => editAnchorTraining()}><FaSave/></button>
                </td>
                <td>
                    <button onClick={() => handleCancel()}><MdCancel/></button>
                </td>
            </tr>
        )
    }
    else{
        return(
            <tr>
                <td>{anchorTraining.user.first_name} {anchorTraining.user.last_name}</td>
                <td>
                    {format( new Date(anchorTraining.date), 'yyyy-MM-dd')}
                </td>
                <td>
                    {anchorTraining.note}
                </td>
                <td>
                    <button onClick={() => handleDelete()}><MdDelete/></button>
                </td>
                <td>
                    <button onClick={() => setEditing(true)}><AiFillEdit/></button>
                </td>
            </tr>
        )
    }


}