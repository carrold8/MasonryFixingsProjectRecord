import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';
import { useNavigate } from 'react-router-dom';

export default function FrameMatrialsDropDown(props){

    const navigate = useNavigate();
    const [frameMaterialData, setFrameMaterialData] = useState([]);
    
    const getFrameMaterialData = () => {
        LookupAPIs.GetFrameMaterial()
        .then((frameMaterial) => {
            setFrameMaterialData(frameMaterial.data)
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
