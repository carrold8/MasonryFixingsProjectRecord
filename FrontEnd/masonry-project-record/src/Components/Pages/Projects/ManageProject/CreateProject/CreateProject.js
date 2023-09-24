import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function CreateProject(){

    const [name, setName] = useState('')
    const [cisID, setCisID] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {

        console.log('creating new project')
        e.preventDefault();
        e.stopPropagation();

        const PostJSON = {
            name: name,
            cis_id: cisID
        }

        axios.post(
            'http://localhost:8080/project',
            PostJSON
        )
        .then((newProject) => {
            console.log('ID: ',newProject.data.id);
            navigate('/project/' + newProject.data.id)
        })
        .catch((err) => {
            console.log(err);
        })


    }


    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <div>Name:</div>
                <Form.Control required value={name} onChange={(e) => setName(e.target.value)} />
                <div>CIS ID:</div>
                <Form.Control required value={cisID} onChange={(e) => setCisID(e.target.value)} />
                <Button type="submit" size="sm">Submit</Button>
            </Form>
        </div>
    )

}