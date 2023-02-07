import React from "react";
import { useNavigate } from "react-router-dom";
import './ProjectsCard.css';

function ProjectsCard(){

    const navigate = useNavigate();

    return(
        <div className="project-card" onClick={() => navigate('/projects')}>
            <h1> My Projects </h1>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    Current Projects:  6
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    Completed Projects:  12
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    Upcoming Projects:  6
            </div>
        </div>
    );

}
export default ProjectsCard;