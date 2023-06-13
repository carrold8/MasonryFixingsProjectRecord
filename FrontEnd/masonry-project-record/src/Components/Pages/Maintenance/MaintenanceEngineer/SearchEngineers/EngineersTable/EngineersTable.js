import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

function EngineersTable(){

    const navigate = useNavigate();
    return(
        <div>
            <Table striped hover size='sm'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>County</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Contractor A</td>
                        <td>Dublin</td>
                        <td>Dublin</td>
                        <td onClick={() => navigate('view-engineer')}><Button>View</Button></td>
                    </tr>
                    <tr>
                        <td>Contractor B</td>
                        <td>Cork</td>
                        <td>Cork</td>
                        <td><Button onClick={() => navigate('view-engineer')}>View</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div> 
    )
}
export default EngineersTable;