import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function FrameMatrialsDropDown(props){

    const [frameMaterialData, setFrameMaterialData] = useState([]);
    
    const getFrameMaterialData = () => {
        axios.get('http://localhost:8080/lookup/frame-material')
        .then((frameMaterial) => {
            setFrameMaterialData(frameMaterial.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getFrameMaterialData()
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
            <option value={''}>Frame Material</option>
            {frameMaterialData.map((frameMaterial) => {
                return(
                    <option key={frameMaterial.id} value={frameMaterial.id}>{frameMaterial.name}</option>
                )
            })}
        </Form.Select>
    )
}
