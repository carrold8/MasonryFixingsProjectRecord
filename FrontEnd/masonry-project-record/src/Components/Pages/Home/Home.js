import React from "react";
import { Row, Col} from 'react-bootstrap';
import MaintenanceCard from "./HomeCards/MaintenanceCard/MaintenanceCard";
import ProjectsCard from "./HomeCards/ProjectsCard/ProjectsCard";
import { useNavigate } from "react-router-dom";


function Home(){

    const navigate = useNavigate();

    return(
        <div style={{paddingTop: '2%', height: '100%', marginLeft: '2%', marginRight: '2%'}}>
            

            <Row>
                <Col sm={4} align={'center'}>
                    <ProjectsCard/>
                </Col>
                <Col sm={4} align={'center'}>
                    <MaintenanceCard/>
                </Col>
                <Col sm={4} align={'center'}>
                    <div onClick={() => navigate('companies')}>Companies</div>
                </Col>
            </Row>

          
        </div>
    );
}
export default Home;