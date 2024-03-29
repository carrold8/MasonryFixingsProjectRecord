import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DropDown from '../../../../../../DropDown/DropDown';
import ProjectAPIs from '../../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs';
import { useNavigate } from 'react-router-dom';


export default function AddAnchorTraining({projectID, handleAddNew}){

    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [userID, setUserID] = useState('');
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');

    const handleSubmit = () => {
        // e.stopPropagation();
        // e.preventDefault();
        setSending(true);

        const postJSON = {
            user_id: userID,
            date: date,
            note: note
        }

        if(userID !== '' && date !== ''){
            ProjectAPIs.PostProjectAnchorTraining(projectID, postJSON)
            .then((response) => {
                if(response.status ===200){
                    handleAddNew(projectID);
                    setSending(false);
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
                        setSending(false);
                    }
                }
            })
        }

        
    }

    return(
            <tr>
                <td>
                <DropDown.Users required value={userID} onChange={(e) => setUserID(e.target.value)} />
                </td>
                <td>
                    <Form.Control required type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                </td>
                <td>
                    <Form.Control value={note} onChange={(e) => setNote(e.target.value)} />
                </td>
                <td>
                    <Button disabled={sending} onClick={() => handleSubmit()}>{sending? 'Adding...': 'Add'}</Button>
                </td>

            </tr>
    )

}