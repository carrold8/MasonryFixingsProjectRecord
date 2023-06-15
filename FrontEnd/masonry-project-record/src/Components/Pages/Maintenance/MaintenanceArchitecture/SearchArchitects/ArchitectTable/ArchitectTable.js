import React from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ArchitectTable(){

    const navigate = useNavigate();
    return(
        <div style={{ border: '1px solid rgb(3, 162, 3)'}}>
            <Table striped hover size='sm' >
                <thead style={{backgroundColor:'rgb(3, 162, 3)', color: "white"}}>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Head Office</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>Contractor A</td>
                        <td>Dublin</td>
                        <td>Blanch</td>
                        <td onClick={() => navigate('view-architect')}><Button>View</Button></td>
                    </tr>
                    <tr>
                        <td>Contractor B</td>
                        <td>Cork</td>
                        <td>Middleton</td>
                        <td><Button onClick={() => navigate('view-architect')}>View</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div> 
    )
}
export default ArchitectTable;