import React from "react";
import {Row, Col, Form} from 'react-bootstrap';

function ProjectSetUp(){

    return(
        <div style={{marginTop: '2%', marginLeft: '5%', marginRight: '5%'}}>

            <div style={{marginBottom: '2%', display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h1>Log New Project</h1>
            </div>
            
            
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

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label size="lg" column sm={2}>Building Description</Form.Label>
                            <Col sm={8}>
                                <Form.Control as="textarea" rows={5} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Footprint m<sup>2</sup></Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Frame Material</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Floor Material</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Envelope Material</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Roof Material</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Partitioning Material</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>



                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Main Contractor</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Head Office</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Head Office Phone</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Account Contact</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label size="lg" column sm={2}>Account Contact</Form.Label>
                            <Col sm={8}>
                                <Form.Control size="lg"/>
                            </Col>
                        </Form.Group>

                    </Form>

    
        </div>
    );


}
export default ProjectSetUp;