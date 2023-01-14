import React from "react";
import {Row, Col, Button, Form, Card} from 'react-bootstrap';

function ProjectSetUp(){

    return(
        <div style={{marginTop: '2%', marginLeft: '1%', marginRight: '1%'}}>
            <Card style={{borderColor: 'blue',backgroundColor: '#f0f1f2', width: '80%'}}>
                <Card.Header>Project Details</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2} >Project Name</Form.Label>
                            <Col sm={8}>
                                <Form.Control/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2} >Applicant</Form.Label>
                            <Col sm={8}>
                                <Form.Control/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Architect</Form.Label>
                            <Col sm={8}>
                                <Form.Control/>
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Architect</Form.Label>
                            <Col sm={8}>
                                <Form.Control/>
                            </Col>
                        </Form.Group>
                            
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Remember me" />
                            </Col>
                        </Form.Group>
                        
                    </Form>

                </Card.Body>
            </Card>

            <Card style={{borderColor: 'blue',backgroundColor: '#f0f1f2', width: '80%'}}>
                <Card.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2} >Category</Form.Label>
                            <Col sm={8}>
                                <Form.Control/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2} >Sector</Form.Label>
                            <Col sm={8}>
                                <Form.Control/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Start Date</Form.Label>
                            <Col sm={8}>
                                <Form.Control/>
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Finish Date</Form.Label>
                            <Col sm={8}>
                                <Form.Control/>
                            </Col>
                        </Form.Group>
                                 
                    </Form>

                </Card.Body>
            </Card>
        </div>
    );


}
export default ProjectSetUp;