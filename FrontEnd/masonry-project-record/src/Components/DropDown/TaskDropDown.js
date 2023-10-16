import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function TaskDropDown(props){

    const [taskData, setTaskData] = useState([]);
    
    const getTaskData = () => {
        axios.get('http://localhost:8080/lookup/task')
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
