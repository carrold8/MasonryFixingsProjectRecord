import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function TaskTypeDropDown(props){

    const [taskTypeData, setTaskTypeData] = useState([]);
    
    const getTaskTypeData = () => {
        axios.get('http://localhost:8080/lookup/task-type')
        .then((taskTypes) => {
            setTaskTypeData(taskTypes.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getTaskTypeData()
    }, []);

    return(
        <Form.Select
            className={props.className}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            size={props.size}
            required={props.required}
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
