import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './ProjectsCard.css';

function ProjectsCard(){

    const navigate = useNavigate();

    return(
        <Card className="project-card" style={{borderRadius: 0}} onClick={() => navigate('/projects')}>
            <Card.Header className="header">Testing</Card.Header>
            <Card.Body>
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

            </Card.Body>
            
        </Card>
    );

}
export default ProjectsCard;