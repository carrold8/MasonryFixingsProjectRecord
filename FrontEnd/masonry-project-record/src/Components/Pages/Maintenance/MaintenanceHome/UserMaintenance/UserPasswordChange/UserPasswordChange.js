import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { Row, Col, Form } from "react-bootstrap";
import UsersDropDown from "../../../../../DropDown/UsersDropDown";

export default function UserPasswordChange(){

    const navigate = useNavigate();

    const [newPassword, setNewPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [userID, setUserID] = useState('');
    const [sending, setSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if(newPassword === reEnterPassword){
            setSending(true);
            const putJSON = {
                password: newPassword
            }
            MaintenanceAPIs.PutUserPassword(userID, putJSON)
            .then((response) => {
                if(response.status === 200){
                    setNewPassword('');
                    setReEnterPassword('');
                    setUserID('');
                    setSending(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setSending(false);
                if(err.response.status === 401){
                    if(err.response.data.logout){
                        navigate('/login');
                    }
                }
            })
        }
    }

    return(
        <div>
            <h5>Change Password:</h5>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <div>Choose User:</div>
                        <div>
                            <UsersDropDown 
                                value={userID} 
                                onChange={(e) => setUserID(e.target.value)} 
                                required
                            />
                        </div>
                    </Col>
                    <Col>
                        <div>Enter New Password: </div>
                        <div>
                        <Form.Control 
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required 
                            type='password'
                        />
                        </div>
                    </Col>
                    <Col>
                        <div>Re-Enter New Password: </div>
                        <div>
                        <Form.Control 
                            value={reEnterPassword}
                            onChange={(e) => setReEnterPassword(e.target.value)}
                            required 
                            isInvalid={newPassword !== reEnterPassword}
                            type='password'
                        />
                        </div>
                    </Col>
                    <Col sm={2}>
                        <button disabled={sending} type='submit'>{sending ? 'Saving...' : 'Submit'}</button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}