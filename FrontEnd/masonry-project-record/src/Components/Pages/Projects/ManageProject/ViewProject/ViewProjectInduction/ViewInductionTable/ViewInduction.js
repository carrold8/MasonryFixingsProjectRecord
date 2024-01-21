import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectAPIs from '../../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs';
import { Form} from 'react-bootstrap';
import DropDown from '../../../../../../DropDown/DropDown';
import { MdCancel, MdDelete } from 'react-icons/md';
import { FaSave } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import {format} from 'date-fns';

export default function ViewInduction({induction, getInductionData}){

    const params = useParams();
    const navigate = useNavigate();

    const [editing, setEditing] = useState(false);
    const [sending, setSending] = useState(false);
    const [userID, setUserID] = useState(parseInt(induction.user.id));
    const [date, setDate] = useState(format(new Date(induction.date), 'yyyy-MM-dd'));



    const editInduction = () => {
        setSending(true);
        const putJSON = {
            user_id: userID,
            date: date
        }
        if(userID !== '' && date !== ''){
            ProjectAPIs.PutProjectInductionList(params.ProjectID, induction.id, putJSON)
            .then((response) => {
                if(response.status === 200){
                    getInductionData(params.ProjectID);
                    setEditing(false);
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
                        setEditing(false);
                        window.alert(err.response.data.message)
                    }
                }
            })
        }
    }

    const deleteInduction = () => {
        setSending(true);
        ProjectAPIs.DeleteProjectInductionList(params.ProjectID, induction.id)
        .then((response) => {
            if(response.status === 200){
                getInductionData(params.ProjectID);
                setEditing(false);
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
                    handleCancel();
                    window.alert(err.response.data.message)
                }
            }
        })
    }

    const handleCancel = () => {
        setUserID(induction.user.id);
        setDate(format(new Date(induction.date), 'yyyy-MM-dd'));
        setEditing(false);
    }

    const handleDelete = () => {
        if(window.confirm('Are you sure you wish to delete this induction entry?')){
            deleteInduction();
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
                    <button disabled={sending} onClick={() => editInduction()}><FaSave/></button>
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
                <td>{induction.user.first_name} {induction.user.last_name}</td>
                <td>
                    {format(new Date(induction.date), 'yyyy-MM-dd')}
                </td>
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