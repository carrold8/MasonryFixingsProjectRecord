import React from "react";
import { Card, Form, Row, Col, Table} from "react-bootstrap";
import './ViewArchitect.css';

function ViewArchitect(){
   
    return(
        <Card className="architect-card">
            <Card.Header className="header">Architect Company</Card.Header>

            <Card.Body>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Name</Form.Label>
                        <Col>
                            <Form.Control 
                                placeholder="Name"
                            />
                        </Col>
                    </Form.Group>
                    <hr/>
                    <h4>Address</h4>

                    <Row>
                        <Col>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label column sm={3}>Line 1</Form.Label>
                                <Col>
                                    <Form.Control 
                                        placeholder="Line 1"
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label column sm={3}>Line 2</Form.Label>
                                <Col>
                                    <Form.Control 
                                        placeholder="Line 2"
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label column sm={3}>City</Form.Label>
                                <Col>
                                    <Form.Select>
                                        <option value={0}>City</option>
                                        <option value={1}>Dublin</option>
                                        <option value={2}>Cork</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label column sm={3}>County</Form.Label>
                                <Col>
                                    <Form.Select>
                                        <option value={0}>County</option>
                                        <option value={1}>Meath</option>
                                        <option value={2}>Dublin</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label column sm={3}>Country</Form.Label>
                                <Col>
                                    <Form.Select>
                                        <option value={0}>Country</option>
                                        <option value={1}>Ireland</option>
                                        <option value={2}>Northern Ireland</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                    
                </Form>
                <hr/>
                <Card className="engineer-contact-card">
                    <Card.Header className="header">Architects</Card.Header>
                    <Card.Body>
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Joe</td>
                                <td>Bloggs</td>
                            </tr>
                            <tr>
                                <td>Jane</td>
                                <td>Doe</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    )
}
export default ViewArchitect;