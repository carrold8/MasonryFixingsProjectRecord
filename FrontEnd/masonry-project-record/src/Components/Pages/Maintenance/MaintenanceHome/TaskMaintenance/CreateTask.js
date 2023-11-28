import React, { useState } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import DropDown from "../../../../DropDown/DropDown";
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";

export default function CreateTask({handleAddNew}){

    const [name, setName] = useState('')
    const [stageID, setStageID] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const postJSON = {
            name: name,
            stage_id: parseInt(stageID)
        }

        MaintenanceAPIs.PostTask(postJSON)
        .then((response) => {
            if(response.status === 200){
                handleAddNew();
            }
        })
        .catch((err) => {
            console.log(err);
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
                    <Button type='submit'>Save</Button>
                </Col>
            </Form.Group>
            
        </Form>
    )
}