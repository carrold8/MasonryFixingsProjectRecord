import React from "react";
import { Outlet } from "react-router-dom";
import './Maintenance.css';

function Maintenance(){

    return(
        <div className='maintenance-display'>
            <h1>Maintenance</h1>
            <hr/>
            <Outlet/>
            
        </div>

    );


}
export default Maintenance;