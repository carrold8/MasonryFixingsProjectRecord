import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';

export default function CountyDropDown(props){

    const [countyData, setCountyData] = useState([]);
    
    const getCountyData = () => {
        LookupAPIs.GetCounties()
        .then((counties) => {
            setCountyData(counties.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getCountyData()
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
            <option value={''}>County</option>
            {countyData.map((county) => {
                return(
                    <option key={county.id} value={county.id}>{county.county}</option>
                )
            })}
        </Form.Select>
    )
}
