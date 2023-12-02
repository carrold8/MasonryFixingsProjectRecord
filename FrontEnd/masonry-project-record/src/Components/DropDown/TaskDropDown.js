import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';

export default function TaskDropDown(props){

    const [taskData, setTaskData] = useState([]);
    
    const getTaskData = () => {
        LookupAPIs.GetTask()
        .then((tasks) => {
            setTaskData(tasks.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getTaskData()
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
            <option value={''}>Task</option>
            {taskData.map((task) => {
                return(
                    <option key={task.id} value={task.id}>{task.name}</option>
                )
            })}
        </Form.Select>
    )
}
