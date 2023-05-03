import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import StageItem from "../StageItem/StageItem";

function StageOne(){

    const [hoarding, setHoarding] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [scaffolding, setScaffolding] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [groundWorks, setGroundWorks] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [waterProofing, setWaterProofing] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [formwork, setFormwork] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [precast, setPrecast] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [structSteel, setStructSteel] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [decking, setDecking] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });



    return(
        <div style={{padding: '20px'}}>
            <Row>
                <Col>
                    <StageItem title={'Hoarding'} data={hoarding} setArray={setHoarding} />
                </Col>
                <Col>
                    <StageItem title={'Scaffolding'} data={scaffolding} setArray={setScaffolding} />
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Col>
                    <StageItem title={'Ground Works'} data={groundWorks} setArray={setGroundWorks}/>
                </Col>
                <Col>
                    <StageItem title={'Waterproofing'} data={waterProofing} setArray={setWaterProofing} />
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Col>
                    <StageItem title={'Formwork'} data={formwork}  setArray={setFormwork}/>
                </Col>
                <Col>
                    <StageItem title={'Precast'} data={precast} setArray={setPrecast} />
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Col>
                    <StageItem title={'Structural Steel'} data={structSteel} setArray={setStructSteel}/>
                </Col>
                <Col>
                    <StageItem title={'Decking'} data={decking} setArray={setDecking} />
                </Col>
            </Row>
            
            
        </div>
    );


}
export default StageOne;