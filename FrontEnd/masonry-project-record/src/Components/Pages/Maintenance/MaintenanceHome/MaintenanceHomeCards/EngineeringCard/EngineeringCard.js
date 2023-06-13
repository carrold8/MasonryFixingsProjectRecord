import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EngineeringCard(){

    const navigate = useNavigate();
    return(
        <Card className="maintenance-engineer-card" onClick={() => navigate('search-engineers')}>
            <Card.Body>
                <h1>Engineering Card</h1>
                <div>Click here to manage engineering client details</div>
            </Card.Body>
        </Card>
    )
}
export default EngineeringCard;