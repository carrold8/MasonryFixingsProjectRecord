import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function CountyDropDown(props){

    const [countyData, setCountyData] = useState([]);
    
    const getCountyData = () => {
        axios.get('http://localhost:8080/lookup/county')
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
