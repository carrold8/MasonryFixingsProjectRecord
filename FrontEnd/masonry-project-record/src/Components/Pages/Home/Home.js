import React from "react";
import { Row, Col} from 'react-bootstrap';
import MaintenanceCard from "./HomeCards/MaintenanceCard/MaintenanceCard";
import ProjectsCard from "./HomeCards/ProjectsCard/ProjectsCard";


function Home(){


    return(
        <div style={{paddingTop: '2%', height: '100%', marginLeft: '2%', marginRight: '2%'}}>
            

            <Row>
                <Col sm={6} align={'center'}>
                    <ProjectsCard/>
                </Col>
                <Col sm={6} align={'center'}>
                    <MaintenanceCard/>
                </Col>
            </Row>

          
        </div>
    );
}
export default Home;