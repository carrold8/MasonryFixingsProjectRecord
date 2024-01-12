import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import './Maintenance.css';
import UserTypeAPIs from "../../../MasonyFixingsAPIs/UserTypeAPIs/UserTypeAPIs";

function Maintenance(){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const getUserType = () => {
        UserTypeAPIs.GetUserType()
        .then((response) => {
            if(response.status === 200){
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
                else{
                    navigate('/');
                }
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
            {loading? <h3>Loading Maintenance...</h3>
            :   
            <Outlet/>
            }
            
            
        </div>

    );


}
export default Maintenance;