import React, { useEffect, useState } from "react";
import './ViewProjectAnchorTraining.css';
import {Card, Table, Row, Col} from 'react-bootstrap';
import AddAnchorTraining from "./AddAnchorTraining/AddAnchorTraining";
import { useParams } from "react-router-dom";
import ViewAnchorTraining from "./ViewAnchorTraining";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import ProjectAPIs from "../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";

export default function ViewProjectAnchorTraining(){

    const params = useParams();

    const ColumnHeaders = ['Delviered By', 'Date', 'Note', 'Edit']

    const [loading, setLoading] = useState(true);
    const [showTable, setShowTable] = useState(false);
    const [anchorTrainingData, setAnchorTrainingData] = useState([]);
    const [showAddNew, setShowAddNew] = useState(false);

    const getAnchorTraining = (projectID) => {
        ProjectAPIs.GetProjectAnchorTraining(projectID)
        .then((response) => {
            if(response.status === 200){
                setAnchorTrainingData(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleAddNew = () => {
        setShowAddNew(false);
        getAnchorTraining(params.ProjectID);
    }


    const thData = () => {

        return ColumnHeaders.map((header, index) => {
            return(
                <th key={index}>{header}</th>
            )
        })
    }


    useEffect(() => {
        getAnchorTraining(params.ProjectID)
    }, [params.ProjectID])

    if(loading){
        return(<div>Loading...</div>)
    }
    else{
        return(
            <div className="view-project-anchor-training-container">

                <div className="title">
                    <h3>Anchor Training</h3>
                    <span align='center' onClick={() => setShowTable(!showTable)}>
                            {showTable ? <FaChevronUp/> : <FaChevronDown/>}
                    </span>
                </div>
                

                <div className={showTable ? 'show-anchor-training active' : 'show-anchor-training'}>
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col>
                                    <strong>Anchor Training</strong>
                                </Col>    
                                <Col align='end'>
                                <span onClick={() => setShowAddNew(!showAddNew)}><MdAddCircle/></span>
                                </Col>
                            </Row>
                        </Card.Header>
                    

                        <Card.Body>
                            
                            <Table hover striped responsive>
                                <thead>
                                    <tr>{thData()}</tr>
                                </thead>
                                <tbody>
                                    {showAddNew && <AddAnchorTraining projectID={params.ProjectID} handleAddNew={handleAddNew} />} 
                                    {anchorTrainingData.length === 0? 
                                    <tr><td>No training</td></tr>   
                                    :
                                    anchorTrainingData.map((anchorTraining) => {
                                        return(
                                            <ViewAnchorTraining 
                                                key={anchorTraining.id} 
                                                anchorTraining={anchorTraining}
                                                getAnchorTraining={getAnchorTraining} 
                                            />
                                        )
                                    })
                                
                                    
                                }
                                
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </div>
                

                
            </div>
        )
        
    }
    
}