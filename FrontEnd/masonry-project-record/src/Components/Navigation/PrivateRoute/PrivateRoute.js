import React from "react";
import { Outlet, Navigate} from "react-router-dom";
import Header from "../Header/Header";

function PrivateRoute() {

    const isLoggedIn = localStorage.getItem('user');


    if(isLoggedIn){
        return(
            <>
                <Header/>
                <Outlet/>
            </>
    
        )
    }

    else {
        return <Navigate to={'/login'} />
    }


}
export default PrivateRoute;