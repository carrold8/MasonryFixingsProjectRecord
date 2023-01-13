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
                            <Col sm={3}>
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