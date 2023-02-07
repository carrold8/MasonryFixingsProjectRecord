import React from "react";
import { Outlet, Navigate} from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../SideBar/Sidebar";



function PrivateRoute() {

    const isLoggedIn = localStorage.getItem('user');


    if(isLoggedIn){
        return(
            <div style={{display: "flex"}}>
                <SideBar/>

                <div style={{width: '100%'}}>
                    <Header/>
                    <div style={{overflow: "auto", height: '93vh', top: '7vh', width: '100%', background: '#ededed'}}>
                        <Outlet/>
                    </div>
                </div>

            </div>
        )
    }

    else {
        return <Navigate to={'/'} />
    }


}
export default PrivateRoute;