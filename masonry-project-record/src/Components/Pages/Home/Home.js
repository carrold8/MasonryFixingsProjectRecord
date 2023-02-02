import React from "react";
import {Card} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate();

    return(
        <div style={{paddingTop: '2%', height: '100%'}}>
            <div style={{width: '100%', display: 'flex', justifyContent: "center", alignItems: "center"}}>
                <Card onClick={() => navigate('/projects')} style={{width: '50%'}}>
                    <Card.Header>Go to Projects</Card.Header>
                    <Card.Body>
                        <h1>Projects</h1>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
export default Home;