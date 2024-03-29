import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';
import { useNavigate } from 'react-router-dom';

export default function PartitioningMatrialsDropDown(props){

    const navigate = useNavigate();
    const [partitioningeMaterialData, setPartitioningMaterialData] = useState([]);
    
    const getPartitioningMaterialData = () => {
        LookupAPIs.GetPartitioningMaterial()
        .then((partitioningMaterial) => {
            setPartitioningMaterialData(partitioningMaterial.data)
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
