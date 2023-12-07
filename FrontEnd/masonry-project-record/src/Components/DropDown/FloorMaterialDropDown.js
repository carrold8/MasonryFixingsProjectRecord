import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';

export default function FloorMatrialsDropDown(props){

    const [floorMaterialData, setFloorMaterialData] = useState([]);
    
    const getFloorMaterialData = () => {
        LookupAPIs.GetFloorMaterial()
        .then((floorMaterial) => {
            setFloorMaterialData(floorMaterial.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getFloorMaterialData()
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
            <option value={''}>Floor Material</option>
            {floorMaterialData.map((floorMaterial) => {
                return(
                    <option key={floorMaterial.id} value={floorMaterial.id}>{floorMaterial.name}</option>
                )
            })}
        </Form.Select>
    )
}
