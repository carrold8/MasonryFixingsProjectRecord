import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import './Maintenance.css';
import UserTypeAPIs from "../../../MasonyFixingsAPIs/UserTypeAPIs/UserTypeAPIs";

function Maintenance(){

    const navigate = useNavigate();

    const getUserType = () => {
        UserTypeAPIs.GetUserType()
        .then((response) => {
            if(response.status === 200){
                if(response.data.management === false){
                    navigate('/')
                }
            }
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 401){
                navigate('/login');
            }
        })
    }
    
    useEffect(() => {
        getUserType();
    }, [])
    return(
        <div className='maintenance-display'>
            <h1>Maintenance</h1>
            <hr/>
            <Outlet/>
            
        </div>

    );


}
export default Maintenance;