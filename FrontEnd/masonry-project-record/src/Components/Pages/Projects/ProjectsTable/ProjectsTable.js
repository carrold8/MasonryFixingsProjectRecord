import React from "react";
import {Card, Row, Col, Button, Table} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { MsnryBlue } from "../../../../Constants/Constants";

function ProjectsTable({projectsData}){

    const navigate = useNavigate();
    const headerColumns = ["CIS ID", "Title", "Contractor", 'Engineer', 'Architect', "Current Stage"];

    const handleClick = (data) => {

        localStorage.setItem("ProjectData", JSON.stringify(data));
        navigate('stages');
    }

    const thData = () => {

        return headerColumns.map((data, index) => {
            return(
                <th key={index}>{data}</th>
            )
        })
    }

    const tdData = () => {

        return projectsData.map((data, index) => {

            return (
                <tr key={index}>
                    <td>{data.cisID}</td>
                    <td>{data.title}</td>
                    <td>{data.contractor}</td>
                    <td>{data.engineer}</td>
                    <td>{data.architect}</td>
                    <td>{data.currentStage}</td>
                    <td><Button size="sm" onClick={() => handleClick(data)}>Edit</Button></td>
                </tr>
            );

        })

        
    }

    
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