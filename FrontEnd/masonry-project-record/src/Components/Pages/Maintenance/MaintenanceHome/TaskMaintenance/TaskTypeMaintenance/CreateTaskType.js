import React, { useState } from "react";
import axios from "axios";
import {Form, Row, Col, Button} from 'react-bootstrap';

export default function CreateTaskType({handleAddNew, taskID}){

    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const postJSON = {
            name: name,
            task_id: taskID
        }

        axios.post('http://localhost:8080/maintenance/task-type', postJSON)
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
            </Form.Group>
            <Button type='submit'>Save</Button>
        </Form>
    )
}