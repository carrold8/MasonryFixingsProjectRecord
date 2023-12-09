import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectAPIs from '../../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs';
import { Form} from 'react-bootstrap';
import DropDown from '../../../../../../DropDown/DropDown';
import { MdCancel } from 'react-icons/md';
import { FaSave } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import {format} from 'date-fns';

export default function ViewInduction({induction, getInductionData}){

    const params = useParams();

    const [editing, setEditing] = useState(false);
    const [userID, setUserID] = useState(parseInt(induction.user.id));
    const [date, setDate] = useState(format(new Date(induction.date), 'yyyy-MM-dd'));



    const editInduction = () => {

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
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    const handleCancel = () => {
        setUserID(induction.user.id);
        setDate(induction.date);
        setEditing(false);
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
                    <span onClick={() => handleCancel()}><MdCancel/></span>
                </td>
                <td>
                    <span onClick={() => editInduction()}><FaSave/></span>
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
                    <span onClick={() => setEditing(true)}><AiFillEdit/></span>
                </td>
            </tr>
        )
    }


}