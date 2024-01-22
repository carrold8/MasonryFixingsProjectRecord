import React, {useEffect, useState} from "react";
import CreateEmployee from "./CreateEmployee";
import { FaChevronDown, FaChevronUp} from 'react-icons/fa';
import ViewEmployee from "./ViewEmployee";
import { Card, Row, Col, Table } from "react-bootstrap";
import CompanyAPIs from "../../../../../MasonyFixingsAPIs/CompanyAPIs/CompanyAPIs";
import { MdAddCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ViewEmployees({CompanyID}){

    const navigate = useNavigate();
    const ColumnHeaders = ['First Name', 'Last Name', 'Phone', '', ''];
    const [employeeData, setEmployeeData] = useState([]);
    const [showEmployees, setShowEmployees] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

    const getCompanyEmployees = (id) => {
   
        CompanyAPIs.GetCompanyEmployees(id)
        .then((response) => {
            setEmployeeData(response.data);
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
        setShowAdd(false);
        getCompanyEmployees(CompanyID);
    }

    const thData = () => {
        return ColumnHeaders.map((header, index) => {
            return(<th key={index}>{header}</th>)
        })
    }
    useEffect(() => {
        getCompanyEmployees(CompanyID);
    }, [CompanyID])

    return(
        <div className="company-card">
            <div className="component-card-title">
                <h4>Employees:</h4>
                <div>{employeeData.length}</div>
                <div>{showEmployees ? <FaChevronUp onClick={() => {setShowEmployees(!showEmployees); setShowAdd(false)}} /> : <FaChevronDown onClick={() => setShowEmployees(!showEmployees)} />}</div>
            </div>
            
            
            <div className={showEmployees ? 'employee-details active' : 'employee-details'}>           
            <hr/>
            <Card>
                <Card.Header>
                    <Row>
                        <Col>Employees</Col>  
                        <Col align='end'>
                            <span onClick={() => setShowAdd(!showAdd)}><MdAddCircle/></span>
                        </Col>  
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Table hover striped responsive>
                        <thead>
                            <tr>
                                {thData()}
                            </tr>
                        </thead>
                        <tbody>
                            {showAdd && <CreateEmployee companyID={CompanyID} handleAddNew={handleAddNew}/>}
                            {employeeData.map((employee) => {
                                
                                return (
                                    <ViewEmployee key={employee.id} companyID={CompanyID} getEmployees={getCompanyEmployees} employeeID={employee.id} />      
                                )
                            })}
                        </tbody>
                    </Table>
                </Card.Body>

            </Card>
            
               
            </div>

            
        </div>
    )

}