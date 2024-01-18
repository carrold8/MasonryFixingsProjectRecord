import React, { useEffect, useState } from 'react';
import UserAccountAPIs from '../../../../MasonyFixingsAPIs/UserAccountAPIs/UserAccountAPIs';
import { useNavigate } from 'react-router-dom';

export default function UserAccountInfo(){

    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState();
    const navigate = useNavigate();

    const getUserInfo = () => {
        UserAccountAPIs.GetUserAccount()
        .then((response) => {
            if(response.status === 200){
                setUserInfo(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
            }
        })
    }

    useEffect(() => {
        getUserInfo();
    }, [])

    if(loading){
        return(
            <div>Loading Your Information...</div>
        )
    }
    else{
        return(
            <div>
                <h3>Account Info:</h3>
                <ul>
                    <li><strong>First Name:</strong> {userInfo.first_name}</li>
                    <li><strong>Last Name:</strong> {userInfo.last_name}</li>
                    <li><strong>Username:</strong> {userInfo.username}</li>
                    {/* <li><strong>Role:</strong> {userInfo.role}</li> */}
                    <li><strong>E-mail:</strong> {userInfo.email}</li>
                </ul>
                
            </div>
        )
    }
} 
