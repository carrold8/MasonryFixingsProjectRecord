import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function EnvelopeMatrialsDropDown(props){

    const [envelopeMaterialData, setEnvelopeMaterialData] = useState([]);
    
    const getEnvelopeMaterialData = () => {
        axios.get('http://localhost:8080/lookup/envelope-material')
        .then((envelopeMaterial) => {
            setEnvelopeMaterialData(envelopeMaterial.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getEnvelopeMaterialData()
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
            <option value={''}>Envelope Material</option>
            {envelopeMaterialData.map((envelopeMaterial) => {
                return(
                    <option key={envelopeMaterial.id} value={envelopeMaterial.id}>{envelopeMaterial.name}</option>
                )
            })}
        </Form.Select>
    )
}
