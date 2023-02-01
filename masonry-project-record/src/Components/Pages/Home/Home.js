import React from "react";
import { Row, Col} from 'react-bootstrap';
import ProjectsTable from "../Projects/ProjectsTable/ProjectsTable";
import { ProjectsData } from "../../../TempData/ProjectsData";

function Home(){


    return(
        <div >
            <div style={{width: '100%', display: 'flex', justifyContent: "center", alignItems: "center"}}>
                <Row style={{width: '75%'}}>
                    <Col>
                        <ProjectsTable projectsData={ProjectsData}/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Home;