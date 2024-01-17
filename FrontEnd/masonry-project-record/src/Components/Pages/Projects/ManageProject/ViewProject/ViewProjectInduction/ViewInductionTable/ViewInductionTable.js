import React, {useState, useEffect} from "react";
import {Card, Table, Row, Col} from 'react-bootstrap'  
import AddInduction from "../AddInduction/AddInduciton";
import ProjectAPIs from "../../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";
import ViewInduction from "./ViewInduction";
import { MdAddCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ViewInductionTable({projectID}){

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [inductionInfo, setInductionInfo] = useState([]);
    const [addIndcution, setAddIndcution] = useState(false);
    
    const getInductions = (projectID) => {
        ProjectAPIs.GetProjectInductionList(projectID)
        .then((inductions) => {
            setInductionInfo(inductions.data);
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

    useEffect(() => {
        getInductions(projectID);
    }, [projectID])

    const handleAddNew = () => {
        setAddIndcution(false);
        getInductions(projectID);
    }


    const ColumnHeaderData = ['Name', 'Date', 'Edit'];

    const thData = () => {
        return ColumnHeaderData.map((header, index) => {
            return(
                <th key={index}>{header}</th>
            )
        })
    }


    if(loading){
        return(<div>Loading...</div>)
    }
    else{
        return(
            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            <strong>Project Induction List</strong>
                        </Col>    
                        <Col align='end'>
                        <span onClick={() => setAddIndcution(!addIndcution)}><MdAddCircle/></span>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Table striped hover responsive>
                        <thead>
                        <tr>{thData()}</tr>
                        </thead>
                        <tbody>
                            {addIndcution && <AddInduction projectID={projectID} handleAddNew={handleAddNew} />}
                            {
                                inductionInfo.length === 0 ?
                                <tr><td>No inductions</td></tr>
                                :
                                inductionInfo.map((induction) => {
                                    return(
                                        <ViewInduction key={induction.id} induction={induction} getInductionData={getInductions}/>
                                    )
                                })
                            }

                            
                        </tbody>
                    </Table>
                </Card.Body>
                
            </Card>
        )
            
    }

}
