import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';

export default function RoofMatrialsDropDown(props){

    const [roofMaterialData, setRoofMaterialData] = useState([]);
    
    const getRoofMaterialData = () => {
        LookupAPIs.GetRoofMaterial()
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
            disabled={props.disabled}
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
