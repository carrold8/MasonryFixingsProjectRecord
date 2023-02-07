import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import StageItem from "../StageItem/StageItem";

function StageTwo(){
    
    const [secSteelWork, setSecSteelWork] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [balconies, setBalconies] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [handrails, setHandrails] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [raisedFloors, setRaisedFloors] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [suspCeilings, setSuspCeilings] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [electrical, setElectrical] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [mechanical, setMechanical] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });
    const [hvac, setHvac] = useState({
        timeline: "May",
        company: "Hoarding King's 97"
    });



    return(
        <div style={{padding: '20px'}}>
            <Row>
                <Col>
                    <StageItem title={'Secondary Steelwork'} data={secSteelWork} setArray={setSecSteelWork} />
                </Col>
                <Col>
                    <StageItem title={'Balconies'} data={balconies} setArray={setBalconies} />
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Col>
                    <StageItem title={'Handrails'} data={handrails} setArray={setHandrails}/>
                </Col>
                <Col>
                    <StageItem title={'Raised Floors'} data={raisedFloors} setArray={setRaisedFloors} />
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Col>
                    <StageItem title={'Suspended Ceilings'} data={suspCeilings}  setArray={setSuspCeilings}/>
                </Col>
                <Col>
                    <StageItem title={'Electrical'} data={electrical} setArray={setElectrical} />
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Col>
                    <StageItem title={'Mechanical'} data={mechanical} setArray={setMechanical}/>
                </Col>
                <Col>
                    <StageItem title={'HVAC'} data={hvac} setArray={setHvac} />
                </Col>
            </Row>
            
            
        </div>
    );
}
export default StageTwo;