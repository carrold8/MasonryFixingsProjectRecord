import React, {useEffect, useState} from "react";
import CreateEmployee from "./CreateEmployee";
import axios from 'axios';

function DisplayEmployees({CompanyID}){


    const EmployeeTypes = ['Engineer', 'Account Contact', 'Foreman', 'Architect']

    // const dummyEmployees = [
    //     {id: 1, companyID: 1, employeeType: 2, firstName: 'Joe', lastName: 'Bloggs', phone: '1'},
    //     {id: 2, companyID: 3, employeeType: 3, firstName: 'Bill', lastName: 'Flaked', phone: '2'},
    //     {id: 3, companyID: 3, employeeType: 1, firstName: 'Grahamn', lastName: 'McGee', phone: '3'},
    //     {id: 4, companyID: 2, employeeType: 0, firstName: 'Sarah', lastName: "O'Connor", phone: '4'},
    //     {id: 5, companyID: 1, employeeType: 1, firstName: 'Joe', lastName: 'Bloggs', phone: '5'},
    //     {id: 6, companyID: 2, employeeType: 3, firstName: 'Joe', lastName: 'Bloggs', phone: '6'},
    //     {id: 7, companyID: 1, employeeType: 1, firstName: 'Joe', lastName: 'Bloggs', phone: '7'},
    // ]


    const [employeeData, setEmployeeData] = useState([]);
    const [showAdd, setShowAdd] = useState(false);


    const AddNewEmployee = (employeeType, firstName, lastName, phone) => {


        const tempData = [...employeeData];
        tempData.push(
            {id: tempData.length + 1, companyID: CompanyID, employeeType: employeeType, firstName: firstName, lastName: lastName, phone: phone},
        )
        setEmployeeData(tempData);
        setShowAdd(false)

    }

    const getCompanyEmployees = (id) => {
   
        axios.get('http://localhost:8080/company/' + id + '/employees')
        .then((response) => {
            console.log(response.data.data);
            setEmployeeData(response.data.data);
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
            {showAdd && <CreateEmployee AddNewEmployee={AddNewEmployee} />}
        </div>
    )

    

}
export default DisplayEmployees;