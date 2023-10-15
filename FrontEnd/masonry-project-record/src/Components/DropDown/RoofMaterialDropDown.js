import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function RoofMatrialsDropDown(props){

    const [roofMaterialData, setRoofMaterialData] = useState([]);
    
    const getRoofMaterialData = () => {
        axios.get('http://localhost:8080/lookup/roof-material')
        .then((roofMaterial) => {
            setRoofMaterialData(roofMaterial.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getRoofMaterialData()
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
            <option value={''}>Roof Material</option>
            {roofMaterialData.map((roofMaterial) => {
                return(
                    <option key={roofMaterial.id} value={roofMaterial.id}>{roofMaterial.name}</option>
                )
            })}
        </Form.Select>
    )
}
