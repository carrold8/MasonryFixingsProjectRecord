import React from "react";
import {Card, Row, Col} from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../Navigation/Breadcrumbs/Breadcrumbs";


function Projects(){

    return(

        <div style={{paddingTop: '1%', height: '100%'}}>

            <Card style={{marginLeft: '1%', marginRight: '1%', backgroundColor: 'grey'}}>
                <Card.Body>
                    <Row>
                        <Col sm={9}>
                            <h1 style={{color: 'white'}}>Projects</h1>
                            <Row style={{display: 'flex', justifyContent: 'start', alignItems: 'start'}}>
                                <Col sm={7}>
                                    <Breadcrumbs/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <hr style={{height: '1%', background: 'grey'}}/>
            <Outlet/>
            
        </div>

    );

}
export default Projects;