import React, { useState } from "react";
import {Button, Col, Form, Row} from 'react-bootstrap';
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";

export default function CreateUser({handleAddUser}){


    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const postJSON = {
            name: name
        }

        MaintenanceAPIs.PostUser(postJSON)
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
                    <Col>
                        <Button type="submit">Add</Button> 
                    </Col>
                </Form.Group>

                
            </Form>
        </div>
    )
}