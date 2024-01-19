import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';
import { useNavigate } from 'react-router-dom';

export default function TaskTypeDropDown(props){

    const navigate = useNavigate();
    const [taskTypeData, setTaskTypeData] = useState([]);
    
    const getTaskTypeData = (taskID) => {
        LookupAPIs.GetTaskType(taskID)
        .then((taskTypes) => {
            setTaskTypeData(taskTypes.data)
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
        if(props.taskID !== ''){
            getTaskTypeData(props.taskID)
        }
    }, [props.taskID]);

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
            <option value={''}>Task Type</option>
            {taskTypeData.map((taskType) => {
                return(
                    <option key={taskType.id} value={taskType.id}>{taskType.name}</option>
                )
            })}
        </Form.Select>
    )
}
