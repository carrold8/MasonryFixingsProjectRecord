import React, {useEffect, useState} from "react";
import CreateEmployee from "./CreateEmployee";
import axios from 'axios';
import { FiChevronDown} from 'react-icons/fi';

function DisplayEmployees({CompanyID}){

    const [employeeData, setEmployeeData] = useState([]);
    const [showEmployees, setShowEmployees] = useState(false);
    const [showAdd, setShowAdd] = useState(false);


    const addEmployee = (employeeType, firstName, lastName, phone) => {
        
        const PostJSON = {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            employee_type_id: employeeType,
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
                <div><FiChevronDown onClick={() => setShowEmployees(!showEmployees)} /></div>
            </div>
            
            { showEmployees && 
            <>           
            <hr/> 
            <table style={{width: '100%'}}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>Phone</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((employee) => {
                    
                            return (
                                <tr key={employee.id}>
                                    <td>{employee.first_name} </td> 
                                    <td>{employee.last_name} </td> 
                                    <td>{employee.employee_type.name}</td> 
                                    <td>{employee.phone}</td> 
                                    <td>Edit</td> 
                                </tr>       
                            )
                    })}
                </tbody>
            </table>
            <button onClick={() => setShowAdd(!showAdd)} style={{backgroundColor: 'grey', padding: '0.25rem'}}>Add Employeee: </button>
            </>

                }
            {showAdd && <CreateEmployee AddNewEmployee={addEmployee} />}
        </div>
    )

    

}
export default DisplayEmployees;