import React from "react";
import {Row, Col, Form} from 'react-bootstrap';
import './FirstStage.css'

function FirstStage(){


    return(

        <div style={{marginTop: '2%', marginLeft: '5%', marginRight: '5%', marginBottom: '10%'}}> 


            <div style={{marginBottom: '2%', display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h1>First Stage</h1>
            </div>


            <div>
                <h1>Title</h1>
                
            </div>

            <Row>
                <Col sm={2} className={'stage-column'}>
                    <h1>Task</h1>
                </Col>
                <Col sm={2} className={'stage-column'}>
                    <h1>Company</h1>
                </Col>
                <Col sm={2} className={'stage-column'}>
                    <h1>Type</h1>
                </Col>
                <Col sm={2} className={'stage-column'}>
                    <h1>Products</h1>
                </Col>
                <Col sm={2} className={'stage-column'}>
                    <h1>Approx Value</h1>
                </Col>
                <Col sm={2} className={'stage-column'}>
                    <h1>Likely Sale</h1>
                </Col>
            </Row>

            {/* Hoarding */}
            <Row style={{marginTop: '1%', borderBottom: '1px solid black'}}>
                <Col sm={2} >
                    <Row>
                        <h3>Hoarding</h3>
                    </Row>
                    <Row>
                        <div>Timeline</div>
                    </Row>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Company"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Type"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Products"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Approx Value"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Likely Sale"
                                />
                            </Col>
                        </Form.Group>
                </Col>

                
            </Row>

            {/* Scaffolding */}
            <Row style={{marginTop: '1%', borderBottom: '1px solid black'}}>
                <Col sm={2} >
                    <Row>
                        <h3>Scaffolding</h3>
                    </Row>
                    <Row>
                        <div>Timeline</div>
                    </Row>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Company"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Type"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Products"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Approx Value"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Likely Sale"
                                />
                            </Col>
                        </Form.Group>
                </Col>

                
            </Row>


            {/* Groundworks */}
            <Row style={{marginTop: '1%', borderBottom: '1px solid black'}}>
                <Col sm={2} >
                    <Row>
                        <h3>Groundworks</h3>
                    </Row>
                    <Row>
                        <div>Timeline</div>
                    </Row>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Company"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Type"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Products"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Approx Value"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Likely Sale"
                                />
                            </Col>
                        </Form.Group>
                </Col>

                
            </Row>



            {/* Waterproofing */}
            <Row style={{marginTop: '1%', borderBottom: '1px solid black'}}>
                <Col sm={2} >
                    <Row>
                        <h3>Waterproofing</h3>
                    </Row>
                    <Row>
                        <div>Timeline</div>
                    </Row>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Company"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Type"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Products"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Approx Value"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Likely Sale"
                                />
                            </Col>
                        </Form.Group>
                </Col>

                
            </Row>


            {/* Formwork */}
            <Row style={{marginTop: '1%', borderBottom: '1px solid black'}}>
                <Col sm={2} >
                    <Row>
                        <h3>Formwork</h3>
                    </Row>
                    <Row>
                        <div>Timeline</div>
                    </Row>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Company"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Type"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Products"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Approx Value"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Likely Sale"
                                />
                            </Col>
                        </Form.Group>
                </Col>

                
            </Row>



            {/* Precast */}
            <Row style={{marginTop: '1%', borderBottom: '1px solid black'}}>
                <Col sm={2} >
                    <Row>
                        <h3>Precast</h3>
                    </Row>
                    <Row>
                        <div>Timeline</div>
                    </Row>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Company"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Type"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Products"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Approx Value"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Likely Sale"
                                />
                            </Col>
                        </Form.Group>
                </Col>

                
            </Row>


            {/* Structural Steel */}
            <Row style={{marginTop: '1%', borderBottom: '1px solid black'}}>
                <Col sm={2} >
                    <Row>
                        <h3>Structural Steel</h3>
                    </Row>
                    <Row>
                        <div>Timeline</div>
                    </Row>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Company"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Type"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Products"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Approx Value"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Likely Sale"
                                />
                            </Col>
                        </Form.Group>
                </Col>

                
            </Row>



            {/* Decking */}
            <Row style={{marginTop: '1%', borderBottom: '1px solid black'}}>
                <Col sm={2} >
                    <Row>
                        <h3>Decking</h3>
                    </Row>
                    <Row>
                        <div>Timeline</div>
                    </Row>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Company"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Type"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Products"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Approx Value"
                                />
                            </Col>
                        </Form.Group>
                </Col>
                <Col sm={2} className={'stage-column'}>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                                <Form.Control 
                                size="lg"
                                placeholder="Likely Sale"
                                />
                            </Col>
                        </Form.Group>
                </Col>

                
            </Row>







        </div>

    );

}
export default FirstStage;