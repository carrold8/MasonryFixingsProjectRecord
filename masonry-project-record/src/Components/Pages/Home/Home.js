import React from "react";
import {Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate();

    return(
        <div style={{marginTop: '2%'}}>
            <h1>Home</h1>
            <Button onClick={() => navigate('/project-setup')}>Go to set up</Button>
        </div>
    );
}
export default Home;