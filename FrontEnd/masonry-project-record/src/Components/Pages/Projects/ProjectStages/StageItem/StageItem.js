import React, { useState } from "react";
import { Button,  Col, Form, Row} from "react-bootstrap";
import {FiChevronDown} from 'react-icons/fi';
import {FaEdit} from 'react-icons/fa';
import './StageItem.css';

function StageItem({title, data, setArray}){

    const [showForm, setShowForm] = useState(false);


    const [timeline, setTimeline] = useState(data.timeline);
    const [company, setCompany] = useState(data.company);

 

    const handleSave = () => {

        setArray("");

    }


    const test = () => {

        return(
            <Form>
                <Row>
                    <Col>
                        <Form.Label>Timeline</Form.Label>
                        <Form.Control
                            defaultValue={timeline}    
                            onChange={(e) => setTimeline(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            defaultValue={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Type</Form.Label>
                        <Form.Control/>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <Form.Label>Products</Form.Label>
                        <Form.Control/>
                    </Col>
                    <Col>
                        <Form.Label>Approx Value</Form.Label>
                        <Form.Control/>
                    </Col>
                    <Col>
                        <Form.Label>Likely to Sell</Form.Label>
                        <Form.Control/>
                    </Col>
                    
                </Row>
                <Row style={{margin: '10px'}}>
                    <Col align={'end'}>
                        <Button onClick={handleSave}>Save</Button>
                    </Col>
                </Row>
            </Form>
        )

    }
    

    return(
        <div>
        
                <div  className={showForm ?  'title active' : 'title'}>
                    <Row>
                        <Col sm={10}>
                            <h3>{title}</h3>
                        </Col>
                        <Col sm={1}>
                            <FaEdit className="edit"/>
                        </Col>

                        <Col sm={1} align={'end'}>
                            <FiChevronDown className={showForm ? 'chev-flipped' : 'chev'} onClick={() => setShowForm(!showForm)}/>
                            
                        </Col>
                    </Row>
                    
                </div>

                <div className={showForm ?  'show-menu active' : 'show-menu'}>
                    {test()}
                </div>
            
        </div>
    )

}
export default StageItem;