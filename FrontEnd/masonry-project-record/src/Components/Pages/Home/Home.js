import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import { TiGroup } from "react-icons/ti";
import { MdConstruction, MdSettings } from "react-icons/md";
import UserTypeAPIs from "../../../MasonyFixingsAPIs/UserTypeAPIs/UserTypeAPIs";
import ViewUpcomingTasks from "./ViewUpcomingTasks/ViewUpcomingTasks";


function Home(){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [management, setManagement] = useState(false);

    const getUserType = () => {
        UserTypeAPIs.GetUserType()
        .then((response) => {
            if(response.status === 200){
                setLoading(false);
                setManagement(true);
            }
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
                else{
                    setLoading(false);
                }
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
                    <h4>Upcoming Tasks:</h4> 
                    <ViewUpcomingTasks/>
                </div>

            </div>
        );
    }
}
export default Home;