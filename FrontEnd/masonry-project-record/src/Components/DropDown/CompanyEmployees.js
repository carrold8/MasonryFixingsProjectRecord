import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

export default function CompanyEmployees(props){
    const [employeeData, setEmployeeData] = useState([]);
    
    const getEmployeeData = (companyID) => {
        axios.get('http://localhost:8080/company/' + companyID + '/employees')
        .then((employees) => {
            setEmployeeData(employees.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getEmployeeData(props.companyID)
    }, [props.companyID]);

    return(
        <Form.Select
            className={props.className}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            size={props.size}
            required={props.required}
            disabled={props.disabled}
        >
            <option value={''}>Employee</option>
            {employeeData.map((employee) => {
                return(
                    <option key={employee.id} value={employee.id}>{employee.first_name} {employee.last_name}</option>
                )
            })}
        </Form.Select>
    )

}