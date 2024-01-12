import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import { TiGroup } from "react-icons/ti";
import { MdConstruction, MdSettings } from "react-icons/md";
import UserTypeAPIs from "../../../MasonyFixingsAPIs/UserTypeAPIs/UserTypeAPIs";


function Home(){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [management, setManagement] = useState(false);

    const getUserType = () => {
        UserTypeAPIs.GetUserType()
        .then((response) => {
            if(response.status === 200){
                setLoading(false);
                setManagement(response.data.management);
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
        getUserType()
    }, []);

    if(loading){
        return(
            <h3>Loading home page...</h3>
        )
    }
    else{

        return(
            <div>
                
                <div className="home-banner">
                    <h5 className="item" onClick={() => navigate('project')}>
                        <MdConstruction className="icon"/> Projects
                    </h5>
                    <h5 className="item" onClick={() => navigate('companies')}>
                        <TiGroup className='icon'/> Companies
                    </h5>
                    {management &&
                        <h5 className="item" onClick={() => navigate('maintenance')}>
                            <MdSettings className='icon'/> Maintenance
                        </h5>
                    }
                </div>

                <div className="my-active-projects-container">
                    <h4>My active projects.</h4> 
                    <div>This will contain a list of all projects that the user has entered tasks in to.</div>
                    <hr/>
                    <h4>Other notes:</h4>
                    <div>This project is still in development and contains no real data. All data found here has been created off the cuff.</div>
                    <div>Things to note:</div>
                    <ul>
                        <li>Logins and user types have not yet been created</li>
                        <li>A managment dashboard option will appear when a manager logs in to the app in the future.</li>
                        <li>The maintenance option will not appear for people without permission to edit key features of this web app.</li>
                    </ul>
                </div>

            </div>
        );
    }
}
export default Home;