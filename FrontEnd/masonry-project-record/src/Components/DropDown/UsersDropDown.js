import React, { useState } from "react";
import { Form } from "react-bootstrap";
import LookupAPIs from "../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import { useNavigate } from "react-router-dom";

export default function UsersDropDown(props){

    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUserData = () => {
        LookupAPIs.GetUsers()
        .then((response) => {
            if(response.status === 200){
                setUserData(response.data);
                setLoading(false);
            }
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

    useState(() => {
        getUserData()
    }, [])

    if(loading){
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
                <option>Loading...</option>
            </Form.Select>
        )
    }

    else{

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
                        <option key={user.id} value={user.id}>{user.first_name} {user.last_name}</option>
                    )
                })}
            </Form.Select>
        )
    }
}