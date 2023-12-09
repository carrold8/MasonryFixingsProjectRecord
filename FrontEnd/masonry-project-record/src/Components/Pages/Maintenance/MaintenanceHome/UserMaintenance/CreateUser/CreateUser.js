import React, { useState } from "react";
import {Button, Col, Form, Row} from 'react-bootstrap';
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import DropDown from "../../../../../DropDown/DropDown";

export default function CreateUser({handleAddUser}){

    const [requesting, setRequesting] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const [invalidUserName, setInvalidUserName] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordB, setPasswordB] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setInvalidUserName(false);

        setRequesting(true);
        if(password === passwordB){
            const postJSON = {
                first_name: firstName,
                last_name: lastName,
                password: passwordB,
                email: email,
                role: role,
                username: userName
            }
             MaintenanceAPIs.PostUser(postJSON)
            .then((response) => {
                setRequesting(false);
                if(response.status === 200){
                    handleAddUser();
                }
            })
            .catch((err) => {
                setRequesting(false);
                if(err.response.status === 409){
                    setInvalidUserName(true);
                }
            })
        }
        else{
            setRequesting(false);
        }

        

    }


    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column>First Name</Form.Label>
                    <Col>
                        <Form.Control required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column>Last Name</Form.Label>
                    <Col>
                        <Form.Control required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column>Username</Form.Label>
                    <Col>
                        <Form.Control isInvalid={invalidUserName} required value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <Form.Control.Feedback type='invalid'>Username Taken</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column>Email</Form.Label>
                    <Col>
                        <Form.Control 
                            type="email"
                            required 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column>Role</Form.Label>
                    <Col>
                        <DropDown.Role size='sm' required value={role} onChange={(e) => setRole(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column>Password</Form.Label>
                    <Col>
                        <Form.Control required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column>Re-enter Password</Form.Label>
                    <Col>
                        <Form.Control 
                            isInvalid={password !== passwordB}
                            required 
                            value={passwordB} 
                            onChange={(e) => setPasswordB(e.target.value)} />
                            <Form.Control.Feedback type='invalid'>Passwords don't match</Form.Control.Feedback>
                    </Col>
                </Form.Group>

            
                <Button disabled={requesting} type="submit">
                    {requesting ? 'Adding': 'Add'}
                </Button> 
                    

            </Form>
        </div>
    )
}