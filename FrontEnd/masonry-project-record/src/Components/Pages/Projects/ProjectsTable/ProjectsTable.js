import React, { useEffect, useState } from "react";
import {Card, Row, Col, Button, Table} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import ProjectAPIs from "../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";

function ProjectsTable(){

    const [projectList, setProjectList] = useState([]);

    const navigate = useNavigate();
    const headerColumns = ["CIS ID", "Title"];
    const [loading, setLoading] = useState(true);

    const getProjectList = () => {
       
        ProjectAPIs.GetAllProjects()
        .then((projects) => {
            setProjectList(projects.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err)
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
                else{
                    window.alert(err.response.data.message)
                }
            }
        })
    }

    const deleteProject = (projectID) => {
        ProjectAPIs.DeleteProject(projectID)
        .then((response) => {
            if(response.status === 200){
                getProjectList();
            }
        })
        .catch((err) => {
            console.log(err)
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
                else{
                    window.alert(err.response.data.message)
                }
            }
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
                    <td><Button size="sm" variant="danger" onClick={() => handleDelete(project.id)}>Delete</Button></td>
                    <td><Button size="sm" onClick={() => handleClick(project.id)}>View</Button></td>
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
}
export default ProjectsTable;