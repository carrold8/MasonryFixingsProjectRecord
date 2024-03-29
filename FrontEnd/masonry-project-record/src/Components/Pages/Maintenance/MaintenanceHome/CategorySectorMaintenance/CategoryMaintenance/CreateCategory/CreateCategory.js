import React, {useState} from "react";
import {Form, Button, Row, Col} from 'react-bootstrap';
import MaintenanceAPIs from "../../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { useNavigate } from "react-router-dom";

export default function CreateCategory({handleAddNew}){

    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setSending(true);

        const postJSON = {
            name: name
        }

        MaintenanceAPIs.PostCategory(postJSON)
        .then((response) => {
            if(response.status){
                handleAddNew();
                setSending(false);
            }
        })
        .catch((err) => {
            console.log(err)
            setSending(false);
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
                <Form.Label column sm={3}>New Category:</Form.Label>
                <Col>
                    <Form.Control required value={name} onChange={(e) => setName(e.target.value)} />
                </Col>
                <Col>
                    <Button disabled={sending} type='submit'>{sending ? 'Saving...':'Save'}</Button>
                </Col>
            </Form.Group>
            
        </Form>
    )
}