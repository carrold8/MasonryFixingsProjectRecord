import React, { useState } from "react";
import { Form } from "react-bootstrap";
import UserAccountAPIs from "../../../../MasonyFixingsAPIs/UserAccountAPIs/UserAccountAPIs";
import { useNavigate } from "react-router-dom";

export default function UserAccountPassword(){

    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [sending, setSending] = useState(false);

    const handleSubmit = (e) => {
        
        e.preventDefault();
        e.stopPropagation();

        if(newPassword === reEnterPassword){
            setSending(true);
            const putJSON = {
                password: newPassword
            }
            UserAccountAPIs.PutUserAccountPassword(putJSON)
            .then((response) => {
                if(response.status === 200){
                    setNewPassword('');
                    setReEnterPassword('');
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
                <div>Enter New Password: <Form.Control 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required 
                    type='password'
                />
                </div>
                <div>Re-Enter New Password: <Form.Control 
                    value={reEnterPassword}
                    onChange={(e) => setReEnterPassword(e.target.value)}
                    required 
                    isInvalid={newPassword !== reEnterPassword}
                    type='password'
                />
                </div>
                <button disabled={sending} type='submit'>Change Password</button>
            </Form>
            
        </div>
    )
}