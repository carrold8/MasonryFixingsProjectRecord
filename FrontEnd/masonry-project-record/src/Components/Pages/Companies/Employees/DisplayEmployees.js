import React, {useEffect, useState} from "react";
import CreateEmployee from "./CreateEmployee";
import axios from 'axios';

function DisplayEmployees({CompanyID}){


    const EmployeeTypes = ['Engineer', 'Account Contact', 'Foreman', 'Architect']


    const [employeeData, setEmployeeData] = useState([]);
    const [showAdd, setShowAdd] = useState(false);


    // const AddNewEmployee = (employeeType, firstName, lastName, phone) => {


    //     const tempData = [...employeeData];
    //     tempData.push(
    //         {id: tempData.length + 1, companyID: CompanyID, employeeType: employeeType, firstName: firstName, lastName: lastName, phone: phone},
    //     )
    //     setEmployeeData(tempData);
    //     setShowAdd(false)

    // }

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
        <div style={{border: '1px solid green', padding: '1rem'}}>
            <h3>Employees:</h3>

            <table >
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((employee) => {
                    
                            return (
                                <tr key={employee.id}>
                                    <td>{employee.first_name} </td> 
                                    <td>{employee.last_name} </td> 
                                    <td>{EmployeeTypes[employee.employee_type_id]}</td> 
                                    <td>{employee.phone}</td> 
                                </tr>       
                            )
                    })}
                </tbody>
            </table>
            <button onClick={() => setShowAdd(!showAdd)} style={{backgroundColor: 'grey', padding: '0.25rem'}}>Add Employeee: </button>
            {showAdd && <CreateEmployee AddNewEmployee={addEmployee} />}
        </div>
    )

    

}
export default DisplayEmployees;