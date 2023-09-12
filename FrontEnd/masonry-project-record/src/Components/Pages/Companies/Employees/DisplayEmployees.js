import React, {useEffect, useState} from "react";
import CreateEmployee from "./CreateEmployee";
import axios from 'axios';
import { FiChevronDown, FiChevronUp} from 'react-icons/fi';
import SingleEmployee from "./SingleEmployee";

function DisplayEmployees({CompanyID}){

    const [employeeData, setEmployeeData] = useState([]);
    const [showEmployees, setShowEmployees] = useState(false);
    const [showAdd, setShowAdd] = useState(false);


    const addEmployee = (employeeType, firstName, lastName, phone) => {
        
        const PostJSON = {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            employee_type_id: parseInt(employeeType),
            company_id: CompanyID
        }

        axios.post(
            'http://localhost:8080/company/' + CompanyID + '/employee',
            PostJSON)
            .then((newEmployee) => {
                setShowAdd(false);
                getCompanyEmployees(CompanyID)
            })            

    }

    const getCompanyEmployees = (id) => {
   
        axios.get('http://localhost:8080/company/' + id +'/employees')
        .then((response) => {
            setEmployeeData(response.data);
        }) 
        .catch((err) => {
            console.log(err);
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
                <div>{showEmployees ? <FiChevronUp onClick={() => {setShowEmployees(!showEmployees); setShowAdd(false)}} /> : <FiChevronDown onClick={() => setShowEmployees(!showEmployees)} />}</div>
            </div>
            
            
            <div className={showEmployees ? 'employee-details active' : 'employee-details'}>           
            <hr/> 
            
                <div className="single-employee">
                    
                        <strong>First Name</strong>
                        <strong>Last Name</strong>
                        <strong>Role</strong>
                        <strong>Phone</strong>
                        <strong>Edit</strong>
                    
                </div>
                <div>
                    {employeeData.map((employee) => {
                    
                            return (
                                <SingleEmployee key={employee.id} employeeData={employee} getEmployee={getCompanyEmployees} />      
                            )
                    })}
                </div>
            {/* </table> */}
            <button onClick={() => setShowAdd(!showAdd)} style={{backgroundColor: 'grey', padding: '0.25rem'}}>Add Employeee: </button>
            </div>

            {showAdd && <CreateEmployee AddNewEmployee={addEmployee} />}
        </div>
    )

    

}
export default DisplayEmployees;