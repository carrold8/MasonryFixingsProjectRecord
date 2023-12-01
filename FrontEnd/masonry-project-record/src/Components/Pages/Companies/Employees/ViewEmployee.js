import React, { useEffect, useState } from "react";
import DropDown from "../../../DropDown/DropDown";
import EmployeeAPIs from "../../../../MasonyFixingsAPIs/EmployeeAPIs/EmployeeAPIs";

export default function ViewEmployee({employeeID}){

    const [loading, setLoading] = useState(true);
    const [edit, setEdit] = useState(false);

    const [employeeData, setEmployeeData] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phone, setPhone] = useState();
    const [employeeTypeID, setEmployeeTypeID] = useState();

    const getEmployee = (employeeID) => {

        EmployeeAPIs.GetEmployee(employeeID)
        .then((response) => {
            if(response.status === 200){
                setEmployeeData(response.data);
                console.log('Employee: ', response.data);
                setFirstName(response.data.first_name);
                setLastName(response.data.last_name);
                setPhone(response.data.phone);
                setEmployeeTypeID(response.data.employee_type_id);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const updateEmployee = (e) => {

        e.stopPropagation();
        e.preventDefault();

        const putJSON = {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            employee_type_id: employeeTypeID
        }

        EmployeeAPIs.PutEmployee(employeeID, putJSON)
        .then((response) => {
            setEdit(false);
            getEmployee(employeeData);
        })
        .catch((err) => {
            console.log(err);
        })

    }


    useEffect(() => {
        getEmployee(employeeID);
    }, [employeeID]);

    if(loading){
        return(<div>Loading employee...</div>)
    }
    else{
    return(
        <form onSubmit={updateEmployee}>
        <div className="single-employee">
        
       
            <div>{edit ? <input value={firstName} onChange={(e) => setFirstName(e.target.value)} /> : firstName} </div> 
            <div>{edit ? <input value={lastName} onChange={(e) => setLastName(e.target.value)} /> : lastName} </div> 
            <div>{edit ? <DropDown.EmployeeType value={employeeTypeID} onChange={(e) => setEmployeeTypeID(e.target.value)} /> : <DropDown.EmployeeType value={employeeTypeID} disabled />}</div> 
            <div>{edit ? <input value={phone} onChange={(e) => setPhone(e.target.value)} /> : phone}</div> 
            {edit ? 
                <div><button type="submit">Save</button> <button onClick={() => setEdit(false)}>Cancel</button></div>
                :
                <div onClick={() => setEdit(true)}>Edit</div> 
            }
        
        </div>
        </form>
    )
    }


}