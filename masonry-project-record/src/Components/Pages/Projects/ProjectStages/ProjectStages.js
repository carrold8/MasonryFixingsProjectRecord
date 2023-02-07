import React from "react";
import {Card, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function ProjectStages(){

    const navigate = useNavigate();

    const projectData = JSON.parse(localStorage.getItem("ProjectData"));

    return(
        <div>
            <h2>Project Title: {projectData.title}</h2>
            <h2>Currrent Stage: {projectData.currentStage}</h2>


            <Card>
                <Card.Header>{projectData.title}</Card.Header>
                <Card.Body>
                    <div>Stage 1: <Button onClick={() => navigate('1')}>Go to</Button></div>

                    <div style={{marginTop: '10px'}}>Stage 2: <Button onClick={() => navigate('2')}>Go to</Button></div>
                </Card.Body>
            </Card>

        </div>
    );

}
export default ProjectStages;