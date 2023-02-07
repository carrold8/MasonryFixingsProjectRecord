import React from "react";
import { Row, Col} from 'react-bootstrap';
import ProjectsCard from "./ProjectsCard/ProjectsCard";

function Home(){


    return(
        <div style={{paddingTop: '2%', height: '100%', marginLeft: '20px', marginRight: '20px'}}>
            

            <Row>
                <Col sm={6}>
                    <ProjectsCard/>
                </Col>
                <Col sm={6}>
                    <ProjectsCard/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ProjectsCard/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProjectsCard/>
                </Col>
            </Row>
            

        </div>
    );
}
export default Home;