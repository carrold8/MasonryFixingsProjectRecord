import React from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ContractorsTable({ContractorsData}){

    const navigate = useNavigate();

    return(
        <div>
            <Table striped hover size='sm'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Head Office</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Contractor A</td>
                        <td>Dublin</td>
                        <td>Blanch</td>
                        <td onClick={() => navigate('view-contractor')}><Button>View</Button></td>
                    </tr>
                    <tr>
                        <td>Contractor B</td>
                        <td>Cork</td>
                        <td>Middleton</td>
                        <td><Button onClick={() => navigate('view-contractor')}>View</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div> 
    )

}
export default ContractorsTable;