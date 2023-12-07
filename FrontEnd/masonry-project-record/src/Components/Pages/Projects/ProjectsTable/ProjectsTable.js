import React, { useEffect, useState } from "react";
import {Card, Row, Col, Button, Table} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import ProjectAPIs from "../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";

function ProjectsTable({projectsData}){


    const [projectList, setProjectList] = useState([]);

    const navigate = useNavigate();
    const headerColumns = ["CIS ID", "Title"];

    const getProjectList = () => {
       
        ProjectAPIs.GetAllProjects()
        .then((projects) => {
            setProjectList(projects.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleClick = (projectID) => {
        navigate(projectID.toString());
    }

    const thData = () => {

        return headerColumns.map((data, index) => {
            return(
                <th key={index}>{data}</th>
            )
        })
    }

    const tdData = () => {

        return projectList.map((project, index) => {

            return (
                <tr key={project.id}>
                    <td>{project.cis_id}</td>
                    <td>{project.name}</td>
                    <td><Button size="sm" onClick={() => handleClick(project.id)}>View</Button></td>
                </tr>
            );

        })        
    }


    useEffect(() => {
        getProjectList();
    }, [])

    
    return(
        
        <Card >
            <Card.Header>
                <Row>
                    <Col sm={10}>
                        Projects
                    </Col>
                    <Col align='end'>
                        <span onClick={() => navigate('create')}><MdAddCircle/></span>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Table size="sm" striped bordered hover responsive>
                    <thead>
                        <tr>
                            {thData()}
                        </tr>
                    </thead>
                    <tbody>
                        {tdData()}
                    </tbody>
                </Table>
            </Card.Body>

        </Card>
    );
}
export default ProjectsTable;