import React, {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import CompanyAPIs from '../../MasonyFixingsAPIs/CompanyAPIs/CompanyAPIs';
import { useNavigate } from 'react-router-dom';

export default function CompanyEmployees(props){
    const navigate = useNavigate();
    const [employeeData, setEmployeeData] = useState([]);
    
    const getEmployeeData = (companyID) => {
        CompanyAPIs.GetCompanyEmployees(companyID)
        .then((employees) => {
            setEmployeeData(employees.data)
        })
        .catch((err) => {
            console.log(err)
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
            }
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