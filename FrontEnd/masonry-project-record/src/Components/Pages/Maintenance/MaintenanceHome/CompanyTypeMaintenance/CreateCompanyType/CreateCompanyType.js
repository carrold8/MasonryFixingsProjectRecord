import React, { useState } from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";

export default function CreateCompanyType({handleAddNew}){

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const postJSON = {
            name: name
        }

        MaintenanceAPIs.PostCompanyType(postJSON)
        .then((response) => {
            if(response.status){
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
                <Form.Label column sm={3}>New Company Type:</Form.Label>
                <Col>
                    <Form.Control required value={name} onChange={(e) => setName(e.target.value)} />
                </Col>
            </Form.Group>
            <Button type='submit'>Save</Button>
        </Form>
    )
}