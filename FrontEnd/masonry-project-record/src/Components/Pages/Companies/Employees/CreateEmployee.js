import React, { useState } from "react";

function CreateEmployee({AddNewEmployee}){

    const EmployeeTypes = ['Account Contact', 'Foreman','Safety Officer', 'Store Man', 'Architect', 'Engineer']
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
            <select onChange={(e) => setEmployeeType(e.target.value)} required value={employeeType} >
                <option value={''}>Employee Type</option>
                {EmployeeTypes.map((type, index) => {return(<option key={index} value={parseInt(index + 1)}>{type}</option>)})}
            </select>
            <label>Phone</label>
            <input onChange={(e) => setPhone(e.target.value)} required value={phone} />
            <button type="submit">Create</button>
        </form>
    )
}
export default CreateEmployee;