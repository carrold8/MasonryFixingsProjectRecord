import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MaintenanceCard(){

    const navigate = useNavigate();

    return (
        <Card>
            <Card.Body>
                <h1>Maintenance</h1>
            </Card.Body>
            <Card.Footer onClick={() => navigate('maintenance')}>Go to Maintenance</Card.Footer>
        </Card>
    )

}
export default MaintenanceCard;