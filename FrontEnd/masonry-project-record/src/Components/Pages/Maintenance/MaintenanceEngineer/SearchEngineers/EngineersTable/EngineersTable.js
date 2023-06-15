import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

function EngineersTable(){

    const navigate = useNavigate();
    return(
        <div style={{ border: '1px solid blue'}}>
            <Table striped hover size='sm' >
                <thead style={{backgroundColor:'blue', color: "white"}}>
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
                        <td onClick={() => navigate('view-engineer')}><Button>View</Button></td>
                    </tr>
                    <tr>
                        <td>Contractor B</td>
                        <td>Cork</td>
                        <td>Middleton</td>
                        <td><Button onClick={() => navigate('view-engineer')}>View</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div> 
    )
}
export default EngineersTable;