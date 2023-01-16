import React from "react";
import {Row, Col, Button, Form, Card} from 'react-bootstrap';

function ProjectSetUp(){

    return(
        <div style={{marginTop: '2%', marginLeft: '1%', marginRight: '1%'}}>

            <h1>Log New Project</h1>
            
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2} >Project Name</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2} >Applicant</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Architect</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                        
                        <Form.Group  as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Architect</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                            
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Contacted" />
                            </Col>
                        </Form.Group>
                        
                   
                        <Form.Group  as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2} >Category</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2} >Sector</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Start Date</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Finish Date</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>


                                 
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Is Induction Required?" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>When is it provided</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Were you inducted?" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Name</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Date</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>

                    </Form>

    
        </div>
    );


}
export default ProjectSetUp;