import React, {useState} from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { useNavigate } from "react-router-dom";

export default function CreateEmployeeType({handleAddNew}){

    const navigate = useNavigate();
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const postJSON = {
            name: name
        }

        MaintenanceAPIs.PostEmployeeType(postJSON)
        .then((response) => {
            if(response.status){
                handleAddNew();
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
                }
            }
        })
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>New Employee Type:</Form.Label>
                <Col>
                    <Form.Control required value={name} onChange={(e) => setName(e.target.value)} />
                </Col>
                <Col>
                    <Button type='submit'>Save</Button>
                </Col>
            </Form.Group>
            
        </Form>
    )

}