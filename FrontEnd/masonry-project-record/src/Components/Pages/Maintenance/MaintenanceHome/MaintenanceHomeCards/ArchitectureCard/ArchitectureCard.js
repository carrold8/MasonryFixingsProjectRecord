import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ArchitectureCard(){

    const navigate = useNavigate();

    return(
        <Card className="maintenance-architect-card" onClick={() => navigate('search-architects')}>
            <Card.Body>
                <h1> Architecture Card</h1>
                <div>Click here to edit details about architecure clients</div>
            </Card.Body>
        </Card>
    )

}
export default ArchitectureCard;