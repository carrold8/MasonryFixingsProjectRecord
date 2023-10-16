import React, { useState } from "react";
import DropDown from "../../../DropDown/DropDown";

function CreateEmployee({AddNewEmployee}){
    
    const [employeeType, setEmployeeType] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');


    const handleSubmit = (e) => {

        e.preventDefault();
        e.stopPropagation();
        AddNewEmployee(employeeType, firstName, lastName, phone);
    }
    

    

    return(
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input onChange={(e) => setFirstName(e.target.value)} required value={firstName} />
            <label>Last Name</label>
            <input onChange={(e) => setLastName(e.target.value)} required value={lastName} />

            <label>Employee Type</label>
            <DropDown.EmployeeType required value={employeeType} onChange={(e) => setEmployeeType(e.target.value)} />
            <label>Phone</label>
            <input onChange={(e) => setPhone(e.target.value)} required value={phone} />
            <button type="submit">Create</button>
        </form>
    )
}
export default CreateEmployee;