import React, {useState} from 'react';
import {Button, Form, Card} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'


function LogIn() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // const [invalidForm, setInvalidForm] = useState("");


  

    // const [newCounty, setNewCounty] = useState('')

    // const handleNewCounty = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();

    //     console.log('in new')
    //     axios.post(
    //         'http://localhost:8080/county/county',
    //         { county: newCounty}    
    //     )
        // .then((response) => {
        //     console.log(response);
        //     handleTest(response.data.data.insertId)
        // }) 
        // .catch((err) => {
        //     console.log(console.log(err))
        // })

    // }

    // Verify user credentials
    const handleSubmit = e => {

        e.preventDefault();
        e.stopPropagation();

        
        localStorage.setItem("user", "Logged In");
        navigate('/home');
        


    }

    

    const getCompany = () => {
        axios.get('http://localhost:8080/company')
        .then((response) => {
            console.log(response);
        })
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


                {/* <form onSubmit={handleNewCounty}>
                    <label>County Name</label>
                    <input value={newCounty} onChange={(e) => setNewCounty(e.target.value)}/>
                    <button type='submit' >Save</button>
                </form> */}

                <button onClick={() => getCompany()}>Company</button>
            </Card.Body>

        </Card>
        </div>
        
        );
}
export default LogIn;