import React, { useEffect, useState } from "react";
import {Card, Row, Col, Button, Table} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { MsnryBlue } from "../../../../Constants/Constants";
import axios from "axios";

function ProjectsTable({projectsData}){


    const [projectList, setProjectList] = useState([]);

    const navigate = useNavigate();
    const headerColumns = ["CIS ID", "Title"];

    const getProjectList = () => {
        axios.get('http://localhost:8080/project')
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
        
        <Card style={{width: '75%'}}>
            <Card.Header style={{color: "white", backgroundColor: MsnryBlue, fontWeight: "bold"}}>
                <Row>
                    <Col sm={10}>
                        Projects
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body style={{maxHeight: '300px', overflow: "auto"}}>
                <Table size="sm" striped bordered hover >
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