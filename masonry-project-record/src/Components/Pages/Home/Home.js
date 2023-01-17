import React from "react";
import {Button, Row, Col} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate();

    return(
        <div style={{marginTop: '2%'}}>
            <div>
                <h1>Home</h1>
            </div>
            
            <Row>
                <Col>
                    <Button onClick={() => navigate('/project-setup')}>Go to set up</Button>
                </Col>
                <Col>
                    <Button onClick={() => navigate('/first-stage')}>Go to First Stage</Button>
                </Col>
            </Row>
            
        </div>
    );
}
export default Home;