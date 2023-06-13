import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ContractorCard(){
    const navigate = useNavigate();

    return(
        <Card className="maintenance-contractor-card" onClick={() => navigate('search-contractors')}>
            <Card.Body>
                <h1>Contractors</h1>
                <div>Click here for contractor stuff</div>
            </Card.Body>
        </Card>
    )
}
export default ContractorCard;