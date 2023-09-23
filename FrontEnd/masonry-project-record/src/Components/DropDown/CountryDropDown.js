import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function CountryDropDown(props){

    const [countryData, setCountryData] = useState([]);
    
    const getCountryData = () => {
        axios.get('http://localhost:8080/lookup/country')
        .then((countries) => {
            setCountryData(countries.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getCountryData()
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
            <option value={''}>Country</option>
            {countryData.map((country) => {
                return(
                    <option key={country.id} value={country.id}>{country.country}</option>
                )
            })}
        </Form.Select>
    )
}
