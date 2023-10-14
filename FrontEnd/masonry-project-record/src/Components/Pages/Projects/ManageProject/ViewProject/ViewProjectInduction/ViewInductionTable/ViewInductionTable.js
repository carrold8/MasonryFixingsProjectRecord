import React, {useState, useEffect} from "react";
import axios from "axios";
import {Table} from 'react-bootstrap'  

export default function ViewInductionTable({projectID}){


    const [loading, setLoading] = useState(true);
    const [inductionInfo, setInductionInfo] = useState([]);
    
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

        if(inductionInfo.length === 0){
            return(
                <div>Nobody has been inducted yet</div>
            )
        }
        else{
            return(
                <div>
                    <Table striped hover>
                        <thead>
                        <tr>{thData()}</tr>
                        </thead>
                        <tbody>
                            {tdData()}
                        </tbody>
                    </Table>
                </div>
            )
            }
    }

}
