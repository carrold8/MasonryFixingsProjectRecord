import React from "react";
import { Row, Col } from "react-bootstrap";
import ArchitectureCard from "./ArchitectureCard/ArchitectureCard";
import ContractorCard from "./ContractorCard/ContractorCard";
import EngineeringCard from "./EngineeringCard/EngineeringCard";
import './MaintenanceHomeCards.css'

function MaintenaceHomeCards(){


    return(
        <div>
            

            <Row>
                <Col>
                    <ContractorCard />
                </Col>
                <Col>
                    <EngineeringCard />
                </Col>
                <Col>
                    <ArchitectureCard />
                </Col>
            </Row>
        </div>
    )

}
export default MaintenaceHomeCards;