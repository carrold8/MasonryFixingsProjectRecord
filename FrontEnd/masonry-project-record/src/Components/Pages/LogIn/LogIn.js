import React, {useState} from 'react';
import {Button, Form, Card} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function LogIn() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    // Verify user credentials
    const handleSubmit = e => {

        e.preventDefault();
        e.stopPropagation();

        localStorage.setItem("user", "Logged In");
        navigate('/');
    }


    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: '100vh'}}>
            <Card >
            <Card.Body>
                <Card.Title>Masonry Fixings Project Report Log In</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type={'username'}
                            placeholder={'Username'}
                            value={userName}
                            isInvalid = {false}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />

                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type={'password'}
                            placeholder={'Password'}
                            value={password}
                            isInvalid = {false}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </Form.Group>
                    <Button className="mt-3" type="submit">
                        Login
                    </Button>
                </Form>
            </Card.Body>

        </Card>
        </div>
        
        );
}
export default LogIn;