import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';
import { useNavigate } from 'react-router-dom';

export default function CompanyTypeDropDown(props){

    const navigate = useNavigate();
    const [companyTypeData, setCompanyTypeData] = useState([]);
    
    const getCompanyTypeData = () => {
        LookupAPIs.GetCompanyType()
        .then((companyTypes) => {
            setCompanyTypeData(companyTypes.data)
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
