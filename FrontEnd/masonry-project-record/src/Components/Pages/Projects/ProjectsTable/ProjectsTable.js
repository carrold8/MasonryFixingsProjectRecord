import React, { useEffect, useState } from "react";
import {Card, Row, Col, Button, Table} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { MdAddCircle, MdDelete } from "react-icons/md";
import ProjectAPIs from "../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";
import { FaArrowAltCircleRight } from "react-icons/fa";
import './ProjectsTable.css';
import ApiResponseHandler from "../../../../MasonyFixingsAPIs/ApiResponseHandler";

function ProjectsTable(){

    const [projectList, setProjectList] = useState([]);

    const navigate = useNavigate();
    const headerColumns = ["CIS ID", "Title", 'Delete', 'View'];
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);

    const getProjectList = () => {
       
        ProjectAPIs.GetAllProjects()
        .then((projects) => {
            setProjectList(projects.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err)
            ApiResponseHandler(err.response, navigate);
        })
    }

    const deleteProject = (projectID) => {
        setSending(true);
        ProjectAPIs.DeleteProject(projectID)
        .then((response) => {
            if(response.status === 200){
                getProjectList();
                setSending(false);
            }
        })
        .catch((err) => {
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })
    }
    const handleClick = (projectID) => {
        navigate(projectID.toString());
    }

    const handleDelete = (projectID) => {
        if(window.confirm('Are you sure you wish to delete this project? All data will be lost including sales data for this project. This cannot be undone.')){
            deleteProject(projectID);
        }
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
                    <td><button disabled={sending} onClick={() => handleDelete(project.id)}><MdDelete/></button></td>
                    <td><button disabled={sending} onClick={() => handleClick(project.id)}><FaArrowAltCircleRight/></button></td>
                </tr>
            );

        })        
    }


    useEffect(() => {
        getProjectList();
    }, [])

    if(loading){
        return(
            <h4>Loading Project List...</h4>
        )
    }
    else{
        return(
            <Card className="projects-table">
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
}
export default ProjectsTable;