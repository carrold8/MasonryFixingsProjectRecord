import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function StageDropDown(props){

    const [stageData, setStageData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getStageData = () => {
        axios.get('http://localhost:8080/lookup/stage')
        .then((response) => {
            setStageData(response.data)
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getStageData()
    }, []);

    if(loading){
        return(
            <Form.Select
                className={props.className}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                size={props.size}
                required={props.required}
                disabled
            >
                <option value={''}>Loading..</option>
            </Form.Select>
        )
    }

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
            <option value={''}>Stage</option>
            {stageData.map((stage) => {
                return(
                    <option key={stage.id} value={stage.id}>{stage.name}</option>
                )
            })}
        </Form.Select>
    )
}
