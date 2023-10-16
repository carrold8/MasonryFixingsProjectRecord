import React, { useEffect, useState } from "react";
import './ViewProjectAnchorTraining.css';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import AddAnchorTraining from "./AddAnchorTraining/AddAnchorTraining";

export default function ViewProjectAnchorTraining({projectInfo}){

    const ColumnHeaders = ['Delviered By', 'Date', 'Note']

    const [loading, setLoading] = useState(true);
    const [anchorTrainingData, setAnchorTrainingData] = useState([]);
    const [showAddNew, setShowAddNew] = useState(false);

    const getAnchorTraining = (projectID) => {
        axios.get('http://localhost:8080/project/' + projectID +'/anchor-training')
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
        getAnchorTraining(projectInfo.id);
    }


    const thData = () => {

        return ColumnHeaders.map((header, index) => {
            return(
                <th key={index}>{header}</th>
            )
        })
    }

    const tdData = () => {
        return anchorTrainingData.map((training) => {
            return(
                <tr key={training.id}>
                    <td>{training.user.name}</td>
                    <td>{training.date}</td>
                    <td style={{width: '50%'}}>{training.note}</td>
                </tr>
            )
        })
    }

    useEffect(() => {
        getAnchorTraining(projectInfo.id)
    }, [projectInfo.id])

    if(loading){
        return(<div>Loading...</div>)
    }
    else{
        return(
            <div className="view-project-anchor-training">
                <h3>Anchor Training</h3>
                <span onClick={() => setShowAddNew(!showAddNew)}>Add</span>

                <Table hover striped>
                    <thead>
                        <tr>{thData()}</tr>
                    </thead>
                    <tbody>
                        {anchorTrainingData.length === 0? 
                        <tr><td>No training</td></tr>   
                        :
                        <>{tdData()}</> 
                        
                    }
                    {showAddNew && <AddAnchorTraining projectID={projectInfo.id} handleAddNew={handleAddNew} />} 
                    </tbody>
                </Table>

                
            </div>
        )
        
    }
    
}