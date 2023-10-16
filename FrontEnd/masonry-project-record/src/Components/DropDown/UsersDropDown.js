import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function UsersDropDown(props){

    const [userData, setUserData] = useState([]);

    const getUserData = () => {
        axios.get('http://localhost:8080/lookup/users')
        .then((response) => {
            if(response.status === 200){
                setUserData(response.data);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useState(() => {
        getUserData()
    }, [])


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
            <option value={''}>User</option>
            {userData.map((user) => {
                return(
                    <option key={user.id} value={user.id}>{user.name}</option>
                )
            })}
        </Form.Select>
    )
}