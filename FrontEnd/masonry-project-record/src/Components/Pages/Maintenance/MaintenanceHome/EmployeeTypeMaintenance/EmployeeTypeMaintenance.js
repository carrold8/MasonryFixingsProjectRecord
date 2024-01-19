import React, { useEffect, useState } from "react";
import CreateEmployeeType from "./CreateEmployeeType/CreateEmployeeType";
import ViewEmployeeType from "./ViewEmployeeType";
import { Card, Table, Row, Col } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import LookupAPIs from "../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import { useNavigate } from "react-router-dom";

export default function EmployeeTypeMaintenance(){

    const navigate = useNavigate();
    const [employeeTypeData, setEmployeeTypeData] = useState([]);
    const [addNew, setAddNew] = useState(false);

    const getEmployeeTypes = () => {
        LookupAPIs.GetEmployeeType()
        .then((response) => {
            if(response.status === 200){
                setEmployeeTypeData(response.data);
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

    const handleAddNew = () => {
        setAddNew(false);
        getEmployeeTypes();
    }

    useEffect(() => {
        getEmployeeTypes();
    }, [])

    return(
        <Card>
            <Card.Header>
                <Row>
                    <Col>
                        <strong>Employee Type Maintenance</strong>
                    </Col>   
                    <Col align='end'>
                    <span onClick={() => setAddNew(!addNew)}><MdAddCircle/></span>
                    </Col>
                </Row>

            </Card.Header>
            <Card.Body>
                {addNew && <CreateEmployeeType handleAddNew={handleAddNew} />}
                <Table responsive>
                    <tbody>
                        {employeeTypeData.map((type) => {
                            return(
                                <ViewEmployeeType key={type.id} employeeType={type} getEmployeeTypeData={getEmployeeTypes} />
                            )
                        })}
                    </tbody>
                
                </Table>
            </Card.Body>

            
        </Card>
    )
}