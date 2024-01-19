import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';
import { useNavigate } from 'react-router-dom';

export default function StageDropDown(props){

    const navigate = useNavigate();
    const [stageData, setStageData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getStageData = () => {
        LookupAPIs.GetStage()
        .then((response) => {
            setStageData(response.data)
            setLoading(false);
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
