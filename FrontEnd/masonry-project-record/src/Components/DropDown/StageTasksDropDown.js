import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';
import { useNavigate } from 'react-router-dom';

export default function StageTasksDropDown(props){

    const navigate = useNavigate();
    const [taskData, setTaskData] = useState([]);
    
    const getTaskData = (stageID) => {
        LookupAPIs.GetStageTasks(stageID)
        .then((tasks) => {
            setTaskData(tasks.data)
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
        if(props.stageID !== ''){
            getTaskData(props.stageID)
        }
    }, [props.stageID]);

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
            <option value={''}>Task</option>
            {taskData.map((task) => {
                return(
                    <option key={task.id} value={task.id}>{task.name}</option>
                )
            })}
        </Form.Select>
    )
}
