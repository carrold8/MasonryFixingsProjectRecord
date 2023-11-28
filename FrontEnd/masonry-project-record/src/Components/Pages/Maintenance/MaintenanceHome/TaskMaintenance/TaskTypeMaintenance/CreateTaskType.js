import React, { useState } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";

export default function CreateTaskType({handleAddNew, taskID}){

    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const postJSON = {
            name: name,
            task_id: taskID
        }

        MaintenanceAPIs.PostTaskType(postJSON)
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
                <Form.Label column sm={3}>New Task Type:</Form.Label>
                <Col>
                    <Form.Control required placeholder="Type" value={name} onChange={(e) => setName(e.target.value)} />
                </Col>
                <Col>
                    <Button type='submit'>Save</Button>
                </Col>
            </Form.Group>
            
        </Form>
    )
}