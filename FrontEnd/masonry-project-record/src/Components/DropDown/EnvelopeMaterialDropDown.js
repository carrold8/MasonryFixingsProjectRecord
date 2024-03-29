import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';
import { useNavigate } from 'react-router-dom';

export default function EnvelopeMatrialsDropDown(props){

    const navigate = useNavigate();
    const [envelopeMaterialData, setEnvelopeMaterialData] = useState([]);
    
    const getEnvelopeMaterialData = () => {
        LookupAPIs.GetEnvelopeMaterial()
        .then((envelopeMaterial) => {
            setEnvelopeMaterialData(envelopeMaterial.data)
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
