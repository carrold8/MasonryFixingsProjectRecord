import axios from "axios";
import React, { useState } from "react";
import {Button, Col, Form, Row} from 'react-bootstrap';

export default function CreateUser({handleAddUser}){


    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const postJSON = {
            name: name
        }

        axios.post('http://localhost:8080/maintenance/user', postJSON)
        .then((response) => {
            if(response.status === 200){
                handleAddUser();
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column>Name</Form.Label>
                    <Col>
                        <Form.Control required value={name} onChange={(e) => setName(e.target.value)} />
                    </Col>
                </Form.Group>

                <Button type="submit">Add</Button>
            </Form>
        </div>
    )
}