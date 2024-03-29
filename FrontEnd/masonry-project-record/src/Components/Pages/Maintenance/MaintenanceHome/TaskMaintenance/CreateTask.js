import React, { useState } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import DropDown from "../../../../DropDown/DropDown";
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { useNavigate } from "react-router-dom";

export default function CreateTask({handleAddNew}){

    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [stageID, setStageID] = useState('');
    const [sending, setSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setSending(true);
        const postJSON = {
            name: name,
            stage_id: parseInt(stageID)
        }

        MaintenanceAPIs.PostTask(postJSON)
        .then((response) => {
            if(response.status === 200){
                handleAddNew();
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
                    window.alert(err.response.data.message);
                    setSending(false);
                }
            }
        })
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>New Task:</Form.Label>
                <Col>
                    <Form.Control placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                </Col>
                <Col>
                    <DropDown.Stage required value={stageID} onChange={(e) => setStageID(e.target.value)} />
                </Col>
                <Col>
                    <Button disabled={sending} type='submit'>{sending ? 'Saving...':'Save'}</Button>
                </Col>
            </Form.Group>
            
        </Form>
    )
}