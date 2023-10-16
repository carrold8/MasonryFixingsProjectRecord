import React, {useState, useEffect} from "react";
import axios from "axios";
import {Table} from 'react-bootstrap'  
import AddInduction from "../AddInduction/AddInduciton";

export default function ViewInductionTable({projectID}){


    const [loading, setLoading] = useState(true);
    const [inductionInfo, setInductionInfo] = useState([]);
    const [addIndcution, setAddIndcution] = useState(false);
    
    const getInductions = (projectID) => {
        axios.get('http://localhost:8080/project/' + projectID + '/inductions')
        .then((inductions) => {
            setInductionInfo(inductions.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getInductions(projectID);
    }, [projectID])

    const handleAddNew = () => {
        setAddIndcution(false);
        getInductions(projectID);
    }


    const ColumnHeaderData = ['Name', 'Date']

    const thData = () => {
        return ColumnHeaderData.map((header, index) => {
            return(
                <th key={index}>{header}</th>
            )
        })
    }

    const tdData = () => {

        return inductionInfo.map((inductee, index) => {
            return(
                <tr key={index}>
                    <td>{inductee.user.name}</td>
                    <td>{inductee.date}</td>
                </tr>
            )
        })
    }

    if(loading){
        return(<div>Loading...</div>)
    }
    else{
        return(
            <div>
                <span onClick={() => setAddIndcution(!addIndcution)}>Add</span>
                <Table striped hover>
                    <thead>
                    <tr>{thData()}</tr>
                    </thead>
                    <tbody>
                        {
                            inductionInfo.length === 0 ?
                            <tr><td>No inductions</td></tr>
                            :
                            <>{tdData()}</>
                        }

                        {addIndcution && <AddInduction projectID={projectID} handleAddNew={handleAddNew} />}
                    </tbody>
                </Table>
            </div>
        )
            
    }

}
