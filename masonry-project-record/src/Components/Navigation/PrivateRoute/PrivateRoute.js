import { Outlet, Navigate} from "react-router-dom";
import Header from "../Header/Header";



function PrivateRoute() {

    const isLoggedIn = localStorage.getItem('user');


    if(isLoggedIn){
        return(
            <div>
                <div >
                    <Header />
                </div>
                <div style={{display: 'flex', marginTop: '10vh'}}>
              

                    <div style={{overflow: 'auto', height: '90vh', width: '100%'}}>
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