import React, {useState} from 'react';
import {Button, Form, Card} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import AuthenticateAPIs from '../../../MasonyFixingsAPIs/AuthenticateAPIs/AuthenticateAPIs';
import './Login.css';

function LogIn() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [requesting, setRequesting] = useState(false);
    const [invalidForm, setInvalidForm] = useState(false);
    const [invalidMsg, setInvalidMsg] = useState('');
    
    // Verify user credentials
    const handleSubmit = e => {

        e.preventDefault();
        e.stopPropagation();

        setRequesting(true);

        const postJSON = {
            username: userName,
            password: password
        }
        AuthenticateAPIs.PostAuthenticate(postJSON)
        .then((response) => {
            setRequesting(false);
            if(response.status === 200){
                navigate('/');
            }
        })
        .catch((err) => {
            setRequesting(false);
            if(err.response.status === 404){
                setInvalidForm(true);
                setInvalidMsg('Incorrect Username');
            }
            else if(err.response.status === 401){
                setInvalidForm(true);
                setInvalidMsg('Incorrect Password');
            }
        })
        
    }


    return(
        <div className='login-container'>
            <Card className='login-card'>
            <Card.Body>
                <Card.Title>Masonry Fixings Project Report</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type={'username'}
                            placeholder={'Username'}
                            value={userName}
                            isInvalid = {invalidForm}
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
                            isInvalid = {invalidForm}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>
                            {invalidMsg}
                        </Form.Control.Feedback>

                    </Form.Group>
                    
                    <Button className="mt-3" type="submit" disabled={requesting}>
                        {requesting ? 'Logging In' : 'Log In'}
                    </Button>
                </Form>
            </Card.Body>

        </Card>
            
        </div>
        
        );
}
export default LogIn;