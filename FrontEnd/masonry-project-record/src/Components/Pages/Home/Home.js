import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';


function Home(){

    const navigate = useNavigate();

    return(
        <div>
            
            <div className="home-banner">
                <h5 className="item" onClick={() => navigate('project')}>Projects</h5>
                <h5 className="item" onClick={() => navigate('companies')}>Companies</h5>
                <h5 className="item" onClick={() => navigate('maintenance')}>Maintenance</h5>
            </div>

            <div className="my-active-projects-container">
                My active projects
            </div>

        </div>
    );
}
export default Home;