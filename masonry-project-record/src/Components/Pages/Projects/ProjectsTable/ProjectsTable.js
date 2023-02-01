import React from "react";
import {Card, Row, Col, Button, Table} from 'react-bootstrap';
import { MsnryBlue } from "../../../../Constants/Constants";

function ProjectsTable({projectsData}){
    
    const headerColumns = ["ID", "Title", "Contractor", "Current Stage"];

    const handleClick = (data) => {

        localStorage.setItem("ProjectData", JSON.stringify(data));

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
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.contractor}</td>
                    <td>{data.currentStage}</td>
                    <td><Button size="sm" onClick={() => handleClick(data)}>Edit</Button></td>
                </tr>
            );

        })

        
    }

    
    return(
        
        <Card>
            <Card.Header style={{color: "white", backgroundColor: MsnryBlue, fontWeight: "bold"}}>
                <Row>
                    <Col sm={10}>
                        Projects
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body style={{height: '300px', overflow: "auto"}}>
                <Table striped bordered hover>
                    <thead>
                        {thData()}
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