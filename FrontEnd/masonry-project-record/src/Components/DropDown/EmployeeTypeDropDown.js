import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';
import { useNavigate } from 'react-router-dom';

export default function EmployeeTypeDropDown(props){

    const navigate = useNavigate();
    const [employeeTypeData, setEmployeeTypeData] = useState([]);
    
    const getEmployeeTypeData = () => {
        LookupAPIs.GetEmployeeType()
        .then((employeeTypes) => {
            setEmployeeTypeData(employeeTypes.data)
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
        getEmployeeTypeData()
    }, []);

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
            <option value={''}>Employee Type</option>
            {employeeTypeData.map((employeeType) => {
                return(
                    <option key={employeeType.id} value={employeeType.id}>{employeeType.name}</option>
                )
            })}
        </Form.Select>
    )
}
