import React, { useState } from "react";
import axios from "axios";

function SingleEmployee({employeeData, getEmployee}){

    const [edit, setEdit] = useState(false);

    const [firstName, setFirstName] = useState(employeeData.first_name);
    const [lastName, setLastName] = useState(employeeData.last_name);
    const [phone, setPhone] = useState(employeeData.phone);
    const [employeeTypeID, setEmployeeTypeID] = useState(employeeData.employee_type.id);

    const updateEmployee = (e) => {

        e.stopPropagation();
        e.preventDefault();

        const postJSON = {
            id: employeeData.id,
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            employee_type_id: employeeTypeID
        }

        axios.put('http://localhost:8080/company/' + employeeData.company_id + '/employee', postJSON)
        .then((response) => {
            setEdit(false);
            getEmployee(employeeData.company_id);
        })
        .catch((err) => {
            console.log(err);
        })

    }



    return(
        <form onSubmit={updateEmployee}>
        <div className="single-employee">
        
       
            <div>{edit ? <input value={firstName} onChange={(e) => setFirstName(e.target.value)} /> : employeeData.first_name} </div> 
            <div>{edit ? <input value={lastName} onChange={(e) => setLastName(e.target.value)} /> : employeeData.last_name} </div> 
            <div>{edit ? <input value={employeeTypeID} onChange={(e) => setEmployeeTypeID(e.target.value)} /> : employeeData.employee_type.name}</div> 
            <div>{edit ? <input value={phone} onChange={(e) => setPhone(e.target.value)} /> : employeeData.phone}</div> 
            {edit ? 
                <div><button type="submit">Save</button> <button onClick={() => setEdit(false)}>Cancel</button></div>
                :
                <div onClick={() => setEdit(true)}>Edit</div> 
            }
        
        </div>
        </form>
    )


}
export default SingleEmployee;