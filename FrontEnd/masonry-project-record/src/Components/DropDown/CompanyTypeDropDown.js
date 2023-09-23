import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function CompanyTypeDropDown(props){

    const [companyTypeData, setCompanyTypeData] = useState([]);
    
    const getCompanyTypeData = () => {
        axios.get('http://localhost:8080/lookup/company-type')
        .then((companyTypes) => {
            setCompanyTypeData(companyTypes.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getCompanyTypeData()
    }, []);

    return(
        <Form.Select
            className={props.className}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            size={props.size}
            required={props.required}
        >
            <option value={''}>Company Type</option>
            {companyTypeData.map((companyType) => {
                return(
                    <option key={companyType.id} value={companyType.id}>{companyType.name}</option>
                )
            })}
        </Form.Select>
    )
}
