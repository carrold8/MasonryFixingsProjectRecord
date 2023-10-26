import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function PartitioningMatrialsDropDown(props){

    const [partitioningeMaterialData, setPartitioningMaterialData] = useState([]);
    
    const getPartitioningMaterialData = () => {
        axios.get('http://localhost:8080/lookup/partitioning-material')
        .then((partitioningMaterial) => {
            setPartitioningMaterialData(partitioningMaterial.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getPartitioningMaterialData()
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
            <option value={''}>Partitioning Material</option>
            {partitioningeMaterialData.map((partitioningMaterial) => {
                return(
                    <option key={partitioningMaterial.id} value={partitioningMaterial.id}>{partitioningMaterial.name}</option>
                )
            })}
        </Form.Select>
    )
}
