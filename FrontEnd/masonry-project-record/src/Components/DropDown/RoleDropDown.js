import React from "react";
import { Form } from "react-bootstrap";

export default function RoleDropDown(props){
    
    const roleData = ['Admin', 'Management', 'Sales']; 

    

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
            <option value={''}>Role</option>
            {roleData.map((role, index) => {
                return(
                    <option key={index} value={role}>{role}</option>
                )
            })}
        </Form.Select>
    )
}